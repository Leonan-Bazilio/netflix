import { useState } from "react";
import styles from "./styles.module.css";

export default function CardLogin() {
  const [login, setLogin] = useState({ email: "", password: "" });

  function handleChange(event) {
    setLogin({ ...login, [event.target.name]: event.target.value });
  }
  return (
    <>
      <div className={styles.cardContainer}>
        <h1>Entrar</h1>
        <form className={styles.formLogin}>
          <div>
            <label htmlFor="email">Email ou número de celular</label>
            <input
              value={login.email}
              onChange={handleChange}
              name="email"
              className={styles.inputText}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              value={login.password}
              onChange={handleChange}
              name="password"
              className={styles.inputText}
              type="password"
            />
          </div>
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
