import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import axios from "axios";
export default function MainContent() {
  return (
    <div className={styles.container}>
      <div className={styles.featuredSection}>
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
      </div>
    </div>
  );
}

/*
const [movies, setMovies] = useState([]);

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


<div>
      <img
        src={
          "https://image.tmdb.org/t/p/original/xq4v7JE8niZ75OYYPDGNn6Gzpyt.jpg"
        }
        alt=""
      />
      <ul>
        {movies.map((movie) => {
          return (
            <li>
              {movie.title}
              <p>{movie.overview}</p>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt=""
              />
            </li>
          );
        })}
      </ul>
    </div>

5902d0084e4efa1e5f3fdf3c7adcaab4

eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTAyZDAwODRlNGVmYTFlNWYzZmRmM2M3YWRjYWFiNCIsIm5iZiI6MTcyNjAwNjA5OC44ODUwODQsInN1YiI6IjY2ZTBjMGEzMDAwMDAwMDAwMDIyODg1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M37uhBmbaGzqrtwOMxZhEpOIDJZbFfEQWnnDgRfKoW4 */
