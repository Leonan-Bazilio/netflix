import CardLogin from "../../components/CardLogin";
import FooterLogin from "../../components/FooterLogin";
import HeaderLogin from "../../components/HeaderLogin";
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
