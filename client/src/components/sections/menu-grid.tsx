import { motion } from "framer-motion";
import { ArrowRight, Box, Brain, Users, Zap } from "lucide-react";
import { Link } from "wouter";

export function MenuGrid() {
    const menuItems = [
        {
            title: "The EGG",
            desc: "卵型没入ポッドという、内側のOSルーム。",
            icon: Box,
            href: "/product",
            delay: 0.1
        },
        {
            title: "Philosophy",
            desc: "ハード×対話×ログで、人の内側にOSを走らせる構想。",
            icon: Brain,
            href: "/philosophy",
            delay: 0.2
        },
        {
            title: "Use Cases",
            desc: "オフィス、ラウンジ、ホテルなどでの導入シーン。",
            icon: Zap,
            href: "/product#use-cases", // Linking to section within product page for now, or could be separate
            delay: 0.3
        },
        {
            title: "Company",
            desc: "MVVと、私たちが内側にこだわる理由。",
            icon: Users,
            href: "/company",
            delay: 0.4
        }
    ];

    return (
        <section className="py-24 bg-[#040B17] relative z-10 -mt-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {menuItems.map((item, i) => (
                        <Link key={i} href={item.href}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: item.delay }}
                                className="group cursor-pointer bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:border-[#f6bd2b] hover:bg-white/[0.07] transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 bg-[#092a62]/50 rounded-lg text-[#f6bd2b] group-hover:scale-110 transition-transform duration-300">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-[#f6bd2b] group-hover:translate-x-1 transition-all duration-300" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 font-['Outfit'] group-hover:text-[#f6bd2b] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                                    {item.desc}
                                </p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
