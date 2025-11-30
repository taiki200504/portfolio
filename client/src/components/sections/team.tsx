import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function Team() {
    return (
        <Section id="team" className="bg-[#fafcfd]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Story */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#092a62]">
                        なぜ、私たちは
                        <br />
                        “内側”にこだわるのか。
                    </h2>
                    <div className="space-y-6 text-[#092a62]/80 leading-relaxed">
                        <p>
                            いつでもどこでもつながれるようになって、便利になったはずなのに、
                            心や頭がすり減っていく。そんな感覚から、LYENははじまりました。
                        </p>
                        <p>
                            私たちは、テクノロジーの方向を“外側の拡張”だけでなく、
                            “内側の静けさと意思決定”にも向けたいと考えています。
                        </p>
                        <p>
                            人間が本来持っている「考える力」や「感じる力」を、
                            テクノロジーで奪うのではなく、守り、育てるために。
                        </p>
                    </div>
                </motion.div>

                {/* Members */}
                <div className="grid gap-6">
                    {[
                        {
                            role: "Founder / CEO",
                            name: "T. Mishima",
                            quote: "人が一人で考える時間を、ちゃんと設計されたものにしたい。",
                        },
                        {
                            role: "Product / AI",
                            name: "Y. Sato",
                            quote: "ハードとソフトの両方から、“内側に効く体験”をつくっています。",
                        },
                    ].map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center gap-6"
                        >
                            <div className="w-16 h-16 bg-slate-100 rounded-full shrink-0" />
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <span className="font-bold text-[#092a62] text-lg">{member.name}</span>
                                    <span className="text-[10px] bg-[#f6bd2b]/10 text-[#f6bd2b] px-2 py-0.5 rounded-full font-bold">
                                        {member.role}
                                    </span>
                                </div>
                                <p className="text-sm text-slate-600 italic">"{member.quote}"</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
