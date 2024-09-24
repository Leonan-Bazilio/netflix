import { useState } from "react";
import styles from "./styles.module.css";
import InputField from "./InputField";
import ErrorMessage from "./ErrorMessage";
import Button from "./Button";
import FooterCardLogin from "./FooterCardLogin";
import { useNavigate } from "react-router-dom";

export default function CardLogin() {
  const [login, setLogin] = useState({ email: "", password: "" });
  const [focus, setFocus] = useState({ email: false, password: false });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

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
  function handleSubmit(event) {
    event.preventDefault();
    validate("email");
    validate("password");

    if (!errors.email && !errors.password) {
      navigate("/Home");
    }
  }

  return (
    <div className={styles.cardContainer}>
      <h1>Entrar</h1>
      <form className={styles.formLogin} onSubmit={handleSubmit}>
        <div>
          <InputField
            value={login.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            nameAndId="email"
            type="text"
            label="Email ou número de celular"
            error={errors.email}
            isFocused={focus.email}
          />
          {errors.email && <ErrorMessage message={errors.email} />}
        </div>
        <div>
          <InputField
            value={login.password}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            nameAndId="password"
            type="password"
            label="Senha"
            error={errors.password}
            isFocused={focus.password}
          />
          {errors.password && <ErrorMessage message={errors.password} />}
        </div>
        <Button type="submit" className={styles.buttonToEnter} text="Entrar" />
        <p className={styles.or}>OU</p>
        <Button
          className={styles.btnAcessCode}
          text="Usar um código de acesso"
        />
        <a href="">Esqueceu a senha?</a>
        <label className={styles.rememberMe}>
          <input type="checkbox" />
          Lembre-se de mim
        </label>
      </form>
      <FooterCardLogin />
    </div>
  );
}
