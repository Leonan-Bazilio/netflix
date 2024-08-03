import { useState } from "react";
import styles from "./styles.module.css";
import iconErrorInput from "../../assets/images/icon.svg";

export default function CardLogin() {
  const [login, setLogin] = useState({ email: "", password: "" });
  const [focus, setFocus] = useState({ email: false, password: false });
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    setLogin({ ...login, [event.target.name]: event.target.value });
  }

  function handleFocus(event) {
    const nameInputFild = event.target.name;
    setFocus({ ...focus, [nameInputFild]: true });
    setErrors({ ...errors, [nameInputFild]: "" });
  }

  function handleBlur(event) {
    const nameInputFild = event.target.name;
    if (login[nameInputFild] === "") {
      setFocus({ ...focus, [nameInputFild]: false });
    }
    validate(nameInputFild);
  }

  function validate(nameInputFild) {
    const errorsInput = { ...errors };
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nameInputFild === "email" && !regex.test(login.email)) {
      errorsInput.email = "Informe um email válido.";
    } else if (nameInputFild === "email") {
      errorsInput.email = "";
    }

    if (
      nameInputFild === "password" &&
      (login.password.length < 4 || login.password.length > 60)
    ) {
      errorsInput.password = "A senha deve ter entre 4 e 60 caracteres.";
    } else if (nameInputFild === "password") {
      errorsInput.password = "";
    }

    setErrors(errorsInput);
  }

  return (
    <div className={styles.cardContainer}>
      <h1>Entrar</h1>

      <form className={styles.formLogin}>
        <div className={focus.email ? styles.focused : ""}>
          <div className={styles.divFild}>
            <input
              value={login.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="email"
              id="email"
              className={styles.inputText}
              type="text"
            />
            <label htmlFor="email">Email ou número de celular</label>
          </div>
          {errors.email && (
            <div className={styles.errorContainer}>
              <img src={iconErrorInput} alt="Icon" />
              <p className={styles.errorMessage}>{errors.email}</p>
            </div>
          )}
        </div>
        <div className={focus.password ? styles.focused : ""}>
          <div className={styles.divFild}>
            <input
              value={login.password}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="password"
              id="password"
              className={styles.inputText}
              type="password"
            />
            <label htmlFor="password">Senha</label>
          </div>
          {errors.password && (
            <div className={styles.errorContainer}>
              <img src={iconErrorInput} alt="Icon" />
              <p className={styles.errorMessage}>{errors.password}</p>
            </div>
          )}
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
            Esta página é protegida pelo Google reCAPTCHA para garantir que você
            não é um robô. <a href="">Saiba mais.</a>
          </span>
        </p>
      </div>
    </div>
  );
}
