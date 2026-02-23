"use client";

import { motion } from "framer-motion";
import { Award, Heart } from "lucide-react";
import Image from "next/image";
import SectionBanner from "./SectionBanner";

const achievements = [
    {
        title: "Tecnológico de Monterrey — International Science Contest",
        sub: "Chemistry, Math & Physics",
        year: "2022",
        emoji: "🔬",
    },
    {
        title: "State Physics Olympiad",
        sub: "Participation Medal",
        year: "2021",
        emoji: "⚡",
    },
    {
        title: "Sofia's Math National Contest",
        sub: "Participation Medal — Reached 3rd Phase",
        year: "2021",
        emoji: "📐",
    },
    {
        title: "State Chemistry Olympiad",
        sub: "Bronze Medal",
        year: "2020",
        emoji: "🥉",
    },
];

const socialImpact = [
    {
        title: "Inclusion Forum",
        tag: "Community Leadership",
        description: "Organized a week-long national forum bringing together speakers from across the country to promote inclusion, diversity, and social awareness.",
        image: "/inclusion forum.jpg",
    },
    {
        title: "Parque Clouthier Garden",
        tag: "Environmental Action",
        description: "Part of a team that volunteered 3 times a week to water and cultivate plants as part of an urban sustainability initiative at Parque Clouthier.",
        image: "/parque clouthier.jpeg",
    },
    {
        title: "Home Build — Techo × MrBeast",
        tag: "Habitat & Resilience",
        description: "Built a complete home for a family in a single weekend alongside a team of 5, collaborating with Techo and MrBeast. The family later survived a flood thanks to having a solid house.",
        image: "/techo x mrbeast.jpeg",
    },
];

const AchievementsGrid = () => {
    return (
        <section className="relative w-full pb-24" style={{ background: "#050a14" }}>
            <SectionBanner title="Impact & Recognition" />

            <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 pt-24 space-y-24">

                {/* Academic Achievements */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <Award className="w-6 h-6" style={{ color: "#3b82f6" }} />
                        <h2 className="text-3xl font-bold tracking-tight text-white">Academic Achievements</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {achievements.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-start gap-4 p-5 rounded-xl border transition-colors duration-300"
                                style={{
                                    background: "rgba(255,255,255,0.02)",
                                    borderColor: "rgba(59,130,246,0.08)",
                                }}
                            >
                                <span className="text-2xl mt-0.5 select-none">{item.emoji}</span>
                                <div>
                                    <p className="text-white font-semibold text-sm leading-snug">{item.title}</p>
                                    <p className="text-white/40 text-xs mt-1">{item.sub}</p>
                                    <p className="text-xs font-bold mt-1.5" style={{ color: "#3b82f6" }}>{item.year}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Social Impact */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <Heart className="w-6 h-6" style={{ color: "#f97316" }} />
                        <h2 className="text-3xl font-bold tracking-tight text-white">Social Impact</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {socialImpact.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="group relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-500"
                                style={{
                                    background: "rgba(255,255,255,0.02)",
                                    borderColor: "rgba(249,115,22,0.1)",
                                }}
                            >
                                {/* Image with hover reveal */}
                                <div className="relative h-44 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-[#050a14]/60 to-transparent" />
                                    {/* Tag on image */}
                                    <div className="absolute top-3 left-3">
                                        <span
                                            className="px-3 py-1 rounded-full text-xs font-bold tracking-wider"
                                            style={{ background: "rgba(249,115,22,0.15)", color: "#f97316" }}
                                        >
                                            {item.tag}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-5 flex flex-col flex-1">
                                    <h3 className="text-base font-bold text-white mb-2 leading-snug">{item.title}</h3>
                                    <p className="text-white/55 font-light leading-relaxed text-sm">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AchievementsGrid;
