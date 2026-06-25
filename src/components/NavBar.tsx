"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Globe", href: "#globe" },
    { label: "Impact", href: "#impact" },
    { label: "Contact", href: "#contact" },
];

const NavBar = () => {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 200], [0, 1]);
    const y = useTransform(scrollY, [0, 150], [-16, 0]);

    return (
        <motion.nav
            style={{
                opacity,
                y,
                background: "color-mix(in srgb, var(--background) 85%, transparent)",
                border: "1px solid color-mix(in srgb, var(--accent-blue) 15%, transparent)",
                maxWidth: "calc(100vw - 2rem)",
            }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 px-3 py-2 rounded-full backdrop-blur-xl shadow-xl overflow-x-auto no-scrollbar whitespace-nowrap"
            aria-label="Site navigation"
        >
            {navItems.map((item) => (
                <a
                    key={item.label}
                    href={item.href}
                    className="px-3 py-1.5 text-xs font-semibold text-white/50 hover:text-white transition-colors rounded-full hover:bg-white/5 tracking-wide"
                >
                    {item.label}
                </a>
            ))}
        </motion.nav>
    );
};

export default NavBar;
