import styles from "./styles.module.css";

export default function FooterCardLogin() {
  return (
    <div className={styles.footerCard}>
      <p>
        <span className={styles.clearer}>Novo por aqui? </span>
        <a href="">Assine agora</a>
      </p>
      <p>
        <span className={styles.infoSecurity}>
          Esta página é protegida pelo Google reCAPTCHA para garantir que você
          não é um robô. <a href="">Saiba mais.</a>
        </span>
      </p>
    </div>
  );
}
