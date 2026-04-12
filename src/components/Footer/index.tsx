"use client";

import styles from "./style.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Footer() {
    const containerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLDivElement>(null)
    return (
        <section className={styles.footer} ref={containerRef}>
            <div className={styles.heading} ref={headingRef}>
                <h1>Get in Touch</h1>
            </div>
        </section>
    );
}