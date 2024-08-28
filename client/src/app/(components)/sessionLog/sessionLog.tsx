import SessionCard from "../sessionCard/sessionCard";
import styles from "./sessionLog.module.css";

interface SessionLogProps {
    extraStyle?: Object
}

export default function SessionLog({ extraStyle }: SessionLogProps) {
    const defaultSessions = [
        {
            category: "other",
            start: new Date(2024, 7, 27, 15, 24, 1),
            end: new Date(2024, 7, 27, 15, 29, 39),
            id: 0,
        }, 
        {
            category: "other",
            start: new Date(2024, 7, 27, 15, 14, 45),
            end: new Date(2024, 7, 27, 15, 15, 34),
            id: 1,
        }, 
        {
            category: "school",
            start: new Date(2024, 7, 27, 19, 54, 7),
            end: new Date(2024, 7, 27, 20, 14, 2),
            id: 2,
        }, 
    ];

    return (
        <div className={styles.sessionLog + " " + extraStyle}>
            <h2>today&apos;s sessions</h2>
            <div id={styles.sessionList}>
                { defaultSessions.map((session) => {
                    return <SessionCard key={`session-${session.id}`} category={session.category} startTime={session.start} endTime={session.end} />
                }) }
            </div>
        </div>
    );
}