import styles from "./styles.module.css";

export default function CardLogin() {
  return (
    <>
      <div className={styles.cardContainer}>
        <h1>Entrar</h1>
        <form className={styles.formLogin}>
          <input
            className={styles.inputText}
            type="text"
            placeholder="Email ou número de celular"
          />
          <input className={styles.inputText} type="text" placeholder="Senha" />
          <button className={styles.buttonToEnter}>Entrar</button>
          <p className={styles.or}>OU</p>
          <button>Usar um código de acesso</button>
          <a href="">Esqueceu a senha?</a>
          <label className={styles.rememberMe}>
            <input type="checkbox" />
            Lembre-se de mim
          </label>
        </form>
        <div className={styles.footerCard}>
          <p>
            Novo por aqui?<a href="">Assine agora</a>
          </p>
          <p>
            <span>
              Esta página é protegida pelo Google reCAPTCHA para garantir que
              você não é um robô. <a href="">Saiba mais.</a>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
