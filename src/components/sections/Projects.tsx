"use client";

import { motion, useAnimationFrame, useMotionValue, useTransform, wrap, PanInfo } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Work } from "@/lib/notion";

// Fallback data matching the Work interface
const defaultProjects: Work[] = [
    {
        id: "1",
        title: "LYEN",
        description: "The Egg Model. 次世代の資本エコシステム。",
        link: "https://lyen.jp",
        tags: ["Vision", "Architecture"],
        year: "2023",
        featured: true,
        imageUrl: ""
    },
    {
        id: "2",
        title: "Regalis Tokyo",
        description: "Luxury Reimagined. 伝統とデジタルの融合。",
        link: "#",
        tags: ["Branding", "Digital Strategy"],
        year: "2024",
        featured: true,
        imageUrl: ""
    },
    {
        id: "3",
        title: "PM Lab",
        description: "プロダクトマネジメントの実践的研究機関。",
        link: "#",
        tags: ["Education", "Community"],
        year: "2024",
        featured: true,
        imageUrl: ""
    },
    {
        id: "4",
        title: "UNION",
        description: "始まりのアーカイブ。Cometreeの遺産。",
        link: "#",
        tags: ["Archive"],
        year: "2022",
        featured: true,
        imageUrl: ""
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
        <section id="works" className="relative bg-void-black py-24 overflow-hidden">
            {/* Title Section */}
            <div className="container mx-auto px-6 mb-16 md:mb-24 md:px-12">
                <h2 className="font-display text-8xl font-bold uppercase tracking-tighter text-ether-white md:text-9xl">
                    Works
                </h2>
                <p className="mt-6 font-mono text-sm tracking-widest text-white/40">
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
                            href={project.link || "#"}
                            // Prevent drag from triggering click immediately if dragging?
                            onClick={(e) => {
                                if (isDragging) e.preventDefault();
                            }}
                            draggable={false} // Disable native drag
                            className="group relative h-[50vh] w-[80vw] md:h-[60vh] md:w-[45vw] lg:w-[35vw] flex-shrink-0 overflow-hidden bg-white/5 transition-colors hover:bg-white/10 border border-white/5 hover:border-electric-cyan/30"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 transition-colors group-hover:from-electric-cyan/10" />

                            {/* Optional Background Image */}
                            {project.imageUrl && (
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    draggable={false}
                                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-40"
                                />
                            )}

                            {/* Card Content */}
                            <div className="relative flex h-full flex-col justify-between p-8 md:p-10">
                                <div className="flex justify-between items-start">
                                    <span className="font-mono text-xl text-white/40 group-hover:text-electric-cyan/80 transition-colors">0{(idx % displayWorks.length) + 1}</span>
                                    <ArrowUpRight className="h-8 w-8 text-white/40 transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:text-electric-cyan" />
                                </div>

                                <div>
                                    <div className="mb-6 flex flex-wrap gap-2">
                                        {project.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="border border-white/20 px-3 py-1 font-mono text-xs text-white/60 group-hover:border-electric-cyan/40 group-hover:text-electric-cyan/80 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="font-display text-4xl md:text-5xl font-bold text-white transition-colors group-hover:text-electric-cyan leading-tight">
                                        {project.title}
                                    </h3>
                                    {project.description && (
                                        <p className="mt-4 text-sm md:text-base font-light text-white/70 line-clamp-3 group-hover:text-white/90">
                                            {project.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
