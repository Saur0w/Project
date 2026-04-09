"use client";

import styles from "./style.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";
import Link from "next/link";

gsap.registerPlugin(SplitText, useGSAP);

export default function Landing() {
    const landingRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    return (
        <section className={styles.landing} ref={landingRef}>
            <p ref={textRef}>
                Hi, I’m Astha Sati — currently pursuing my MBA.<br />
                I’m passionate about business, problem-solving, <br />
                and building ideas that create real-world impact. <br />
                I’m always curious to learn, adapt, and grow through<br />
                new experiences.
            </p>
            <p>→<Link href="/">Let&#39;s Connect</Link></p>

            <footer className={styles.scroll}>Scroll</footer>

        </section>
    )
}