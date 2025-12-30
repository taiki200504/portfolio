import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function Identity() {
    return (
        <Section id="identity" className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left border-t border-black/10 pt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h3 className="text-black text-sm font-bold tracking-widest uppercase font-['Outfit']">Mission</h3>
                        <p className="text-2xl font-bold text-black leading-relaxed">
                            個人のポテンシャルを<br />拡張する
                        </p>
                        <p className="text-black/40 text-sm font-['Outfit']">Expand Individual Potential</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="space-y-4"
                    >
                        <h3 className="text-black text-sm font-bold tracking-widest uppercase font-['Outfit']">Vision</h3>
                        <p className="text-2xl font-bold text-black leading-relaxed">
                            人類を内側から<br />アップデート
                        </p>
                        <p className="text-black/40 text-sm font-['Outfit']">Upgrade Humanity from the Inside</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h3 className="text-black text-sm font-bold tracking-widest uppercase font-['Outfit']">Philosophy</h3>
                        <p className="text-2xl font-bold text-black leading-relaxed">
                            静寂を<br />エンジニアリングする
                        </p>
                        <p className="text-black/40 text-sm font-['Outfit']">We Engineer Silence</p>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
