import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import axios from "axios";

export default function MediaCarousel({
  genre = "",
  withoutGenres = "",
  partOfUrl = "discover/movie",
  textSection = "Filmes e Series",
}) {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextClicked, setNextClicked] = useState(false);

  const getMovies = async () => {
    try {
      const responsePage1 = await axios.get(
        `https://api.themoviedb.org/3/${partOfUrl}`,
        {
          params: {
            api_key: "5902d0084e4efa1e5f3fdf3c7adcaab4",
            language: "pt-BR",
            with_genres: genre,
            page: 1,
            without_genres: withoutGenres,
          },
        }
      );

      const responsePage2 = await axios.get(
        `https://api.themoviedb.org/3/${partOfUrl}`,
        {
          params: {
            api_key: "5902d0084e4efa1e5f3fdf3c7adcaab4",
            language: "pt-BR",
            with_genres: genre,
            page: 2,
          },
        }
      );
      const allMovies = [
        ...responsePage1.data.results,
        ...responsePage2.data.results,
      ];
      setMovies(allMovies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleNext = () => {
    if (!nextClicked) {
      setNextClicked(true);
    }
    if (currentIndex < 7) {
      return setCurrentIndex((currentValue) => currentValue + 1);
    }
    return setCurrentIndex(0);
  };
  const handlePrev = () => {
    if (currentIndex > 0) {
      return setCurrentIndex((currentValue) => currentValue - 1);
    }
    return setCurrentIndex(7);
  };

  return (
    <section className={styles.collectionsSection}>
      <div className={styles.corouselAndTitle}>
        <h2>{textSection}</h2>
        <div className={styles.moviesCarouselAndArraw}>
          <div
            className={styles.moviesCarousel}
            style={{ transform: `translateX(-${20 + 100 * currentIndex}%)` }}
          >
            {movies[movies.length - 1] && (
              <div className={styles.movieCard} key={"last"}>
                <img
                  className={nextClicked ? "" : styles.toHide}
                  src={`https://image.tmdb.org/t/p/w1280${movies[19].backdrop_path}`}
                  alt={movies[19].title}
                />
              </div>
            )}

            {movies.map((movie) => {
              return (
                <div className={styles.movieCard} key={movie.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                    alt=""
                  />
                </div>
              );
            })}
            {movies[0] && (
              <div className={styles.movieCard} key={"firstMovie"}>
                <img
                  src={`https://image.tmdb.org/t/p/w1280${movies[0].backdrop_path}`}
                  alt={movies[0].title}
                />
              </div>
            )}
          </div>

          <button className={styles.nextArrow} onClick={handleNext}></button>
          <button className={styles.prevArrow} onClick={handlePrev}></button>
        </div>
      </div>
    </section>
  );
}
