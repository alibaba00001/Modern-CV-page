"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Overlay = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Section 1: "Omar Ali"
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const scale1 = useTransform(scrollYProgress, [0, 0.2], [1, 1.2]);
    const filter1 = useTransform(scrollYProgress, [0.1, 0.2], ["blur(0px)", "blur(10px)"]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

    // Section 2: "I improve systems and processes..."
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
    const scale2 = useTransform(scrollYProgress, [0.2, 0.3], [0.8, 1]);
    const x2 = useTransform(scrollYProgress, [0.2, 0.5], [-100, 50]);
    // Combine blur in and out into a single transform
    const filter2 = useTransform(
        scrollYProgress,
        [0.2, 0.3, 0.4, 0.5],
        ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]
    );

    // Section 3: "Experience from factory floors..."
    const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
    const scale3 = useTransform(scrollYProgress, [0.5, 0.6], [0.8, 1]);
    const x3 = useTransform(scrollYProgress, [0.5, 0.8], [100, -50]);
    // Combine blur in and out into a single transform
    const filter3 = useTransform(
        scrollYProgress,
        [0.5, 0.6, 0.7, 0.8],
        ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]
    );

    return (
        <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">

            {/* Container that sticks to the viewport */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

                {/* Section 1 */}
                <motion.div
                    style={{ opacity: opacity1, y: y1, scale: scale1, filter: filter1 }}
                    className="absolute text-center max-w-4xl px-6"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white drop-shadow-2xl">
                        Omar Ali
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl font-light tracking-tighter text-white drop-shadow-2xl">
                        Engineering & Operations
                    </p>
                </motion.div>

                {/* Section 2 */}
                <motion.div
                    style={{
                        opacity: opacity2,
                        x: x2,
                        scale: scale2,
                        filter: filter2
                    }}
                    className="absolute left-10 md:left-24 max-w-2xl px-6 text-left"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg leading-tight">
                        I improve systems <br /> and <span className="text-accent-blue">processes</span>.
                    </h2>
                    <p className="mt-6 text-2xl font-light text-white/80">
                        Through engineering, data, and execution.
                    </p>
                </motion.div>

                {/* Section 3 */}
                <motion.div
                    style={{
                        opacity: opacity3,
                        x: x3,
                        scale: scale3,
                        filter: filter3
                    }}
                    className="absolute right-10 md:right-24 max-w-2xl px-6 text-right"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg leading-tight">
                        Experience from <br />
                        <span className="text-accent-orange">field operations</span>
                    </h2>
                    <p className="mt-6 text-2xl font-light text-white/80">
                        to international collaboration.
                    </p>
                </motion.div>

            </div>
        </div>
    );
};

export default Overlay;
