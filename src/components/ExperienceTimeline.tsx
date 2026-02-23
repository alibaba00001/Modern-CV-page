"use client";

import { motion } from "framer-motion";
import {
    TruckIcon,        // Baker Hughes – supply chain / logistics
    CalculatorIcon,   // Contaré – accounting / fiscal
    LightbulbIcon,    // Chambee – startup / innovation
    HardHatIcon,      // Layne de México – mining / industrial
    BookOpenIcon,     // Teaching & Mentorship
} from "lucide-react";
import SectionBanner from "./SectionBanner";

// Custom Pickaxe SVG — Lucide doesn't include one
const Pickaxe = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912" />
        <path d="M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22.5 22.5 0 0 1 6.318 3.393" />
        <path d="M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z" />
        <path d="m19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22.5 22.5 0 0 0-3.393-6.319" />
    </svg>
);

const experiences = [
    {
        company: "Baker Hughes",
        role: "Mexico Sourcing Specialist Intern",
        period: "Aug. 2024 – Sep. 2025",
        description: "Analyzed SAP demand data to identify high-risk parts, single-source suppliers, and high-volume components across multiple manufacturing categories, supporting sourcing prioritization and continuity decisions. Managed RFQs and supplier evaluations across multiple categories, reviewing technical drawings and manufacturing capabilities to qualify vendors based on specifications, coatings, tolerances, and production limits. Led weekly supplier follow-ups and KPI tracking, contributing to the resolution of long-standing payment backlogs and improving supplier engagement for critical components.",
        icon: <TruckIcon className="w-5 h-5" style={{ color: "#3b82f6" }} />,
        highlight: "Sourcing & Supplier Management",
        color: "#3b82f6",
    },
    {
        company: "Contaré",
        role: "Business Operations Intern",
        period: "Jan. 2026 – Present",
        description: "Developed a custom Excel VBA payroll automation for a bi-monthly payroll of 500+ employees, reducing processing time from ~15 hours to ~2 hours per cycle and significantly lowering manual errors. Managed daily business and fiscal operations for freelancers and corporate clients, ensuring accurate invoice validation, compliance with SAT requirements, and organized financial documentation.",
        icon: <CalculatorIcon className="w-5 h-5" style={{ color: "#f97316" }} />,
        highlight: "Automation & Accuracy",
        color: "#f97316",
    },
    {
        company: "Chambee",
        role: "Co-Founder",
        period: "2024 – Present",
        description: "Defined the business model, including client fees, worker charges, and payment processing flows using Stripe for payments and worker verification. Led early go to market planning, focusing on organic acquisition strategies and phased social media campaigns ahead of product launch. Built KPI dashboards to track job activity, geographic coverage, and operational performance, supporting strategic expansion planning.",
        icon: <LightbulbIcon className="w-5 h-5" style={{ color: "#3b82f6" }} />,
        highlight: "Strategic Planning & Execution",
        color: "#3b82f6",
    },
    {
        company: "Layne de México",
        role: "Welder and Diesel Mechanic",
        period: "Formative",
        description: "Worked with heavy machinery to fabricate parts and perform equipment installations for drilling operations. Acquired welding skills and gained a foundational understanding of mechanical engineering principles through hands-on industrial execution.",
        icon: <Pickaxe className="w-5 h-5" style={{ color: "#f97316" }} />,
        highlight: "Field Execution & Practical Engineering",
        color: "#f97316",
    },
    {
        company: "Academic Tutor",
        role: "Freelance Technical Communicator",
        period: "Formative",
        description: "Conducted rigorous physics, chemistry, and math tutoring for over 18 hours per week. Notably improved a student with disabilities grades from 40% to 85% over 20+ sessions and developed deep leadership and technical clarity through peer instruction.",
        icon: <BookOpenIcon className="w-5 h-5" style={{ color: "#3b82f6" }} />,
        highlight: "Leadership & Technical Clarity",
        color: "#3b82f6",
    },
];

const ExperienceTimeline = () => {
    return (
        <section className="relative w-full pb-32" style={{ background: "#050a14" }}>
            <SectionBanner title="Professional Experience" />

            <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 pt-24">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Professional <span className="text-white/50">Experience</span>
                    </h2>
                    <p className="text-xl font-light text-white/50 max-w-2xl">
                        A trajectory of improvement, field execution, and technical leadership.
                    </p>
                </motion.div>

                <div className="relative border-l-2 border-white/[0.05] ml-4 md:ml-8 gap-10 md:gap-12 flex flex-col">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                            className="relative pl-12 md:pl-16 group"
                        >
                            {/* Timeline node */}
                            <div
                                className="absolute left-[-23px] top-1 p-2 rounded-full border border-white/10 transition-all duration-300 z-10 group-hover:scale-110"
                                style={{ background: "#050a14" }}
                            >
                                {exp.icon}
                            </div>

                            {/* Vertical glow on hover */}
                            <div
                                className="absolute left-[-1px] top-8 bottom-[-48px] w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: `linear-gradient(to bottom, ${exp.color}80, transparent)` }}
                            />

                            <div className="flex flex-col md:flex-row md:items-baseline mb-4">
                                <h3 className="text-2xl font-semibold text-white mr-4 transition-colors duration-300">
                                    {exp.company}
                                </h3>
                                <span className="text-sm font-medium tracking-wider mt-2 md:mt-0" style={{ color: exp.color }}>
                                    {exp.period}
                                </span>
                            </div>

                            <h4 className="text-lg font-medium text-white/70 mb-4">{exp.role}</h4>

                            <p className="text-white/60 font-light leading-relaxed mb-6 max-w-2xl">
                                {exp.description}
                            </p>

                            <div
                                className="inline-block px-4 py-2 rounded-lg border text-sm font-medium text-white/50 transition-colors duration-300"
                                style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.05)" }}
                            >
                                {exp.highlight}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceTimeline;
