import Link from "next/link";
import styles from "./navLink.module.css";

interface NavLinkProps {
    page: string,
    selected?: boolean
}

export default function NavLink({ page, selected = false }: NavLinkProps) {
    return (
        <Link href={`/${page}`} className={ styles.navLink + " " + ((selected)? styles.selectedLink : "")}>
            <p>{page}</p>
        </Link>
    );
}