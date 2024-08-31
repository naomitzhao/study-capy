import styles from "./page.module.css";

export default function Home() {
  return (
    <div id={styles.homeMain}>
      <header id={styles.header}><h2>study capy</h2></header>
      <div id={styles.hero}>
        <h1>this is a hero with a cute picture</h1>
        <button>sign in</button>
      </div>
      <main id={styles.content}>
        <p>here is some more info...</p>
      </main>
      <footer id={styles.footer}>made with 🤍 by naomitzhao</footer>
    </div>
  );
}
