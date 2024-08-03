import CardLogin from "../../components/CardLogin";
import Header from "../../components/Header";
import styles from "./styles.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <Header />
      <CardLogin />
    </div>
  );
}
