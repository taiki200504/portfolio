"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import Image from "next/image";

export function Identity() {
    return (
        <Section id="identity" className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-black text-xs font-bold tracking-[0.3em] uppercase mb-12 text-center font-['Outfit']">
                    ABOUT
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    {/* Image Section */}
                    <div className="md:col-span-5 flex justify-center md:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative w-64 h-64 md:w-80 md:h-80"
                        >
                            {/* Frame Effect */}
                            <div className="absolute inset-0 border-2 border-black translate-x-3 translate-y-3 z-0" />
                            <div className="relative z-10 w-full h-full bg-gray-100 overflow-hidden border border-black/10">
                                <Image
                                    src="/portfolio-photo.png"
                                    alt="Profile Photo"
                                    fill
                                    className="object-cover transition-all duration-500"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Text Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-7 space-y-8 text-left"
                    >
                        <p className="text-lg md:text-xl font-medium text-black leading-relaxed">
                            私は、「熱狂を生む場」と「動くプロダクト」を同時に設計する学生起業家です。<br />
                            中学時代のアニメ体験を起点に、テクノロジーで非日常体験を現実にすることを長期テーマにしています。
                        </p>
                        <p className="text-lg md:text-xl font-bold text-black leading-relaxed border-l-4 border-black pl-6">
                            一方で、理想論ではなく構想を言語化し<br />
                            小さく作って検証・運用まで回して<br />
                            成果を出すという実装主義を重視しています
                        </p>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
