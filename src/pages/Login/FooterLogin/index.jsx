import styles from "./styles.module.css";
import smallArrow from "../../../assets/images/icon/smallArrow.svg";
import letterTranslate from "../../../assets/images/icon/letterTranslate.svg";
import { useState } from "react";

export default function FooterLogin() {
  const [language, setLanguage] = useState("pt");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <div className={styles.container}>
      <p>
        Duvidas? Ligue{" "}
        <a className={styles.numberPhone} href="">
          0800 591 2876
        </a>
      </p>
      <div className={styles.linksContainer}>
        <a href="">Perguntas frequentes</a>
        <a href="">Central de Ajuda</a>
        <a href="">Termos de Uso</a>
        <a href="">Privacidade</a>
        <a href="">Preferências de cookies</a>
        <a href="">Informações corporativas</a>
      </div>
      <div className={styles.langSelector}>
        <img src={letterTranslate} className={styles.iconLetter} />
        <select
          value={language}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="pt">Português</option>
          <option value="en">English</option>
        </select>
        <img src={smallArrow} className={styles.iconArrow} />
      </div>
    </div>
  );
}
