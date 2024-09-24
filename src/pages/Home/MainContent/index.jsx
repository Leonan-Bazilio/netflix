import styles from "./styles.module.css";
import MediaCarousel from "./MediaCarousel";
import play from "../../../assets/images/icon/play.svg";
import info from "../../../assets/images/icon/info.svg";
import deadepoolTitle from "../../../assets/images/deadpool_and_wolverine_title.png";
import { useState, useEffect } from "react";

export default function MainContent() {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    let timer;
    if (isHovered) {
      timer = setTimeout(() => setIsExpanded(true), 500);
    } else {
      timer = setTimeout(() => setIsExpanded(false), 5000);
    }
    return () => clearTimeout(timer);
  }, [isHovered]);
  return (
    <main className={styles.container}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <section className={styles.featuredSection}>
          <div className={styles.feature}>
            <div
              className={styles.divTitle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img className={styles.imgTitle} src={deadepoolTitle} alt="" />
            </div>
            <div
              className={`${styles.descriptionWrapper} ${
                isExpanded ? styles.visible : ""
              }`}
            >
              <p className={`${styles.description} `}>
                Um apático Wade Wilson trabalha duro na vida civil. Seus dias
                como mercenário moralmente flexível, Deadpool, ficou para trás.
                Quando seu planeta enfrenta uma ameaça, Wade deve relutantemente
                vestir-se novamente com um ainda mais relutante... relutante?
                Mais relutante? Ele deve convencer um Wolverine relutante em...
                Porra. As sinopses são tão estúpidas.
              </p>
            </div>
            <div className={styles.containerButtons}>
              <div className={styles.divWatch}>
                <img src={play} alt="" />
                <button className={styles.btnWatch}>Assistir</button>
              </div>
              <div className={styles.divMore}>
                <img src={info} alt="" />
                <button className={styles.btnMore}>Mais informações</button>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.teste}>
          <MediaCarousel partOfUrl={"movie/popular"} textSection="Filmes" />
          <MediaCarousel partOfUrl={"tv/popular"} textSection="Series" />
          <MediaCarousel textSection="Ação" genre={"28"} />
          <MediaCarousel
            textSection="Comedia"
            genre={"35"}
            withoutGenres="28"
          />
        </section>
      </div>
    </main>
  );
}
