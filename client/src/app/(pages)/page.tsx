import styles from "./page.module.css";
import Header from "../(components)/header/header";
import Footer from "../(components)/footer/footer";

export default function Home() {
  return (
    <div id={styles.page}>
      <Header />
      <div id={styles.hero}>
        <h1>this is a hero with a cute picture</h1>
        <a href="/sign-up">join now!</a>
      </div>
      <main id={styles.content}>
        <p>here is some more info...</p>
      </main>
      <Footer />
    </div>
  );
}
