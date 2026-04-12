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
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const split = new SplitText(textRef.current, {
            type: "lines",
            linesClass: "splitLine",
            mask: "lines"
        });

        gsap.from(split.lines, {
            yPercent: 110,
            stagger: 0.08,
            duration: 1,
            delay: 2,
            ease: "power4.out",
        });

        return () => split.revert();
    }, {
        scope: landingRef
    })
    return (
        <section className={styles.landing} ref={landingRef}>
            <div className={styles.para} ref={textRef}>
                <p>
                    Hi, I’m Astha Sati — currently pursuing my MBA.<br />
                    I’m passionate about business, problem-solving, <br />
                    and building ideas that create real-world impact. <br />
                    I’m always curious to learn, adapt, and grow through<br />
                    new experiences.
                </p>
            </div>
            <div className={styles.link}>
                <p>→<Link href="/">Let&#39;s Connect</Link></p>
            </div>

            <footer className={styles.scroll}>Scroll</footer>

        </section>
    )
}