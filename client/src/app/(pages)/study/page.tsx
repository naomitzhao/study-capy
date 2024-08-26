import styles from "./page.module.css";
import Stopwatch from "../../(components)/stopwatch/stopwatch";

export default function Study() {
  return (
    <main id={styles.main}>
      <h1 id={styles.mainHeader}>study</h1>
      <Stopwatch></Stopwatch>
    </main>
  );
}
