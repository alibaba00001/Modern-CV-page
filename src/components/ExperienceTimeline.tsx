"use client";

import { motion } from "framer-motion";
import {
    TruckIcon,        // Baker Hughes – supply chain / logistics
    CalculatorIcon,   // Contaré – accounting / fiscal
    BookOpenIcon,     // Teaching & Mentorship
} from "lucide-react";
import SectionBanner from "./SectionBanner";
import React from "react";

// Custom Pickaxe SVG
const Pickaxe = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912" />
        <path d="M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22.5 22.5 0 0 1 6.318 3.393" />
        <path d="M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z" />
        <path d="m19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22.5 22.5 0 0 0-3.393-6.319" />
    </svg>
);

// Custom Bee SVG
const BeeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        {/* Antennae */}
        <path d="M10 5c-.5-1.5-1.5-2-2.5-1.5M14 5c.5-1.5 1.5-2 2.5-1.5" />
        
        {/* Body: Head, Thorax, Abdomen */}
        <circle cx="12" cy="6" r="1.5" />
        <rect x="9.5" y="8" width="5" height="5" rx="2.5" />
        <path d="M10 13c0 2.2 1 5 2 7 1-2 2-4.8 2-7H10z" />
        
        {/* Abdomen Stripes */}
        <path d="M10.5 15.5h3M11 17.5h2" />
        
        {/* Wings - Left */}
        <path d="M9.5 9C7 7 4.5 7 4 9.5c-.5 2.5 1.5 3.5 5.5 1.5" />
        <path d="M9.5 11c-2 1-3.5 2-3.5 3 0 1.5 1.5 1.5 3.5.5" />
        
        {/* Wings - Right */}
        <path d="M14.5 9c2.5-2 5-2 5.5.5.5 2.5-1.5 3.5-5.5 1.5" />
        <path d="M14.5 11c2 1 3.5 2 3.5 3 0 1.5-1.5 1.5-3.5.5" />
    </svg>
);

const experiences = [
    {
        company: "Baker Hughes",
        role: "Mexico Sourcing Specialist Intern",
        period: "Aug. 2024 – Sep. 2025",
        description: (
            <ul className="space-y-2 list-disc list-inside">
                <li>Produced 250+ SAP and Excel reports analyzing <strong>1,500+ parts</strong> across four sourcing areas supporting <strong>USD $14M+ monthly spend</strong>, surfacing demand, savings, and supply-risk priorities.</li>
                <li>Supported a <strong>USD $5M+ annual savings target</strong> by benchmarking supplier pricing against prior-year, regional/global, and in-house baselines.</li>
                <li>Cleared a <strong>USD $2M+ payment backlog</strong> for a critical single-source supplier, strengthening supply continuity and relations.</li>
            </ul>
        ),
        icon: <TruckIcon className="w-5 h-5 text-accent-blue" />,
        highlight: "Sourcing & Supplier Management",
        color: "var(--accent-blue)",
    },
    {
        company: "Contaré",
        role: "Business Operations & Automation Intern",
        period: "Jan. 2026 – Present",
        description: (
            <ul className="space-y-2 list-disc list-inside">
                <li>Reduced biweekly payroll processing for <strong>500+ employees</strong> from approximately <strong>15 hours to 2 hours</strong> by automating consolidation, calculations, validations, and reporting with Excel VBA and Power Query; reduced staffing needs from four people to one.</li>
                <li>Manage operational and fiscal workflows for four clients, building standardized automations across expense capture, purchases, invoice validation, and payroll controls.</li>
            </ul>
        ),
        icon: <CalculatorIcon className="w-5 h-5 text-accent-orange" />,
        highlight: "Automation & Operations",
        color: "var(--accent-orange)",
    },
    {
        company: "Chambee",
        role: "Co-Founder",
        period: "2024 – Present",
        description: (
            <ul className="space-y-2 list-disc list-inside">
                <li>Defined the business model, including client fees, worker charges, and payment processing flows using Stripe for payments and worker verification.</li>
                <li>Led early go to market planning, focusing on organic acquisition strategies and phased social media campaigns ahead of product launch.</li>
                <li>Built KPI dashboards to track job activity, geographic coverage, and operational performance.</li>
            </ul>
        ),
        icon: <BeeIcon className="w-5 h-5 text-accent-blue" />,
        highlight: "Strategic Planning & Execution",
        color: "var(--accent-blue)",
    },
    {
        company: "Layne de México",
        role: "Welder & Diesel Mechanic Intern",
        period: "May 2023 – Aug. 2023",
        description: (
            <ul className="space-y-2 list-disc list-inside">
                <li>Supported field maintenance and fabrication for trucks, diesel engines, heavy equipment, and drilling equipment through preventive maintenance, hydraulic and electrical support, SMAW/FCAW welding, plasma cutting, and oxy-fuel cutting.</li>
            </ul>
        ),
        icon: <Pickaxe className="w-5 h-5 text-accent-orange" />,
        highlight: "Field Execution & Practical Engineering",
        color: "var(--accent-orange)",
    },
    {
        company: "Academic Tutor",
        role: "Freelance Technical Communicator",
        period: "Formative",
        description: (
            <ul className="space-y-2 list-disc list-inside">
                <li>Conducted rigorous physics, chemistry, and math tutoring for over 18 hours per week.</li>
                <li>Notably improved a student with disabilities grades from 40% to 85% over 20+ sessions and developed deep leadership and technical clarity through peer instruction.</li>
            </ul>
        ),
        icon: <BookOpenIcon className="w-5 h-5 text-accent-blue" />,
        highlight: "Leadership & Technical Clarity",
        color: "var(--accent-blue)",
    },
];

const ExperienceTimeline = () => {
    return (
        <section className="relative w-full pb-32">
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

                <div className="relative border-l-2 border-white/[0.05] ml-4 md:ml-8 gap-12 flex flex-col">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                            className="relative pl-10 md:pl-16 group"
                        >
                            {/* Timeline node */}
                            <div
                                className="absolute left-[calc(-24px-1px)] top-1 p-2 rounded-full border border-white/10 transition-all duration-300 z-10 group-hover:scale-110 bg-background"
                            >
                                {exp.icon}
                            </div>

                            {/* Vertical glow on hover */}
                            <div
                                className="absolute left-[-1px] top-8 bottom-[-48px] w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: `linear-gradient(to bottom, ${exp.color}, transparent)` }}
                            />

                            <div className="flex flex-col md:flex-row md:items-baseline mb-3">
                                <h3 className="text-2xl font-semibold text-white mr-4 transition-colors duration-300">
                                    {exp.company}
                                </h3>
                                <span className="text-sm font-medium tracking-wider mt-2 md:mt-0" style={{ color: exp.color }}>
                                    {exp.period}
                                </span>
                            </div>

                            <h4 className="text-lg font-medium text-white/70 mb-4">{exp.role}</h4>

                            <div className="text-white/70 font-light leading-relaxed mb-6 max-w-2xl text-sm md:text-base">
                                {exp.description}
                            </div>

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
