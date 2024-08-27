import Sidebar from "../../(components)/sidebar/sidebar";
import styles from "./page.module.css"

export default function Page() {
    return (
        <div id={styles.body}>
            <Sidebar selected="profile" />
        </div>
    );
}