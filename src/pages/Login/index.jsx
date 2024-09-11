import CardLogin from "./CardLogin";
import FooterLogin from "./FooterLogin";
import HeaderLogin from "./HeaderLogin";
import styles from "./styles.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <HeaderLogin />
      <CardLogin />
      <FooterLogin />
    </div>
  );
}
