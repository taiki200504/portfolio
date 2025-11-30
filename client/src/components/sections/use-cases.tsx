import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

const cases = [
    {
        category: "Executive Office",
        title: "重要な決断の前に、ひとりになる。",
        desc: "戦略会議や1on1の前に、30分だけ自分の頭と向き合うためのOSルームとして。",
        tags: ["Office", "Strategy", "Focus"],
    },
    {
        category: "Airport Lounge",
        title: "移動の前に、内側を整える。",
        desc: "フライト前の待ち時間を、ただの待機時間から“マインドセットの切り替え時間”へ。",
        tags: ["Travel", "Reset", "Lounge"],
    },
    {
        category: "Members Club",
        title: "“整ったあと”に、思考を深める。",
        desc: "サウナやスパで体を整えたあと、The EGGで思考を整える新しいウェルネスフロー。",
        tags: ["Wellness", "Sauna", "Retreat"],
    },
];

export function UseCases() {
    return (
        <Section id="use-cases" className="bg-white">
            <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#092a62]">
                    静かなOSルームを、
                    <br className="md:hidden" />
                    あなたの場所にも。
                </h2>
                <p className="text-[#092a62]/70 max-w-2xl">
                    オフィスの一角から、空港ラウンジ、会員制サウナまで。
                    <br />
                    The EGGは、“ただ休む”ではなく“内側を整えてから次へ進む”ための新しい選択肢になります。
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cases.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group cursor-pointer"
                    >
                        {/* Card Visual */}
                        <div className="aspect-[3/2] bg-slate-100 rounded-lg mb-6 overflow-hidden relative">
                            <div className="absolute inset-0 bg-[#092a62] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                            <div className="w-full h-full flex items-center justify-center text-slate-300">
                                IMAGE: {item.category}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative pl-4 border-l-2 border-slate-200 group-hover:border-[#f6bd2b] transition-colors duration-300">
                            <div className="text-xs font-bold tracking-wider text-[#092a62]/50 uppercase mb-2">
                                {item.category}
                            </div>
                            <h3 className="text-lg font-bold text-[#092a62] mb-3 group-hover:text-[#092a62] transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                {item.desc}
                            </p>
                            <div className="flex gap-2">
                                {item.tags.map((tag) => (
                                    <span key={tag} className="text-[10px] px-2 py-1 bg-slate-100 text-slate-500 rounded-full">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
