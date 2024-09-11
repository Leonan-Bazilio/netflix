import styles from "./styles.module.css";
import iconError from "../../../../assets/images/icon/error.svg";
export default function ErrorMessage({ message }) {
  return (
    <div className={styles.errorContainer}>
      <img src={iconError} alt="Icon" />
      <p>{message}</p>
    </div>
  );
}
