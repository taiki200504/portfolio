import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Activity, Ear, MessageSquare } from "lucide-react";

export function Science() {
    return (
        <Section id="science" className="bg-[#f8fafc]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#092a62]">
                        “気持ちいい”だけで
                        <br />
                        終わらせないための設計。
                    </h2>
                    <p className="text-[#092a62]/80 mb-8 leading-relaxed">
                        The EGGの体験設計は、環境心理学や行動科学などの知見に基づいています。
                        なんとなく整った気がする、で終わらないように。
                    </p>

                    <div className="space-y-8">
                        {[
                            {
                                icon: Ear,
                                title: "Noise & Focus",
                                desc: "騒音が集中力や意思決定に与える影響に関する研究をもとに、外界ノイズを限りなく減らす防音構造と、単純な視覚情報だけに絞った空間を設計しています。",
                            },
                            {
                                icon: MessageSquare,
                                title: "Voice & Thinking",
                                desc: "自分の考えを“声に出して話す”ことで、思考が整理されやすくなることは、カウンセリングやコーチングの現場でも知られています。",
                            },
                            {
                                icon: Activity,
                                title: "Feedback & Behavior",
                                desc: "状態やログが数字や構造としてフィードバックされることで、人は自分の思考や行動を少しずつ変えていきます。",
                            },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#092a62]/10 flex items-center justify-center shrink-0">
                                    <item.icon className="w-5 h-5 text-[#092a62]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#092a62] mb-1">{item.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Data Viz Placeholder */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100"
                >
                    <div className="mb-6 flex items-center justify-between">
                        <div className="font-bold text-[#092a62]">Session Score</div>
                        <div className="text-xs text-slate-400">Last 30 Days</div>
                    </div>

                    {/* Mock Chart */}
                    <div className="h-64 flex items-end justify-between gap-2 mb-8">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="w-full bg-[#092a62]/5 rounded-t-sm relative group">
                                <div
                                    className="absolute bottom-0 left-0 right-0 bg-[#092a62] rounded-t-sm transition-all duration-1000"
                                    style={{ height: `${30 + Math.random() * 60}%` }}
                                />
                                {/* Hover tooltip */}
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#092a62] text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    {Math.floor(Math.random() * 100)}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-[#f8fafc] rounded-lg">
                            <div className="text-xs text-slate-500 mb-1">Avg. Focus Time</div>
                            <div className="text-2xl font-bold text-[#092a62]">24<span className="text-sm font-normal ml-1">min</span></div>
                        </div>
                        <div className="p-4 bg-[#f8fafc] rounded-lg">
                            <div className="text-xs text-slate-500 mb-1">Clarity Score</div>
                            <div className="text-2xl font-bold text-[#f6bd2b]">8.4<span className="text-sm font-normal ml-1">/10</span></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
