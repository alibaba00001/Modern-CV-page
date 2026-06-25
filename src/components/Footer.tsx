"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, FileText, ArrowUpRight } from "lucide-react";
import SectionBanner from "./SectionBanner";

const Footer = () => {
    return (
        <footer className="relative w-full border-t" style={{ borderColor: "color-mix(in srgb, white 5%, transparent)" }}>
            <SectionBanner title="Contact" />
            <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 pt-24 pb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">

                {/* Identity */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-6"
                >
                    <div className="relative pl-6 border-l-2 border-accent-blue">
                        <h2 className="text-4xl font-bold tracking-tight text-white mb-2">
                            Omar Ali
                        </h2>
                        <p className="text-white/50 font-light text-lg">
                            Engineering & Operations
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 text-white/70 font-light mt-4">
                        <a
                            href="mailto:omarali03@outlook.com"
                            className="flex items-center gap-3 hover:text-accent-blue transition-colors w-fit group"
                        >
                            <Mail className="w-4 h-4 text-white/30 group-hover:text-accent-blue transition-colors" />
                            omarali03@outlook.com
                        </a>
                        <div className="flex items-center gap-3">
                            <MapPin className="w-4 h-4 text-white/30" />
                            Monterrey, Nuevo León, Mexico
                        </div>
                    </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex flex-row md:flex-col gap-4 w-full md:w-auto"
                >
                    <a
                        href="https://www.linkedin.com/in/omardavilai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 md:flex-none flex items-center justify-between gap-6 px-6 py-4 border text-white font-medium transition-all duration-300 group relative overflow-hidden"
                        style={{
                            background: "color-mix(in srgb, white 2%, transparent)",
                            borderColor: "color-mix(in srgb, white 8%, transparent)",
                        }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.background = "var(--accent-blue)";
                            (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-blue)";
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.background = "color-mix(in srgb, white 2%, transparent)";
                            (e.currentTarget as HTMLElement).style.borderColor = "color-mix(in srgb, white 8%, transparent)";
                        }}
                    >
                        <span className="flex items-center gap-3 z-10">
                            <Linkedin className="w-5 h-5" />
                            LinkedIn
                        </span>
                        <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform z-10" />
                    </a>

                    <a
                        href="/CV_Omar_Ali_Iqbal_Davila_2026.pdf"
                        download="CV_Omar_Ali_Iqbal_Davila_2026.pdf"
                        className="flex-1 md:flex-none flex items-center justify-between gap-6 px-6 py-4 border text-white font-medium transition-all duration-300 group relative overflow-hidden"
                        style={{
                            background: "color-mix(in srgb, white 2%, transparent)",
                            borderColor: "color-mix(in srgb, white 8%, transparent)",
                        }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.background = "var(--accent-orange)";
                            (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-orange)";
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.background = "color-mix(in srgb, white 2%, transparent)";
                            (e.currentTarget as HTMLElement).style.borderColor = "color-mix(in srgb, white 8%, transparent)";
                        }}
                    >
                        <span className="flex items-center gap-3 z-10">
                            <FileText className="w-5 h-5" />
                            Download CV
                        </span>
                        <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform z-10" />
                    </a>
                </motion.div>

            </div>

            <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 pb-10 flex justify-center items-center text-xs font-mono text-white/25 border-t pt-8" style={{ borderColor: "color-mix(in srgb, white 5%, transparent)" }}>
                <p>© 2026</p>
            </div>
        </footer>
    );
};

export default Footer;
