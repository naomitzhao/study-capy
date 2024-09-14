import styles from "./sessionCard.module.css"

interface SessionCardProps {
    category: string,
    startTime: Date,
    endTime: Date
}

export default function SessionCard({ category, startTime, endTime }: SessionCardProps) {
    function formatDuration(date1: Date, date2: Date) {
        const milliseconds = date2.valueOf() - date1.valueOf();
        const hours = Math.floor(milliseconds / 3600000);
        const minutes = Math.floor((milliseconds % 3600000) / 60000);
        const seconds = Math.floor((milliseconds % 60000) / 1000);
        return `${(hours)? `${(hours > 9) ? Math.floor(hours / 10) : ""}${hours % 10}h` : ""}
                ${(minutes)? `${(hours || minutes > 9)? Math.floor(minutes / 10) : ""}${minutes % 10}m` : ""}
                ${(minutes || seconds > 9) ? Math.floor(seconds / 10) : ""}${seconds % 10}s`;
    }

    function formatTime(date: Date) {
        let hours = date.getHours();
        const minutes = date.getMinutes();
        let ampm = "am";
        if (hours >= 12) {
            ampm = "pm";
            hours -= 12;
        }
        return `${(hours > 9) ? Math.floor(hours / 10) : ""}${hours % 10}:${Math.floor(minutes / 10)}${minutes % 10} ${ampm}`;
    }

    return (
        <div className={styles.sessionCard}>
            <h4 className={styles.sessionCardHeading}>{category}</h4>
            <p>{formatDuration(startTime, endTime)}</p>
            <p className={styles.subtext}>{formatTime(startTime)} - {formatTime(endTime)}</p>
        </div>
    );
}