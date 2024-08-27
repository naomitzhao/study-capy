"use client";

import TimeText from "../timeText/timeText";
import styles from "./stopwatch.module.css";
import Image from "next/image";

interface StopwatchProps {
    time: number,
    active: boolean,
    sessionTime: number,
    endStudy: Function,
}

export default function Stopwatch({ time, active, sessionTime, endStudy }: StopwatchProps) {
    return (
        <div id={styles.stopwatch}>
            <div className={styles.mainTime}>
                <h2>today</h2>
                <TimeText milliseconds={time} extraStyle={styles.largeTime}></TimeText>
            </div>
            <div className={(active)? styles.showSession : styles.hideSession}>
                <h3>this session</h3>
                <TimeText milliseconds={sessionTime} extraStyle={styles.smallTime}></TimeText>
            </div>
        </div>
    );
}
