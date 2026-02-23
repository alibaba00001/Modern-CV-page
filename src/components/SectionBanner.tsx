"use client";

interface SectionBannerProps {
    title: string;
}

const SectionBanner = ({ title }: SectionBannerProps) => {
    return (
        <div className="sticky top-0 z-30 w-full py-3 px-6 md:px-12 lg:px-24 border-b backdrop-blur-xl"
            style={{
                background: "rgba(5, 10, 20, 0.85)",
                borderColor: "rgba(59, 130, 246, 0.2)",
            }}
        >
            <p className="text-xs font-bold tracking-[0.25em] uppercase"
                style={{ color: "#3b82f6" }}
            >
                {title}
            </p>
        </div>
    );
};

export default SectionBanner;

