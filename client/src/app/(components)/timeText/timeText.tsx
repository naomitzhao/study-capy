import styles from "./timeText.module.css";

interface TimeTextProps {
    milliseconds: number
}

export default function TimeText(props: TimeTextProps) {
    const milliseconds = props.milliseconds;

    function formatHours(milliseconds: number) {
        return Math.floor(milliseconds / 3600000) % 60;
        // return ("0" + hours).slice(-2);
    }

    function formatMinutes(milliseconds: number) {
        return Math.floor(milliseconds / 60000) % 60;
        // return ("0" + minutes).slice(-2);
    }

    function formatSeconds(milliseconds: number) {
        return Math.floor(milliseconds / 1000) % 60;
        // return ("0" + seconds).slice(-2);
    }

    return (
        <div className={styles.timeText}>
            <div className={styles.numberContainer}>
                <p>{ Math.floor(formatHours(milliseconds) / 10) }</p>
                <p>{formatHours(milliseconds) % 10}</p>
            </div>
            <p>:</p>
            <div className={styles.numberContainer}>
                <p>{ Math.floor(formatMinutes(milliseconds) / 10) }</p>
                <p>{ formatMinutes(milliseconds) % 10 }</p>
            </div>
            <p>:</p>
            <div className={styles.numberContainer}>
                <p>{ Math.floor(formatSeconds(milliseconds) / 10) }</p>
                <p>{ formatSeconds(milliseconds) % 10 }</p>
            </div>
        </div>
    );
}