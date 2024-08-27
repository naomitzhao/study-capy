import NavLink from "../navLink/navLink";
import styles from "./sidebar.module.css";


interface SidebarProps {
    selected: string
}

export default function Sidebar({ selected }: SidebarProps) {
    return (
        <div id={styles.sidebar}>
            <h1>study capy</h1>
            <nav>
                <ul id={styles.navLinks}>
                    <li>
                        <NavLink page="study" selected={selected == "study"}></NavLink>
                    </li>
                    <li>
                        <NavLink page="groups" selected={selected=="groups"}></NavLink>
                    </li>
                    <li>
                        <NavLink page="leaderboard" selected={selected=="leaderboard"}></NavLink>
                    </li>
                    <li>
                        <NavLink page="friends" selected={selected=="friends"}></NavLink>
                    </li>
                    <li>
                        <NavLink page="profile" selected={selected=="profile"}></NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}