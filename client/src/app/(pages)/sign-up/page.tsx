import Header from "../../(components)/header/header";
import Footer from "../../(components)/footer/footer";
import Link from "next/link";
import styles from "./page.module.css";

export default function Page() {
    return (
        <div id={styles.page}>
            <Header />
            <div id={styles.content}>
                <h1>sign up</h1>
                <form id={styles.logInForm}>
                    <div id={styles.formInputs}>
                        <input type="email" placeholder="email"/>
                        <input type="text" placeholder="username"/>
                        <input type="password" placeholder="password"/>
                        <input type="password" placeholder="confirm password"/>
                    </div>
                    <button id={styles.formButton}>sign up</button>
                </form>
                <p>have an account already? <Link href="log-in" id={styles.signUpLink}>log in</Link></p>
            </div>
            <Footer />
        </div>
    );
}