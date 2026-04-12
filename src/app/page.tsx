"use client";

import styles from "./page.module.css";
import Preloader from "@/components/Preloader";
import Landing from "@/components/Landing";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className={styles.page}>
            <Preloader />
            <Landing />
            <Footer />
        </div>
    );
}