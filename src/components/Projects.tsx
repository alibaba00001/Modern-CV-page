"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart, Settings, Activity } from "lucide-react";
import SectionBanner from "./SectionBanner";


const projects = [
    {
        title: "",
        problem: "",
        approach: "",
        impact: "",
        icon: <BarChart className="w-6 h-6 text-accent-blue" />
    },
    {
        title: "",
        problem: "",
        approach: "",
        impact: "",
        icon: <Settings className="w-6 h-6 text-accent-orange" />
    },
    {
        title: "",
        problem: "",
        approach: "",
        impact: "",
        icon: <Activity className="w-6 h-6 text-accent-blue" />
    }
];

const Projects = () => {
    return (
        <section className="relative w-full bg-background pb-32">
            <SectionBanner title="Selected Projects" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-24">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-16">
                        Selected <span className="text-white/50">Projects</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                            className="group relative flex flex-col justify-between p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors duration-500"
                        >
                            <div>
                                <div className="mb-6 p-4 inline-block rounded-xl bg-white/[0.03]">
                                    {project.icon}
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-6">
                                    {project.title}
                                </h3>

                                <div className="space-y-4 mb-8">
                                    <div>
                                        <h4 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-2">Problem Context</h4>
                                        <p className="text-white/70 font-light leading-relaxed">{project.problem}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-2">Approach & Tools</h4>
                                        <p className="text-white/70 font-light leading-relaxed">{project.approach}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-2">Impact</h4>
                                        <p className="text-white/90 font-medium leading-relaxed">{project.impact}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex items-center text-sm font-medium text-white/40 group-hover:text-white transition-colors duration-300 cursor-pointer">
                                <span>View Details</span>
                                <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
