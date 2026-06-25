"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Overlay = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Section 1: Name and Title  (scroll 0% → 33%)
    const opacity1 = useTransform(scrollYProgress, [0, 0.22, 0.28, 0.33], [1, 1, 0.5, 0]);
    const scale1 = useTransform(scrollYProgress, [0, 0.33], [1, 1.05]);
    const filter1 = useTransform(scrollYProgress, [0.22, 0.33], ["blur(0px)", "blur(8px)"]);
    const y1 = useTransform(scrollYProgress, [0, 0.33], [0, -60]);

    // Section 2: Supply Chain  (scroll 33% → 66%)
    const opacity2 = useTransform(scrollYProgress, [0.28, 0.38, 0.56, 0.64], [0, 1, 1, 0]);
    const scale2 = useTransform(scrollYProgress, [0.28, 0.38], [0.92, 1]);
    const x2 = useTransform(scrollYProgress, [0.28, 0.64], [-60, 60]);
    const filter2 = useTransform(
        scrollYProgress,
        [0.28, 0.38, 0.56, 0.64],
        ["blur(8px)", "blur(0px)", "blur(0px)", "blur(8px)"]
    );

    // Section 3: Manufacturing  (scroll 66% → 100%)
    const opacity3 = useTransform(scrollYProgress, [0.60, 0.70, 0.92, 1.0], [0, 1, 1, 0]);
    const scale3 = useTransform(scrollYProgress, [0.60, 0.70], [0.92, 1]);
    const x3 = useTransform(scrollYProgress, [0.60, 1.0], [60, -60]);
    const filter3 = useTransform(
        scrollYProgress,
        [0.60, 0.70, 0.92, 1.0],
        ["blur(8px)", "blur(0px)", "blur(0px)", "blur(8px)"]
    );

    return (
        <div ref={containerRef} className="relative w-full h-[300vh] bg-blueprint">

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
                    <p className="mt-6 text-xl md:text-3xl font-light tracking-tight text-white drop-shadow-2xl">
                        Mechanical Engineer
                    </p>
                    <p className="mt-2 text-base md:text-lg font-medium tracking-widest text-accent-blue uppercase drop-shadow-2xl">
                        Manufacturing, Sourcing & Automation
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
                    className="absolute inset-x-0 mx-auto md:mx-0 md:left-24 w-[90%] md:max-w-2xl px-6 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white drop-shadow-lg leading-tight">
                        Optimizing <br className="hidden md:block" /> the <span className="text-accent-blue">Supply Chain</span>.
                    </h2>
                    <p className="mt-4 md:mt-6 text-base md:text-xl font-light text-white/80 leading-relaxed">
                        Mechanical Engineering graduate from Tecnológico de Monterrey with experience in sourcing, supplier qualification, SAP demand analysis, and cost-reduction.
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
                    className="absolute inset-x-0 mx-auto md:mx-0 md:left-auto md:right-24 w-[90%] md:max-w-2xl px-6 text-center md:text-right"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white drop-shadow-lg leading-tight">
                        Precision in <br className="hidden md:block" />
                        <span className="text-accent-orange">Manufacturing</span>
                    </h2>
                    <p className="mt-4 md:mt-6 text-base md:text-xl font-light text-white/80 leading-relaxed">
                        Extensive hands-on experience in CNC manufacturing, CFD simulation, structural design, and process automation with VBA and Python.
                    </p>
                </motion.div>

            </div>
        </div>
    );
};

export default Overlay;
