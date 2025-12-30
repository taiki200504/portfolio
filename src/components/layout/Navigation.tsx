"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu } from "lucide-react";
import { MenuOverlay } from "./MenuOverlay";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "HOME", href: "#hero", label: "ホーム" },
    { name: "IDENTITY", href: "#identity", label: "価値観" },
    { name: "BIOGRAPHY", href: "#biography", label: "経歴" },
    { name: "WORKS", href: "#works", label: "制作実績" },
    { name: "SKILLS", href: "#skills", label: "スキル" },
    { name: "CONTACT", href: "#contact", label: "お問い合わせ" },
];

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <>
            <motion.header
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6"
            >
                {/* Logo Area */}
                <Link href="#hero" className="group z-50">
                    <span className="font-display text-xl font-bold tracking-widest text-white mix-blend-difference group-hover:text-electric-cyan transition-colors">
                        MISHIMA<span className="font-light opacity-50">.JP</span>
                    </span>
                </Link>

                {/* Hamburger Button */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="group z-50 flex items-center gap-2 rounded-full border border-white/10 bg-void-black/50 px-4 py-2 backdrop-blur-md transition-all hover:border-electric-cyan/50"
                >
                    <span className="hidden font-mono text-[10px] uppercase tracking-widest text-white/60 md:block group-hover:text-white">
                        Menu
                    </span>
                    <Menu className="h-5 w-5 text-white transition-colors group-hover:text-electric-cyan" />
                </button>
            </motion.header>

            <MenuOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} items={navItems} />
        </>
    );
}
