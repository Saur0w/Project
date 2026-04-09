"use client";

import styles from "./style.module.scss";
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
            <ul>
                <Link href="/"><li>About</li></Link>
                <Link href="/"><li>Contact</li></Link>
            </ul>
        </header>
    );
}