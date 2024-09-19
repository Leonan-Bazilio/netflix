import Header from "./Header";
import MainContent from "./MainContent";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <MainContent />
    </div>
  );
}
