"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import SectionBanner from "./SectionBanner";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const VISITED_COUNTRIES = [
    "Canada", "United States of America", "Mexico", "Costa Rica", "Panama",
    "Argentina", "Brazil", "Chile", "Paraguay", "Uruguay", "Austria",
    "Belgium", "Czechia", "Denmark", "Estonia", "Finland", "France",
    "Germany", "Italy", "Netherlands", "Portugal", "Slovenia", "Spain",
    "Sweden", "United Kingdom", "Vatican", "South Korea", "Japan", "Russia"
];

const nameMap: Record<string, string> = {
    "United States": "United States of America",
    "Czech Republic": "Czechia",
    "Vatican City": "Vatican",
};

const InteractiveGlobe = () => {
    const globeRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [countries, setCountries] = useState<any>({ features: [] });
    const [hoverD, setHoverD] = useState<any>(null);
    const [dims, setDims] = useState({ w: 1200, h: 800 });

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson")
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    // Measure container so canvas fills exactly
    useEffect(() => {
        const measure = () => {
            if (containerRef.current) {
                setDims({
                    w: containerRef.current.offsetWidth,
                    h: containerRef.current.offsetHeight,
                });
            }
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    useEffect(() => {
        if (globeRef.current) {
            globeRef.current.controls().autoRotate = true;
            globeRef.current.controls().autoRotateSpeed = 0.4;
            // Start with zoom disabled — enabled only when mouse is over the sphere
            globeRef.current.controls().enableZoom = false;
            // Hard zoom limits so it never goes infinite
            globeRef.current.controls().minDistance = 150;
            globeRef.current.controls().maxDistance = 420;
        }
    }, [countries]);

    // Detect if mouse is over the actual globe sphere (center circle of the viewport)
    const setZoomFromMouse = useCallback((clientX: number, clientY: number) => {
        if (!containerRef.current || !globeRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = clientX - cx;
        const dy = clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        // Globe sphere occupies roughly 38% of the smaller viewport dimension
        const threshold = Math.min(rect.width, rect.height) * 0.38;
        globeRef.current.controls().enableZoom = dist < threshold;
    }, []);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        setZoomFromMouse(e.clientX, e.clientY);
    }, [setZoomFromMouse]);

    const handleMouseLeave = useCallback(() => {
        if (globeRef.current) {
            globeRef.current.controls().enableZoom = false;
        }
    }, []);

    const isVisited = (countryName: string) =>
        VISITED_COUNTRIES.includes(countryName) || VISITED_COUNTRIES.includes(nameMap[countryName]);

    return (
        <div className="relative w-full" style={{ background: "#050a14" }}>
            <SectionBanner title="Global Perspective" />

            <div
                ref={containerRef}
                className="relative w-full"
                style={{ height: "100vh" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {/* Title overlay */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-10 left-0 right-0 z-10 text-center pointer-events-none"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
                        Global <span style={{ color: "#3b82f6" }}>Perspective</span>
                    </h2>
                    <p className="text-white/40 text-sm uppercase tracking-widest">
                        29 countries · hover globe to zoom · drag to rotate
                    </p>
                </motion.div>

                {/* Globe — canvas fills entire container, no constraints */}
                <Globe
                    ref={globeRef}
                    width={dims.w}
                    height={dims.h}
                    backgroundColor="rgba(0,0,0,0)"
                    showGlobe={false}
                    showAtmosphere={true}
                    atmosphereColor="#3b82f6"
                    atmosphereAltitude={0.15}
                    polygonsData={countries.features}
                    polygonAltitude={(d: any) => d === hoverD ? 0.06 : 0.01}
                    polygonCapColor={(d: any) =>
                        d === hoverD
                            ? "#f97316"
                            : isVisited(d.properties.ADMIN)
                                ? "rgba(59, 130, 246, 0.45)"
                                : "rgba(20, 30, 50, 0.15)"
                    }
                    polygonSideColor={() => "rgba(0,0,0,0)"}
                    polygonStrokeColor={(d: any) =>
                        isVisited(d.properties.ADMIN)
                            ? "#3b82f6"
                            : "rgba(255,255,255,0.04)"
                    }
                    onPolygonHover={setHoverD}
                />

                {/* Hover card */}
                {hoverD && isVisited(hoverD.properties.ADMIN) && (
                    <div
                        className="absolute top-24 right-8 backdrop-blur-md border p-5 rounded-2xl pointer-events-none min-w-[180px] z-10"
                        style={{ background: "rgba(5,10,20,0.9)", borderColor: "rgba(59,130,246,0.3)" }}
                    >
                        <h4 className="text-lg font-bold text-white mb-1">{hoverD.properties.ADMIN}</h4>
                        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#3b82f6" }}>Visited</p>
                    </div>
                )}

                {/* Bottom blend into next section */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
                    style={{ background: "linear-gradient(to bottom, transparent, #050a14)" }}
                />
            </div>
        </div>
    );
};

export default InteractiveGlobe;
