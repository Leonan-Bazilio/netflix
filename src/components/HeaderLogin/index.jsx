import netflixLogo from "../../assets/images/netflixLogo.png";
import styles from "./styles.module.css";
export default function HeaderLogin() {
  return (
    <div className={styles.container}>
      <img src={netflixLogo} alt="" />
    </div>
  );
}
