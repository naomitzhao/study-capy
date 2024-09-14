import Footer from "../../(components)/footer/footer";
import Header from "../../(components)/header/header";
import styles from "./page.module.css";
import Link from "next/link";

export default function Page() {
    return (
        <div id={styles.page}>
            <Header />
            <div id={styles.content}>
                <h1>log in</h1>
                <form id={styles.logInForm}>
                    <div id={styles.formInputs}>
                        <input type="text" placeholder="username"/>
                        <input type="password" placeholder="password"/>
                    </div>
                    <button id={styles.formButton}>log in</button>
                </form>
                <p>don&apos;t have an account? <Link href="sign-up" id={styles.signUpLink}>sign up</Link></p>
            </div>
            <Footer />
        </div>
    );
}