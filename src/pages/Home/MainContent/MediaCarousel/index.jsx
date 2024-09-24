import { useState, useEffect } from "react";
import styles from "./styles.module.css";

import { MdArrowBackIos } from "react-icons/md";
import axios from "axios";
import MovieCard from "./MovieCard";

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
            without_genres: withoutGenres,
          },
        }
      );
      const allMovies = [
        ...responsePage1.data.results,
        ...responsePage2.data.results,
      ];
      console.log(allMovies);
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
              <MovieCard
                movieId={"last"}
                title={movies[movies.length - 1].title}
                backdropPath={movies[movies.length - 1].backdrop_path}
                arrayGenreId={movies[movies.length - 1].genre_ids}
                toHide={nextClicked}
              />
            )}

            {movies.map((movie) => {
              return (
                <MovieCard
                  movieId={movie.id}
                  title={movie.title}
                  backdropPath={movie.backdrop_path}
                  arrayGenreId={movie.genre_ids}
                />
              );
            })}
            {movies[0] && (
              <MovieCard
                movieId={"firstMovie"}
                title={movies[0].title}
                backdropPath={movies[0].backdrop_path}
                arrayGenreId={movies[0].genre_ids}
              />
            )}
          </div>

          <div onClick={handleNext} className={styles.divIconNext}>
            <MdArrowBackIos className={styles.arrowIcon} />
          </div>

          <div
            onClick={handlePrev}
            className={`${styles.divIconPrev} ${
              nextClicked ? styles.active : ""
            }`}
          >
            <MdArrowBackIos className={styles.arrowIcon} />
          </div>
        </div>
      </div>
    </section>
  );
}
