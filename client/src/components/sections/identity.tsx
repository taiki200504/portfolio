import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function Identity() {
    return (
        <Section id="identity" className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-black text-xs font-bold tracking-[0.3em] uppercase mb-12 text-center font-['Outfit']">
                    ABOUT
                </h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-left md:text-center space-y-8"
                >
                    <p className="text-lg md:text-xl font-medium text-black leading-relaxed">
                        私は、「熱狂を生む場」と「動くプロダクト」を同時に設計する学生起業家です。<br />
                        中学時代のアニメ体験を起点に、テクノロジーで非日常体験を現実にすることを長期テーマにしています。
                    </p>
                    <p className="text-lg md:text-xl font-bold text-black leading-relaxed border-l-4 border-black pl-6 md:border-none md:pl-0">
                        一方で、理想論ではなく、<br />
                        構想を言語化し、小さく作って検証し、運用まで回して成果を出す<br />
                        という実装主義を重視しています。
                    </p>
                </motion.div>
            </div>
        </Section>
    );
}
