"use client";

import TimeText from "../timeText/timeText";
import styles from "./stopwatch.module.css";
import Image from "next/image";

interface StopwatchProps {
    time: number,
    sessionTime: number,
    endStudy: Function,
}

export default function Stopwatch({ time, sessionTime, endStudy }: StopwatchProps) {
    function handleButtonClick () {
        if (sessionTime) {
            endStudy();
        } else {
            alert("hi");
        }
    }

    return (
        <div>
            <div id={styles.stopwatch}>
                <div id={styles.times}>
                    <div className={styles.mainTime}>
                        <button className={styles.studyButton} onClick={() => handleButtonClick()}>
                            <Image src={(sessionTime != 0) ? "/icons/pause.svg" : "/icons/play.svg"} height={40} width={40} alt={(sessionTime != 0) ? "Pause icon" : "Play icon"} />
                        </button>
                        <TimeText milliseconds={time} extraStyle={styles.largeTime}></TimeText>
                    </div>
                </div>
                <div id={styles.thisSessionContainer}>
                    { sessionTime != 0 && <div className={styles.session}>
                        <p>this session:</p>
                        <TimeText milliseconds={sessionTime} extraStyle={styles.smallTime}></TimeText>
                    </div> }
                </div>
            </div>
        </div>
    );
}
