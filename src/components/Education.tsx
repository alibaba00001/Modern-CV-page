"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionBanner from "./SectionBanner";

const schools = [
    {
        name: "Tecnológico de Monterrey",
        degree: "B.S. Mechanical Engineering",
        period: "2022 – 2026",
        location: "Monterrey, NL, Mexico",
        gpa: "GPA: 93 / 100",
        description: "",
        logo: "/tec-de-monterrey-seeklogo.png",
        accent: "accent-blue",
    },
    {
        name: "Sungkyunkwan University (SKKU)",
        degree: "Academic Exchange Program",
        period: "2025",
        location: "Seoul, South Korea",
        gpa: "GPA: 96 / 100",
        description: "Focus: Data Analysis, International Trade, Applied Engineering Materials.",
        logo: "/skku-sungkyunkwan-university-seeklogo.png",
        accent: "accent-orange",
    },
];

const Education = () => {
    return (
        <section className="relative w-full bg-background pb-24">
            <SectionBanner title="Education" />

            <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 pt-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                        Education
                    </h2>
                    <p className="text-white/50 font-light text-lg">Academic foundation with an international perspective.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {schools.map((school, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                            className={`group relative p-6 md:p-8 rounded-2xl bg-white/[0.02] border ${school.accent === "accent-blue" ? "border-accent-blue/10 hover:border-accent-blue/30" : "border-accent-orange/10 hover:border-accent-orange/30"} transition-colors duration-500`}
                        >
                            {/* Logo */}
                            <div className="w-16 h-16 relative mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                                <Image
                                    src={school.logo}
                                    alt={school.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <h3 className={`text-xl font-bold text-white mb-1 group-hover:text-${school.accent} transition-colors`}>
                                {school.name}
                            </h3>
                            <p className={`text-${school.accent} font-semibold text-sm mb-1`}>
                                {school.degree}
                            </p>
                            <div className="flex items-center gap-3 text-white/40 text-sm mb-4">
                                <span>{school.period}</span>
                                <span>·</span>
                                <span>{school.location}</span>
                            </div>
                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-4 ${school.accent === "accent-blue" ? "bg-accent-blue/10 text-accent-blue" : "bg-accent-orange/10 text-accent-orange"}`}>
                                {school.gpa}
                            </div>
                            <p className="text-white/60 font-light leading-relaxed text-sm">
                                {school.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
