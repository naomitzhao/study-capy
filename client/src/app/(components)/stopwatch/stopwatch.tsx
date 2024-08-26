"use client";

import TimeText from "../timeText/timeText";
import styles from "./stopwatch.module.css";
import React, { useState, useEffect } from "react";

export default function Stopwatch() {
    const [time, setTime] = useState(0);
    const [prevTime, setPrevTime] = useState(0);
    const [sessionTime, setSessionTime] = useState(0);
    const [start, setStart] = useState<number>(0);
    const [active, setActive] = useState(false);

    function setupBeforeUnloadListener() {
        window.addEventListener("beforeunload", (e) => {
            e.preventDefault();
        });
    }

    useEffect(() => setupBeforeUnloadListener, []);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (active) {
            interval = setInterval(() => {
                const newSessionTime = Date.now() - start.valueOf();
                setSessionTime(newSessionTime);
                setTime(prevTime + newSessionTime);
            }, 100);
        }
        return () => {
            clearInterval(interval)
        };
    }, [prevTime, sessionTime, start, active]);

    function handleButtonPress() {
        if (active) {
            setActive(false);
            const newTime = Math.floor(time / 1000) * 1000
            setTime(newTime)
            setPrevTime(newTime);
            setSessionTime(0);
        } else {
            setStart(Date.now());
            setActive(true);
        }
    }

    return (
        <div id={styles.stopwatch}>
            <div>
                <h3>total study time</h3>
                <TimeText milliseconds={time}></TimeText>
            </div>
            <div>
                <h3>this session</h3>
                <TimeText milliseconds={sessionTime}></TimeText>
            </div>
            <button id={styles.studyButton} onClick={ () => handleButtonPress() }>start / stop</button>
        </div>
    );
}
