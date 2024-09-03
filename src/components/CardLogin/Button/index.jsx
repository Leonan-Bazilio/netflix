import styles from "./styles.module.css";

export default function Button({ text, className }) {
  return <button className={`${styles.btn} ${className}`}>{text}</button>;
}
