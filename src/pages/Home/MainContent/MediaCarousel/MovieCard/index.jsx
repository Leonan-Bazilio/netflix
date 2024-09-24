import styles from "./styles.module.css";
import { IoIosPlayCircle } from "react-icons/io";
import { AiOutlineLike, AiFillPlusCircle } from "react-icons/ai";
import { MdArrowBackIos } from "react-icons/md";
import { useEffect, useState } from "react";

const genreMap = {
  28: "Ação",
  12: "Aventura",
  16: "Animação",
  35: "Comédia",
  80: "Crime",
  99: "Documentário",
  18: "Drama",
  10751: "Família",
  14: "Fantasia",
  36: "História",
  27: "Terror",
  10402: "Música",
  9648: "Mistério",
  10749: "Romance",
  878: "Ficção científica",
  10770: "Cinema TV",
  53: "Suspense",
  10752: "Guerra",
  37: "Faroeste",
  10759: "Ação e Aventura",
  10762: "Kids",
  10763: "News",
  10764: "Reality",
  10765: "Ficção e Fantasia",
  10766: "Novela",
  10767: "Talk Show",
  10768: "Guerra e Política",
};

export default function ({
  title,
  movieId,
  backdropPath,
  arrayGenreId,
  toHide = true,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const genreNames = arrayGenreId.map((id) => genreMap[id]).filter(Boolean);

  useEffect(() => {
    let timer;
    if (isHovered) {
      timer = setTimeout(() => setIsExpanded(true), 1000);
    } else {
      setIsExpanded(false);
    }
    return () => clearTimeout(timer);
  }, [isHovered]);

  return (
    <div className={styles.layoutWrapper}>
      {toHide && (
        <div
          className={`${styles.container} ${isExpanded ? styles.expanded : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={styles.movieCard} key={movieId}>
            <img
              src={`https://image.tmdb.org/t/p/w1280${backdropPath}`}
              alt=""
            />
          </div>
          <div className={`${styles.extraInfos}`}>
            <div className={styles.containerIcons}>
              <div className={styles.iconsLeft}>
                <IoIosPlayCircle
                  className={`${styles.icon} ${styles.playIcon}`}
                />
                <AiFillPlusCircle
                  className={`${styles.icon} ${styles.addListIcon}`}
                />
                <AiOutlineLike
                  className={`${styles.icon} ${styles.likeIcon}`}
                />
              </div>
              <div className={styles.iconRight}>
                <MdArrowBackIos
                  className={`${styles.icon} ${styles.arrowDetails}`}
                />
              </div>
            </div>
            <div className={styles.divTitle}>
              <h2>{title}</h2>
            </div>
            <div>
              <p>{genreNames.slice(0, 3).join(" • ")}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
