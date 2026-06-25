"use client";

interface SectionBannerProps {
    title: string;
}

const SectionBanner = ({ title }: SectionBannerProps) => {
    return (
        <div className="sticky top-0 z-30 w-full py-3 px-6 md:px-12 lg:px-24 border-b backdrop-blur-xl relative overflow-hidden"
            style={{
                background: "color-mix(in srgb, var(--background) 85%, transparent)",
                borderColor: "color-mix(in srgb, var(--accent-blue) 15%, transparent)",
            }}
        >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-blue opacity-50"></div>
            
            <div className="flex items-center gap-4">
                <span className="text-[10px] text-white/30 font-mono">{'//'}</span>
                <p className="text-xs font-bold tracking-[0.25em] uppercase text-accent-blue">
                    {title}
                </p>
            </div>
            
            {/* Subtle grid line overlay */}
            <div className="absolute inset-0 bg-blueprint opacity-30 pointer-events-none" />
        </div>
    );
};

export default SectionBanner;
