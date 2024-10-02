"use client";

import Footer from "../../(components)/footer/footer";
import Header from "../../(components)/header/header";
import styles from "./page.module.css";
import Link from "next/link";

export default function Page() {
    async function handleSubmit(e: Event) {
        if (!e) {
            throw new Error("something went wrong :(");
        }
        e.preventDefault();
        console.log(e);
        if (!e.target) {
            return (<div>error D:</div>);
        }
        console.log(e.target.elements[0].value);
        console.log(e.target.elements[1].value)

        const result = await fetch("http://localhost:3000/log-in", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: e.target.elements[0].value,
                password: e.target.elements[1].value,
            }),
        })
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