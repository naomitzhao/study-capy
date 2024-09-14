import TimeText from "../timeText/timeText";
import styles from "./studyCategory.module.css";
import Image from "next/image";

interface CategoryProps {
    name: string,
    milliseconds: number,
    selected?: boolean,
    toggleStudyFunction: Function,
}

export default function StudyCategory({ name, milliseconds, selected, toggleStudyFunction }: CategoryProps) {
    return (
        <div className={ styles.studyCategory }>
            <button className={styles.studyButton } onClick={() => toggleStudyFunction(name)}>
                <Image src={selected ? "/icons/pause.svg" : "/icons/play.svg"} height={30} width={30} alt={selected ? "Pause icon" : "Play icon"} />
            </button>
            <div className={ styles.categoryText }>
                <p>{ name }</p>
                <TimeText milliseconds={ milliseconds } />
            </div>
        </div>
    );
}