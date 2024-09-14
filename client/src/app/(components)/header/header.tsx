import styles from "./header.module.css";

export default function Header() {
    return (
        <header id={styles.header}>
            <a href="/">
                <h2 id={styles.headerLogo}>study capy</h2>
            </a>
            <nav>
                <a href="/log-in">log in</a>
            </nav>
        </header>
    );
}