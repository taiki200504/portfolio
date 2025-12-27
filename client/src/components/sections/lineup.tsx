import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function Lineup() {
    const { t, language } = useTranslation();
    const getLink = (path: string) => language === "en" ? `/en${path}` : path;

    const zenEgg = t("productPage.lineup.zenEgg") as any;
    const future = t("productPage.lineup.future") as any;
    const lineup = t("productPage.lineup") as any;

    if (!zenEgg || !future) return null;

    return (
        <Section id="lineup" className="bg-[#040B17] py-24 relative">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-[#f6bd2b] text-xs font-bold tracking-[0.2em] uppercase block mb-4">
                        {lineup.title}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white font-['Outfit'] mb-6">
                        {zenEgg.title}
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        {zenEgg.desc}
                    </p>
                </div>

                {/* Zen Egg Models */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {zenEgg.models.map((model: any, i: number) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#f6bd2b]/50 transition-all group flex flex-col"
                        >
                            <div className="mb-6">
                                <span className="text-xs font-bold text-[#f6bd2b] border border-[#f6bd2b] px-3 py-1 rounded-full uppercase tracking-wider">
                                    {model.tag}
                                </span>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4 font-['Outfit']">
                                {model.name}
                            </h3>
                            <p className="text-white/60 mb-8 min-h-[3rem] flex-grow">
                                {model.desc}
                            </p>

                            <div className="space-y-4 border-t border-white/10 pt-6">
                                <div>
                                    <div className="text-xs text-white/40 mb-1">TARGET</div>
                                    <div className="text-sm text-white">{model.target}</div>
                                </div>
                                <div>
                                    <div className="text-xs text-white/40 mb-1">PRICE</div>
                                    <div className="text-xl font-bold text-white font-['Outfit']">{model.price}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Future Lineup */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-white font-['Outfit'] mb-2">
                        {future.title}
                    </h3>
                    <p className="text-white/60">
                        {future.desc}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {future.items.map((item: any, i: number) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative aspect-[4/3] rounded-2xl overflow-hidden group bg-black border border-white/10"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

                            {/* Background Images */}
                            {i === 0 && <div className="absolute inset-0 bg-[url('/assets/egg/vr-egg.png')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />}
                            {i === 1 && <div className="absolute inset-0 bg-[url('/assets/egg/sleep-egg.png')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />}
                            {i === 2 && <div className="absolute inset-0 bg-[url('/assets/egg/brain-egg.png')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />}

                            <div className="absolute bottom-0 left-0 p-8 z-20">
                                <h4 className="text-2xl font-bold text-white mb-2 font-['Outfit']">{item.name}</h4>
                                <p className="text-white/60 text-sm">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Link href={getLink("/contact")}>
                        <Button
                            className="px-10 py-6 rounded-full bg-[#f6bd2b] text-[#040B17] hover:bg-[#f6bd2b]/90 font-bold text-lg font-['Outfit'] tracking-wider"
                        >
                            {lineup.cta}
                        </Button>
                    </Link>
                </div>
            </div>
        </Section>
    );
}
