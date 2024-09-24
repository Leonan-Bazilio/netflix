import styles from "./styles.module.css";
import netflixLogo from "../../../assets/images/netflixLogo2.png";
import searchIcon from "../../../assets/images/icon/search.svg";
import notificationIcon from "../../../assets/images/icon/notification.svg";
import profile1 from "../../../assets/images/profile/summerProfile.jpg";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickSearch = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`${styles.container} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.logoAndNav}>
        <div className={styles.logo}>
          <img src={netflixLogo} alt="Netflix Logo" />
        </div>
        <nav className={styles.nav}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Início
          </NavLink>
          <a href="#">Séries</a>
          <a href="#">Filmes</a>
          <a href="#">Bombando</a>
          <a href="#">Minha lista</a>
          <a href="#">Navegar por idiomas</a>
        </nav>
      </div>
      <div className={styles.others}>
        <div
          className={` ${styles.searchContainer} 
            ${isVisible ? styles.searchContainerOpen : ""}`}
        >
          <img
            onClick={handleClickSearch}
            src={searchIcon}
            alt="Ícone de busca"
          />
          <input
            className={styles.inputSearch}
            type="text"
            placeholder="Títulos, gente e gênero"
          />
        </div>
        <a href="#">Infantil</a>
        <img src={notificationIcon} alt="Notificações" />
        <div className={styles.menu}>
          <img className={styles.profile1} src={profile1} alt="Perfil" />
        </div>
      </div>
    </div>
  );
}
