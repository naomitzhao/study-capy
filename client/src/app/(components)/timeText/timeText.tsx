import styles from "./timeText.module.css";

interface TimeTextProps {
    milliseconds: number,
    extraStyle?: Object;
}

export default function TimeText({ milliseconds, extraStyle}: TimeTextProps) {
    /**
     * From a number of milliseconds, calculate how many hours to display for that time
     * @param milliseconds A number; the number of milliseconds to convert
     * @returns Number: The number of hours to display
     */
    function formatHours(milliseconds: number) {
        return Math.floor(milliseconds / 3600000) % 60;
    }

    /**
     * From a number of milliseconds, calculate how many minutes to display for that time
     * @param milliseconds A number; the number of milliseconds to convert
     * @returns Number: The number of minutes to display
     */
    function formatMinutes(milliseconds: number) {
        return Math.floor(milliseconds / 60000) % 60;
    }

    /**
     * From a number of milliseconds, calculate how many seconds to display for that time
     * @param milliseconds A number; the number of milliseconds to convert
     * @returns Number: The number of seconds to display
     */
    function formatSeconds(milliseconds: number) {
        return Math.floor(milliseconds / 1000) % 60;
    }

    return (
        <div className={styles.timeText + ' ' + extraStyle}>
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