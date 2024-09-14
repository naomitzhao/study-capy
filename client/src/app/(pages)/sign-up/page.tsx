'use client';

import Header from "../../(components)/header/header";
import Footer from "../../(components)/footer/footer";
import Link from "next/link";
import styles from "./page.module.css";
import React, { useState } from "react";
import ValidatedInput from "../../(components)/validatedInput/validatedInput";

export default function Page() {
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState(0);

    function changeErrors(value: number) {
        setErrors(errors + value);
    }
    
    function isValidSubmit(e: Event) {
        console.log(e);
    }

    return (
        <div id={styles.page}>
            <Header />
            <div id={styles.content}>
                <h1>sign up</h1>
                <form id={styles.logInForm}>
                    <div id={styles.formInputs}>
                        <ValidatedInput field="email" changeErrors={changeErrors}></ValidatedInput>
                        <ValidatedInput field="username" changeErrors={changeErrors}></ValidatedInput>
                        <ValidatedInput field="password" setPassword={setPassword} changeErrors={changeErrors}></ValidatedInput>
                        <ValidatedInput field="confirm password" chosenPassword={password} changeErrors={changeErrors}></ValidatedInput>
                    </div>
                    <button id={styles.formButton} onClick={(e) => {
                        if (errors) {
                            e.preventDefault();
                        }
                    }}>sign up</button>
                </form>
                <p>have an account already? <Link href="log-in" id={styles.signUpLink}>log in</Link></p>
            </div>
            <Footer />
        </div>
    );
}