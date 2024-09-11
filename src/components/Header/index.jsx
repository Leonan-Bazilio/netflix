import styles from "./styles.module.css";

import netflixLogo from "../../assets/images/netflixLogo2.png";
import searchIcon from "../../assets/images/icon/search.svg";
import notificationIcon from "../../assets/images/icon/notification.svg";
import profile1 from "../../assets/images/profile/naruto.jpg";

export default function Header() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logoAndNav}>
          <div className={styles.logo}>
            <img src={netflixLogo} alt="" />
          </div>
          <nav className={styles.nav}>
            <a href="">Inicio</a>
            <a href="">Séries</a>
            <a href="">Filmes</a>
            <a href="">Bombando</a>
            <a href="">Minha lista</a>
            <a href="">Navegar por idiomas</a>
          </nav>
        </div>
        <div className={styles.others}>
          <img src={searchIcon} />
          <a href="">Infantil</a>
          <img src={notificationIcon} />
          <div className={styles.menu}>
            <img className={styles.profile1} src={profile1} />
          </div>
        </div>
      </div>
    </>
  );
}
