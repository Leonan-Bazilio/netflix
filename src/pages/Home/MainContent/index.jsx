import styles from "./styles.module.css";
import MediaCarousel from "../MediaCarousel";
import play from "../../../assets/images/icon/play.svg";
import info from "../../../assets/images/icon/info.svg";
export default function MainContent() {
  return (
    <main className={styles.container}>
      <div className={styles.backgroundImage}></div>{" "}
      <div className={styles.content}>
        <section className={styles.featuredSection}>
          <div className={styles.feature}>
            <h1>DeadPool e wolverine</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam molestias aliquam earum velit deserunt praesentium aut
              fugit, modi iure fuga eveniet perferendis accusamus ratione
              dolore. Rerum animi dolor hic odio repudiandae, nisi eum,
              exercitationem quibusdam provident est numquam dignissimos amet?
            </p>
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
          <MediaCarousel partOfUrl={"movie/popular"} />
          <MediaCarousel partOfUrl={"tv/popular"} />
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
