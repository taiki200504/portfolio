import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function Team() {
    return (
        <Section id="team" className="bg-[#092a62]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-24">
                    <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] mb-6 uppercase">TEAM</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white font-['Outfit'] mb-8">
                        The Architects
                    </h3>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        私たちは、最高の自己没入体験を通じて、<br />
                        個人のポテンシャルを拡張し、人類を内側からアップデートしていきます。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            name: "三島 大毅",
                            role: "CEO / Founder",
                            bio: "立教大学経済学部二年 (休学中)。日米両方の高校を卒業。",
                            details: [
                                "高校時代はアニメ業界におけるDAO技術の促進について研究。",
                                "「学生団体連合UNION」を創設し、株式会社Cometreeへの事業譲渡・売却を経験。",
                                "Regalisにてスーツ事業を立ち上げ、マーケティング責任者として継続。",
                                "J-StarX Stanfordにて現地に1ヶ月滞在し、Stanford d.schoolにてデザイン思考のプログラムを修了。",
                            ],
                            mission: "「未知をテクノロジーで体現し、日々を世界観でUpdate」"
                        },
                        {
                            name: "武川 桜太朗",
                            role: "Co-Founder",
                            bio: "東京大学理科一類一年。石川県金沢市出身。",
                            details: [
                                "化学グランプリ金賞、物理チャレンジ奨励賞を獲得。国際化学オリンピック代表候補。",
                                "BTB溶液の研究で高校化学グランドコンテストポスター賞を受賞。",
                                "G7教育大臣会合で米国代表とのディスカッションに参加。",
                                "合同会社心動で伝統工芸のマーケティングを担当。",
                            ]
                        },
                        {
                            name: "長谷川 琉祥",
                            role: "Hardware Dev",
                            bio: "慶應義塾大学環境情報学部二年。",
                            details: [
                                "高校1年時から建築事務所に所属し、設計・施工の経験を積む。",
                                "空間デザイナーとして企業プロジェクトを牽引。",
                                "設計からシステム構築、施工まで一貫して行う。",
                                "型選抜塾において4校舎統括を行う。",
                            ]
                        },
                        {
                            name: "堀内 文翔",
                            role: "PM",
                            bio: "慶應義塾大学環境情報学部一年。",
                            details: [
                                "14歳でリアルタイムクーポンアプリ「キタキタ!」を立ち上げ、資金調達を経験。",
                                "15年間のサッカー経験と6年の主将経験。",
                                "ドルトン東京学園1期生、米コロラド州へ留学。",
                                "現在は団地の再開発とコミュニティデザインを研究。",
                            ]
                        },
                        {
                            name: "木戸 洵成",
                            role: "Branding Manager",
                            bio: "SNS・メディア・広告領域のスペシャリスト。",
                            details: [
                                "100万人越えの美容系インフルエンサーのSNS運用を担当。",
                                "株式会社小学館でのYouTubeチャンネル立ち上げ・運用。",
                                "CyberAgentでのネット広告作成業務。",
                                "2024年11月に資金調達を行い、オフライン広告事業を開始。",
                            ]
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#040B17] border border-white/5 p-8 rounded-xl text-left hover:border-[#f6bd2b]/50 transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex-shrink-0" />
                                <div>
                                    <h4 className="text-lg font-bold text-white font-['Outfit']">{item.name}</h4>
                                    <div className="text-[#f6bd2b] text-[10px] font-bold tracking-widest uppercase">{item.role}</div>
                                </div>
                            </div>

                            <p className="text-white/80 text-sm mb-4 font-bold">{item.bio}</p>

                            <ul className="space-y-2 mb-4">
                                {item.details.map((detail, j) => (
                                    <li key={j} className="text-white/50 text-xs leading-relaxed pl-3 relative">
                                        <span className="absolute left-0 top-1.5 w-1 h-1 bg-[#f6bd2b] rounded-full opacity-50" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>

                            {item.mission && (
                                <div className="pt-4 border-t border-white/5">
                                    <p className="text-[#f6bd2b] text-xs italic opacity-80">"{item.mission}"</p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
