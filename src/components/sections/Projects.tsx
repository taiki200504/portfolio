"use client";

import { motion, useAnimationFrame, useMotionValue, useTransform, wrap, PanInfo } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Work } from "@/types/portfolio";

// Fallback data matching the Work interface
const defaultProjects: Work[] = [
    {
        id: "1",
        title: "LYEN",
        oneLiner: "The Egg Model. 次世代の資本エコシステム。",
        role: "Founder",
        impact: "New Capital Ecosystem",
        deliverables: "Concept / Architecture",
        url: "https://lyen.jp",
        tags: ["Vision", "Architecture"],
        year: "2023",
        type: "Product",
        featured: true,
        status: "Published",
        slug: "lyen"
    },
    {
        id: "2",
        title: "Regalis Tokyo",
        oneLiner: "Luxury Reimagined. 伝統とデジタルの融合。",
        role: "Strategic Partner",
        impact: "Brand Re-definition",
        deliverables: "Strategy / Digital",
        url: "#",
        tags: ["Branding", "Digital Strategy"],
        year: "2024",
        type: "Community",
        featured: true,
        status: "Published",
        slug: "regalis"
    },
    {
        id: "3",
        title: "PM Lab",
        oneLiner: "プロダクトマネジメントの実践的研究機関。",
        role: "Organizer",
        impact: "Community Growth",
        deliverables: "Program / Operations",
        url: "#",
        tags: ["Education", "Community"],
        year: "2024",
        type: "Community",
        featured: true,
        status: "Published",
        slug: "pmlab"
    },
    {
        id: "4",
        title: "UNION",
        oneLiner: "始まりのアーカイブ。Cometreeの遺産。",
        role: "Co-Founder",
        impact: "Legacy Archive",
        deliverables: "Website / Archive",
        url: "#",
        tags: ["Archive"],
        year: "2022",
        type: "Community",
        featured: true,
        status: "Published",
        slug: "union"
    }
];

interface ProjectsProps {
    works?: Work[];
}

export function Projects({ works = [] }: ProjectsProps) {
    const displayWorks = works.length > 0 ? works : defaultProjects;
    // Duplicate works to create seamless loop (Tripled)
    const carouselWorks = [...displayWorks, ...displayWorks, ...displayWorks];

    const baseX = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [loopWidth, setLoopWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Measure the width of one loop iteration
    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                // The container holds 3 copies. Loop width is total / 3.
                setLoopWidth(containerRef.current.scrollWidth / 3);
            }
        };

        // Initial measure
        updateWidth();

        // Wait a bit for layout to settle (e.g. images loading)
        const timeoutId = setTimeout(updateWidth, 100);

        window.addEventListener("resize", updateWidth);
        return () => {
            window.removeEventListener("resize", updateWidth);
            clearTimeout(timeoutId);
        };
    }, [displayWorks]);

    // Animation Loop
    useAnimationFrame((t, delta) => {
        if (!isHovered && !isDragging && loopWidth > 0) {
            // Move left: subtract from baseX
            // Speed: 0.05px per ms -> 50px per second (adjust as needed)
            const moveBy = 0.05 * delta;
            baseX.set(baseX.get() - moveBy);
        }
    });

    // Transform baseX to looped x
    const x = useTransform(baseX, (v) => {
        if (!loopWidth) return "0px";
        return `${wrap(0, -loopWidth, v)}px`;
    });

    const handlePan = (_: Event, info: PanInfo) => {
        // Build-in delta is nice
        baseX.set(baseX.get() + info.delta.x);
    };

    return (
        <section id="works" className="relative bg-white py-24 overflow-hidden border-t border-black/10">
            {/* Title Section */}
            <div className="container mx-auto px-6 mb-16 md:mb-24 md:px-12">
                <h2 className="text-black text-xs font-bold tracking-[0.3em] uppercase mb-4 font-['Outfit']">
                    WORKS / CAROUSEL
                </h2>
                <p className="font-mono text-sm tracking-widest text-black/40">
                    SELECTED PROJECTS<br />2022 - 2025
                </p>
            </div>

            {/* Carousel Container */}
            <div
                className="flex w-full cursor-grab active:cursor-grabbing touch-pan-y"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                    setIsHovered(false);
                    setIsDragging(false);
                }}
            >
                <motion.div
                    ref={containerRef}
                    className="flex gap-8 md:gap-16 px-4 md:px-12"
                    style={{ x }}
                    onPanStart={() => setIsDragging(true)}
                    onPanEnd={() => setIsDragging(false)}
                    onPan={handlePan}
                >
                    {carouselWorks.map((project, idx) => (
                        <a
                            key={`${project.id}-${idx}`}
                            href={project.url || "#"}
                            // Prevent drag from triggering click immediately if dragging?
                            onClick={(e) => {
                                if (isDragging) e.preventDefault();
                            }}
                            draggable={false} // Disable native drag
                            className="group relative h-[40vh] w-[70vw] md:h-[50vh] md:w-[40vw] lg:w-[30vw] flex-shrink-0 bg-white border border-black/10 hover:border-black transition-colors flex flex-col justify-between p-8"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <span className="font-mono text-sm text-black/40 group-hover:text-black transition-colors">0{(idx % displayWorks.length) + 1}</span>
                                <ArrowUpRight className="h-6 w-6 text-black/30 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black" />
                            </div>

                            <div>
                                <h3 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-black/60 font-medium mb-6 line-clamp-2">
                                    {project.oneLiner}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="border border-black/10 px-2 py-1 text-xs text-black/50 group-hover:border-black/30 group-hover:text-black transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
