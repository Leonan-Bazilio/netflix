import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import MediaCarousel from "../MediaCarousel";

export default function MainContent() {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextClicked, setNextClicked] = useState(false);

  const getMovies = () => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "5902d0084e4efa1e5f3fdf3c7adcaab4",
        language: "pt-BR",
        with_genres: 28,
      },
    }).then((response) => {
      setMovies(response.data.results);
      console.log(response.data.results);
    });
  };
  useEffect(() => {
    getMovies();
  }, []);

  const handleNext = () => {
    if (!nextClicked) {
      setNextClicked(true);
    }
    if (currentIndex < 3) {
      return setCurrentIndex((currentValue) => currentValue + 1);
    }
    return setCurrentIndex(0);
  };
  const handlePrev = () => {
    if (currentIndex > 0) {
      return setCurrentIndex((currentValue) => currentValue - 1);
    }
    return setCurrentIndex(3);
  };

  return (
    <main className={styles.container}>
      <section className={styles.featuredSection}>
        <div className={styles.feature}>
          <h1>DeadPool e wolverine</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            molestias aliquam earum velit deserunt praesentium aut fugit, modi
            iure fuga eveniet perferendis accusamus ratione dolore. Rerum animi
            dolor hic odio repudiandae, nisi eum, exercitationem quibusdam
            provident est numquam dignissimos amet?
          </p>
          <button>assistir</button>
          <button>mais informaçoes</button>
        </div>
      </section>

      <MediaCarousel partOfUrl={"movie/popular"} />
      <MediaCarousel partOfUrl={"tv/popular"} />
      <MediaCarousel textSection="Ação" genre={"28"} />
      <MediaCarousel textSection="Comedia" genre={"35"} withoutGenres="28" />
    </main>
  );
}
