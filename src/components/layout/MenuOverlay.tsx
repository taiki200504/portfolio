"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

interface MenuOverlayProps {
    isOpen: boolean;
    onClose: () => void;
    items: { name: string; href: string; label: string }[];
}

export function MenuOverlay({ isOpen, onClose, items }: MenuOverlayProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-void-black/95 backdrop-blur-xl"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 p-2 text-white/50 hover:text-electric-cyan transition-colors"
                    >
                        <X size={32} />
                    </button>

                    <nav className="flex flex-col items-center gap-8">
                        {items.map((item, idx) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                            >
                                <Link
                                    href={item.href}
                                    onClick={onClose}
                                    className="group relative block text-center"
                                >
                                    <span className="block font-display text-4xl md:text-6xl font-bold uppercase tracking-widest text-white transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-electric-cyan group-hover:to-white">
                                        {item.name}
                                    </span>
                                    <span className="mt-2 block font-mono text-xs text-white/40 group-hover:text-electric-cyan/80 tracking-[0.5em]">
                                        {item.label}
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
