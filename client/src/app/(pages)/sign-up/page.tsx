'use client';

import Header from "../../(components)/header/header";
import Footer from "../../(components)/footer/footer";
import Link from "next/link";
import styles from "./page.module.css";
import React, { useState } from "react";
import ValidatedInput from "../../(components)/validatedInput/validatedInput";

export default function Page() {
    const [password, setPassword] = useState("");
    const [valids, setValids] = useState([false, false, false, false]);
    const [error, setError] = useState("");

    function changeValids(fieldName: string, state: boolean) {
        const newValids = valids;
        let idx = -1;
        if (fieldName == "email") {
            idx = 0;
        } else if (fieldName == "username") {
            idx = 1;
        } else if (fieldName == "password") {
            idx = 2;
        } else if (fieldName == "confirm password") {
            idx = 3;
        } else {
            throw Error("something went wrong :(");
        }
        newValids[idx] = state;
        setValids(newValids);
    }

    function validsSum() {
        let sum = 0;
        for (let i = 0; i < valids.length; i++){
            if (valids[i]) {
                sum += 1;
            }
        }
        return sum;
    }

    async function handleSubmit(e: Event) {
        if (!e) {
            throw new Error("something went wrong :(");
        }
        e.preventDefault();
        console.log(e);
        if (!e.target) {
            return (<div>error D:</div>);
        }

        const result = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: e.target.elements[0].value,
                username: e.target.elements[1].value,
                password: e.target.elements[2].value,
            }),
        });
    }

    return (
        <div id={styles.page}>
            <Header />
            <div id={styles.content}>
                <h1>sign up</h1>
                <p className={styles.errorMessage}>{error}</p>
                <form id={styles.logInForm} onSubmit={handleSubmit}>
                    <div id={styles.formInputs}>
                        <ValidatedInput field="email" changeValids={changeValids}></ValidatedInput>
                        <ValidatedInput field="username" changeValids={changeValids}></ValidatedInput>
                        <ValidatedInput field="password" setPassword={setPassword} changeValids={changeValids}></ValidatedInput>
                        <ValidatedInput field="confirm password" chosenPassword={password} changeValids={changeValids}></ValidatedInput>
                    </div>
                    <button id={styles.formButton} onClick={(e) => {
                        if (validsSum() != 4) {
                            setError("please fill in all fields.");
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