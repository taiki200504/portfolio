import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Section } from "@/components/ui/section";
import { useTranslation } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { Link } from "wouter";

export default function ResourcesPage() {
    const { t, language } = useTranslation();
    const getLink = (path: string) => language === "en" ? `/en${path}` : path;

    const resources = [
        {
            title: "Catalog",
            desc: t("menu.catalog.desc"),
            path: "/catalog",
            icon: BookOpen,
            color: "text-[#f6bd2b]"
        },
        {
            title: "Waiting List",
            desc: "Join the waiting list for early access.",
            path: "/waiting-list",
            icon: Clock,
            color: "text-white"
        }
    ];

    return (
        <div className="min-h-screen bg-[#040B17] text-white font-sans selection:bg-[#f6bd2b] selection:text-[#040B17]">
            <Navbar />
            <main className="pt-32 pb-24">
                <Section>
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-24"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-['Outfit'] tracking-tight">
                                RESOURCES
                            </h1>
                            <p className="text-white/60 text-lg max-w-2xl mx-auto">
                                Download product catalogs and join our waiting list.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {resources.map((item, index) => (
                                <Link key={index} href={getLink(item.path)}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer h-full flex flex-col"
                                    >
                                        <div className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition-transform`}>
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-2xl font-bold font-['Outfit'] mb-4 group-hover:text-[#f6bd2b] transition-colors">
                                            {item.title}
                                        </h2>
                                        <p className="text-white/60 mb-8 flex-1">
                                            {item.desc}
                                        </p>
                                        <div className="flex items-center text-sm font-bold tracking-widest text-white/40 group-hover:text-white transition-colors">
                                            VIEW PAGE <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
