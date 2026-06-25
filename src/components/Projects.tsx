"use client";

import { motion } from "framer-motion";
import { Wrench, Wind, Truck } from "lucide-react";
import SectionBanner from "./SectionBanner";
import Image from "next/image";
import React from "react";

// Custom CNC Lathe / Machine Tool SVG Icon matching Lucide style
const LatheIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        {/* Lathe Bed / Base */}
        <path d="M2 19h20" />
        <path d="M5 19v2" />
        <path d="M19 19v2" />
        {/* Headstock */}
        <rect x="3" y="8" width="5" height="11" rx="1" />
        {/* Chuck */}
        <path d="M8 11h2v4H8" />
        {/* Workpiece (cylindrical stock being turned) */}
        <rect x="10" y="12" width="7" height="2" rx="0.5" />
        {/* Tailstock */}
        <path d="M17 19v-6h2v6" />
        <path d="M17 15h-2" />
        {/* Tool slide and cutting tool */}
        <path d="M11 19v-3h2v3" />
        <path d="M12 16l-1-2" />
    </svg>
);

const projects = [
    {
        title: "In-House CNC Lathe Design and Build",
        organization: "ADS",
        year: "2026",
        category: "Mechanical Design / CNC Manufacturing",
        summary: "Led electrical and motion-control integration for a 14-person team that designed and built an in-house CNC lathe for ball joint production.",
        bullets: [
            "Configured Mach3, spindle transmission, stepper motors, drives, safety controls, and grounding.",
            "Supported delivery of a low-vibration lathe capable of machining 0.75-inch stock in approximately 3 minutes.",
            "Achieved approximately 0.1–0.5 mm tolerances.",
            "Supported a MXN $35K build compared with a comparable new machine costing more than MXN $1M."
        ],
        tags: ["Mach3", "Motion Control", "CNC", "Mechanical Design"],
        icon: <LatheIcon className="w-5 h-5 text-accent-blue" />,
        images: ["/ADS Image 1.jpg", "/ADS Image 2.png", "/ADS Image 3.jpg"],
        accent: "var(--accent-blue)"
    },
    {
        title: "Heat Exchanger Airflow Optimization",
        organization: "Daikin",
        year: "2025",
        category: "CFD Simulation / Thermal-Fluid Engineering",
        summary: "Modeled and simulated six tube-angle configurations in ANSYS Fluent to evaluate airflow performance in a heat exchanger system.",
        bullets: [
            "Used SST k-omega turbulence modeling, mesh generation, boundary-condition setup, and streamline analysis.",
            "Identified the strongest configuration based on airflow penetration, distribution, and reduced recirculation.",
            "Presented engineering recommendations to Daikin engineers."
        ],
        tags: ["ANSYS Fluent", "CFD", "Thermodynamics", "Meshing"],
        icon: <Wind className="w-5 h-5 text-accent-orange" />,
        images: ["/Daikin Image 1.png", "/Daikin Image 2.png"],
        accent: "var(--accent-orange)"
    },
    {
        title: "Paint Booth Gate Structural Redesign",
        organization: "Daimler Truck",
        year: "2024",
        category: "Structural Design / SolidWorks Simulation",
        summary: "Contributed to four design iterations of an A36 steel immersion-gate redesign for a paint booth.",
        bullets: [
            "Used SolidWorks Simulation and hand calculations.",
            "Evaluated loads, Von Mises stress, deflection, welds, fasteners, and stress concentrations.",
            "Reached a factor of safety of 3 while improving load distribution and manufacturability."
        ],
        tags: ["SolidWorks", "FEA", "Structural Design", "Material Science"],
        icon: <Truck className="w-5 h-5 text-accent-blue" />,
        images: ["/Daimler Image 1.png"],
        accent: "var(--accent-blue)"
    }
];

const Projects = () => {
    return (
        <section className="relative w-full pb-20">
            <SectionBanner title="Selected Projects" />

            <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-10 md:mb-16">
                        Selected <span className="text-white/50">Projects</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col gap-12 md:gap-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="group flex flex-col lg:flex-row gap-6 lg:gap-10 p-6 md:p-8 rounded-xl bg-white/[0.01] border border-white/[0.04] hover:border-white/10 transition-colors relative overflow-hidden"
                        >
                            {/* Technical edge styling */}
                            <div className="absolute top-0 left-0 w-1 h-full opacity-50 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: project.accent }} />

                            {/* Content */}
                            <div className="flex-1 flex flex-col">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                                        {project.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-xs font-bold tracking-wider mt-1 uppercase" style={{ color: project.accent }}>
                                            <span>{project.organization}</span>
                                            <span className="text-white/30">•</span>
                                            <span>{project.year}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-widest mb-3">
                                    {project.category}
                                </p>

                                <p className="text-white/80 font-light text-sm md:text-base leading-relaxed mb-4">
                                    {project.summary}
                                </p>

                                <ul className="space-y-2 mb-6">
                                    {project.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start text-white/60 font-light text-sm">
                                            <span className="mr-2.5 mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: project.accent }} />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-2.5 py-1 rounded-md text-[10px] md:text-xs font-medium bg-white/[0.03] text-white/60 border border-white/5 whitespace-nowrap">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Images Grid */}
                            <div className="w-full lg:w-5/12 flex-shrink-0 flex flex-col justify-center">
                                {project.images.length === 3 && (
                                    <div className="flex flex-col gap-2">
                                        <div className="rounded-lg overflow-hidden border border-white/5 bg-white/[0.01] flex items-center justify-center">
                                            <Image
                                                src={project.images[0]}
                                                alt={`${project.title} – image 1`}
                                                width={0}
                                                height={0}
                                                sizes="(max-width:768px) 100vw, 40vw"
                                                className="w-full h-auto object-contain"
                                            />
                                        </div>
                                        <div className="grid grid-cols-5 gap-2">
                                            <div className="col-span-2 rounded-lg overflow-hidden border border-white/5 bg-white/[0.01] flex items-center justify-center">
                                                <Image
                                                    src={project.images[1]}
                                                    alt={`${project.title} – image 2`}
                                                    width={0}
                                                    height={0}
                                                    sizes="(max-width:768px) 50vw, 20vw"
                                                    className="w-full h-auto object-contain"
                                                />
                                            </div>
                                            <div className="col-span-3 flex items-center justify-center">
                                                <Image
                                                    src={project.images[2]}
                                                    alt={`${project.title} – image 3`}
                                                    width={0}
                                                    height={0}
                                                    sizes="(max-width:768px) 50vw, 30vw"
                                                    className="w-auto h-auto max-w-full rounded-lg border border-white/5 bg-white/[0.01]"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {project.images.length === 2 && (
                                    <div className="flex flex-col gap-2">
                                        <div className="rounded-lg overflow-hidden border border-white/5 bg-white/[0.01] flex items-center justify-center">
                                            <Image
                                                src={project.images[0]}
                                                alt={`${project.title} – image 1`}
                                                width={0}
                                                height={0}
                                                sizes="(max-width:768px) 100vw, 40vw"
                                                className="w-full h-auto object-contain"
                                            />
                                        </div>
                                        <div className="rounded-lg overflow-hidden border border-white/5 bg-white/[0.01] flex items-center justify-center">
                                            <Image
                                                src={project.images[1]}
                                                alt={`${project.title} – image 2`}
                                                width={0}
                                                height={0}
                                                sizes="(max-width:768px) 100vw, 40vw"
                                                className="w-full h-auto object-contain"
                                            />
                                        </div>
                                    </div>
                                )}
                                {project.images.length === 1 && (
                                    <div className="rounded-lg overflow-hidden border border-white/5 bg-white/[0.01] flex items-center justify-center">
                                        <Image
                                            src={project.images[0]}
                                            alt={`${project.title} – image 1`}
                                            width={0}
                                            height={0}
                                            sizes="(max-width:768px) 100vw, 40vw"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
