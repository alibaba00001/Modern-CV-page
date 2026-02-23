"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, FileText, ArrowUpRight } from "lucide-react";
import SectionBanner from "./SectionBanner";

const Footer = () => {
    return (
        <footer className="relative w-full bg-[#020609] border-t border-white/5">
            <SectionBanner title="Contact" />
            <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 pt-24 pb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">

                {/* Identity */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-6"
                >
                    <div>
                        <h2 className="text-4xl font-bold tracking-tight text-white mb-2">
                            Omar Ali
                        </h2>
                        <p className="text-white/50 font-light text-lg">
                            Engineering & Operations
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 text-white/70 font-light">
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
                        className="flex-1 md:flex-none flex items-center justify-between gap-6 px-6 py-4 rounded-xl border text-white font-medium transition-all duration-300 group"
                        style={{
                            background: "rgba(255,255,255,0.04)",
                            borderColor: "rgba(255,255,255,0.08)",
                        }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.background = "#3b82f6";
                            (e.currentTarget as HTMLElement).style.borderColor = "#3b82f6";
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                        }}
                    >
                        <span className="flex items-center gap-3">
                            <Linkedin className="w-5 h-5" />
                            LinkedIn
                        </span>
                        <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>

                    <a
                        href="/CV_Omar_Ali_Davila.pdf"
                        download="CV_Omar_Ali_Davila.pdf"
                        className="flex-1 md:flex-none flex items-center justify-between gap-6 px-6 py-4 rounded-xl border text-white font-medium transition-all duration-300 group"
                        style={{
                            background: "rgba(255,255,255,0.04)",
                            borderColor: "rgba(255,255,255,0.08)",
                        }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.background = "#f97316";
                            (e.currentTarget as HTMLElement).style.borderColor = "#f97316";
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                        }}
                    >
                        <span className="flex items-center gap-3">
                            <FileText className="w-5 h-5" />
                            Download CV
                        </span>
                        <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                </motion.div>

            </div>

            <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 pb-10 flex justify-between items-center text-sm text-white/25 font-light border-t border-white/5 pt-8">
                <p>© 2026 Omar Ali Iqbal Davila</p>
                <p>Monterrey · Seoul · The World</p>
            </div>
        </footer>
    );
};

export default Footer;
