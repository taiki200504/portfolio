"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { WORKS_DATA } from "@/lib/mock-data";


import { Work } from "@/types/portfolio";

export function CaseStudies({ works = [] }: { works?: Work[] }) {
    const featuredWorks = works.length > 0 ? works : WORKS_DATA.filter(w => w.featured);
    return (
        <Section id="case-studies" className="py-20 bg-white border-t border-black/10">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-black text-xs font-bold tracking-[0.3em] uppercase font-['Outfit']">
                        WORKS / CASE STUDIES
                    </h2>
                    <div className="hidden md:block text-xs font-bold text-black/40 font-['Outfit']">
                        SELECTED ARCHIVES
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredWorks.map((work, i) => (
                        <WorkCard key={work.id} work={work} index={i} />
                    ))}
                </div>
            </div>
        </Section>
    );
}
import Link from "next/link";

// ... (CaseStudies function remains the same)

function WorkCard({ work, index }: { work: Work; index: number }) {
    const isExternal = work.url?.startsWith("http");

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="h-full"
        >
            <Link
                href={work.url || "#"}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group flex flex-col h-full border border-black/10 bg-white hover:border-black transition-all duration-300 relative p-6 md:p-8 block"
            >
                {/* Header */}
                <div className="mb-6 flex-grow">
                    <h3 className="text-xl font-bold text-black mb-3 font-['Outfit'] group-hover:underline decoration-1 underline-offset-4">
                        {work.title}
                    </h3>

                    {/* One-liner */}
                    <div className="mb-4">
                        <span className="text-[10px] font-bold text-black/30 uppercase tracking-widest block mb-1">What</span>
                        <p className="text-sm font-bold text-black leading-snug">{work.oneLiner}</p>
                    </div>
                    <div className="space-y-3 pt-4 border-t border-black/5">
                        {work.role && (
                            <div>
                                <span className="text-[10px] font-bold text-black/30 uppercase tracking-widest block mb-0.5">Role</span>
                                <p className="text-xs text-black">{work.role}</p>
                            </div>
                        )}
                        {work.impact && (
                            <div>
                                <span className="text-[10px] font-bold text-black/30 uppercase tracking-widest block mb-0.5">Impact</span>
                                <p className="text-xs text-black">{work.impact}</p>
                            </div>
                        )}
                        {work.deliverables && (
                            <div>
                                <span className="text-[10px] font-bold text-black/30 uppercase tracking-widest block mb-0.5">Deliverables</span>
                                <p className="text-xs text-black/70">{work.deliverables}</p>
                            </div>
                        )}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
