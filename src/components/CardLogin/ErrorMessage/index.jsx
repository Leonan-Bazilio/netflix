import styles from "./styles.module.css";
import iconErrorInput from "../../../assets/images/errorIcon.svg";
export default function ErrorMessage({ message }) {
  return (
    <div className={styles.errorContainer}>
      <img src={iconErrorInput} alt="Icon" />
      <p>{message}</p>
    </div>
  );
}
