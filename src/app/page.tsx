"use client";

import styles from "./page.module.css";
import Preloader from "@/components/Preloader";
import Landing from "@/components/Landing";
import Footer from "@/components/Footer";
import Lenis from "lenis";
import { useEffect, useRef } from "react";

export default function Home() {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        lenisRef.current = new Lenis({
            duration: 1.2,
            easing: (t) => 1 - Math.pow(1 - t, 3),
            smoothWheel: true,
            touchMultiplier: 1.2,
        });

        let rafId: number;

        const animate = (time: number) => {
            lenisRef.current?.raf(time);
            rafId = requestAnimationFrame(animate);
        };

        rafId = requestAnimationFrame(animate);

        return () => {
            lenisRef.current?.destroy();
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div className={styles.page}>
            <Preloader />
            <Landing />
            <Footer />
        </div>
    );
}