"use client";

import { motion } from "framer-motion";
import { Wrench, CheckCircle, Database } from "lucide-react";
import SectionBanner from "./SectionBanner";

const skills = [
  {
    category: "Engineering & Manufacturing",
    icon: <Wrench className="w-5 h-5" style={{ color: "var(--accent-blue)" }} />,
    items: [
      "SolidWorks", "ANSYS Fluent (CFD)", "Fusion 360", "Mach3", "MATLAB",
      "GD&T", "Engineering drawings", "Tolerance analysis", "Machining processes",
      "CNC fundamentals", "PFMEA", "8D/Ishikawa",
      "Vernier caliper", "Micrometer", "Height gauge", "Surface-roughness inspection"
    ]
  },
  {
    category: "Supply Chain & Quality",
    icon: <CheckCircle className="w-5 h-5" style={{ color: "var(--accent-orange)" }} />,
    items: [
      "SAP", "Demand analysis", "Purchase orders", "Material master data",
      "Supplier evaluation", "RFQ management", "Sourcing savings tracking",
      "Inventory analysis", "KPI reporting"
    ]
  },
  {
    category: "Data & Automation",
    icon: <Database className="w-5 h-5" style={{ color: "var(--accent-blue)" }} />,
    items: [
      "Excel", "VBA", "Power Query", "Power BI", "Python", "SQL",
      "APIs", "pandas", "Data visualization", "Automation",
      "CSV/Excel workflows", "JavaScript"
    ]
  }
];

const certifications = [
  { name: "QDA X — QDA Solutions GmbH", year: "2026" },
  { name: "DataMetrics — Datamyte", year: "2026" },
  { name: "EnglishScore C1 Advanced — British Council", year: "2026" },
  { name: "Data Science Math Skills — Duke University", year: "2025" }
];

export default function SkillsAndCertifications() {
  return (
    <section className="relative w-full pb-24">
      <SectionBanner title="Skills & Certifications" />
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 pt-24 space-y-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-12">
            Technical <span className="text-white/50">Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((group, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-none bg-white/[0.01] border transition-colors relative overflow-hidden group"
                style={{ borderColor: "color-mix(in srgb, white 5%, transparent)" }}
              >
                {/* Technical corner marks */}
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 opacity-30 group-hover:opacity-100 transition-opacity" style={{ borderColor: "var(--accent-blue)" }} />
                
                <div className="flex items-center gap-3 mb-6">
                  {group.icon}
                  <h3 className="text-lg font-semibold text-white">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-sm text-xs font-medium border text-white/70 hover:text-white transition-colors cursor-default"
                      style={{ 
                        background: "color-mix(in srgb, white 2%, transparent)",
                        borderColor: "color-mix(in srgb, white 5%, transparent)"
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white mb-8 border-b pb-4" style={{ borderColor: "color-mix(in srgb, white 5%, transparent)" }}>
            Certifications & Training
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex justify-between items-center p-4 rounded-none border relative overflow-hidden"
                style={{ 
                  background: "color-mix(in srgb, white 1%, transparent)",
                  borderColor: "color-mix(in srgb, white 5%, transparent)" 
                }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 opacity-50" style={{ background: "var(--accent-orange)" }} />
                <span className="text-sm font-medium text-white/80 pl-2">{cert.name}</span>
                <span className="text-xs font-bold text-accent-blue">{cert.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
