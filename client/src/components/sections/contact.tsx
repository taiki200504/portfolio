import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function Contact() {
    return (
        <Section id="contact" className="bg-white">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#092a62]">
                        まずは、静かな対話から
                        <br className="md:hidden" />
                        はじめましょう。
                    </h2>
                    <p className="text-[#092a62]/70">
                        導入の相談、コラボレーション、取材のご希望など、
                        <br />
                        下記フォームからお気軽にお問い合わせください。
                    </p>
                </div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    action="https://formspree.io/f/YOUR_FORM_ID"
                    method="POST"
                    className="space-y-6 bg-[#fafcfd] p-8 rounded-2xl border border-slate-100 mb-16"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[#092a62]">お名前</label>
                            <input type="text" name="name" required className="w-full px-4 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#092a62]/20" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[#092a62]">メールアドレス</label>
                            <input type="email" name="email" required className="w-full px-4 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#092a62]/20" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-[#092a62]">お問い合わせ種別</label>
                        <select name="subject" className="w-full px-4 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#092a62]/20 bg-white">
                            <option>導入について</option>
                            <option>協業・パートナーシップについて</option>
                            <option>メディア・取材について</option>
                            <option>その他</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-[#092a62]">メッセージ</label>
                        <textarea name="message" required rows={4} className="w-full px-4 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#092a62]/20" />
                    </div>

                    <div className="text-center pt-4">
                        <Button type="submit" className="bg-[#f6bd2b] text-[#040B17] hover:bg-[#f6bd2b]/90 px-8 py-6 text-lg rounded-full font-bold">
                            送信する
                        </Button>
                    </div>
                </motion.form>

                {/* FAQ */}
                <div className="space-y-4">
                    <h3 className="text-center font-bold text-[#092a62] mb-6">よくあるご質問</h3>
                    {[
                        { q: "1台目の導入にはどれくらいの期間がかかりますか？", a: "現在は受注生産となっており、ご発注から約3〜4ヶ月での納品となります。" },
                        { q: "設置に必要なスペースや条件はありますか？", a: "約1.5m x 1.5mのスペースと、家庭用電源（100V）があれば設置可能です。" },
                        { q: "まず小さく試してみることはできますか？", a: "はい、都内のショールームにて体験セッションをご用意しております。お気軽にお申し込みください。" },
                    ].map((item, i) => (
                        <div key={i} className="bg-[#fafcfd] p-4 rounded-lg border border-slate-100">
                            <div className="font-bold text-[#092a62] mb-2 text-sm">Q. {item.q}</div>
                            <div className="text-sm text-slate-600">A. {item.a}</div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
