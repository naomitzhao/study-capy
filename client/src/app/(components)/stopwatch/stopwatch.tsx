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
    return (
        <div>
            <div id={styles.stopwatch}>
                <div id={styles.studyButtonContainer}>
                    { sessionTime != 0 && <button className={styles.studyButton} onClick={() => endStudy()}>
                        <Image src={"/icons/pause.svg"} height={40} width={40} alt={"Pause icon"} />
                    </button> }
                </div>
                <div id={styles.times}>
                    <div className={styles.mainTime}>
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
