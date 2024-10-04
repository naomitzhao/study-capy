"use client";

import Footer from "../../(components)/footer/footer";
import Header from "../../(components)/header/header";
import styles from "./page.module.css";
import Link from "next/link";
import { navigateStudy } from "../../(util)/actions";

export default function Page() {
    async function handleSubmit(e: Event) {
        e.preventDefault();
        
        const username = (e.target as HTMLFormElement).elements[0].value;
        const password = (e.target as HTMLFormElement).elements[1].value;
    
        const result = await fetch("http://localhost:3000/log-in", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",  // This sends the session cookie with the request
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });

        if (result.ok) {
            navigateStudy();
        }
    }

    return (
        <div id={styles.page}>
            <Header />
            <div id={styles.content}>
                <h1>log in</h1>
                <form id={styles.logInForm} onSubmit={handleSubmit}>
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