"use client";

import styles from "./style.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function Preloader() {
    const preloaderRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(preloaderRef.current, {
            yPercent: -100,
            ease: "expo.inOut",
            duration: 1.2,
            delay: 1.5,
            onComplete: () => {
                if (preloaderRef.current) {
                    preloaderRef.current.style.display = "none";
                }
            }
        });
    });

    return (
        <div className={styles.preloader} ref={preloaderRef} />
    );
}