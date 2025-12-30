import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { MoveRight, Mail } from "lucide-react";

export function Contact() {
    const consultationTypes = [
        {
            title: "壁打ち (30min)",
            desc: "アイデアの整理・技術選定・キャリア相談など、まずは気軽に話したい方へ。",
            price: "Free",
            link: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0..." // Placeholder
        },
        {
            title: "LP / 営業資料の改善",
            desc: "既存のLPやピッチ資料を診断し、情報設計とコピーライティングを最適化します。",
            price: "¥50,000 ~",
            link: "#contact-form"
        },
        {
            title: "0→1 プロダクト設計・実装",
            desc: "要件定義からUIデザイン、実装までを一気通貫でサポートします。",
            price: "Ask",
            link: "#contact-form"
        }
    ];

    return (
        <Section id="contact" className="py-24 bg-[#040B17]">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] uppercase mb-16 text-center font-['Outfit']">
                    CONTACT
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    {consultationTypes.map((type, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col hover:border-[#f6bd2b]/50 transition-colors">
                            <h3 className="text-lg font-bold text-white mb-2">{type.title}</h3>
                            <p className="text-white/60 text-sm mb-4 flex-grow">{type.desc}</p>
                            <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center">
                                <span className="text-[#f6bd2b] font-bold font-['Outfit']">{type.price}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-12">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold text-white mb-4">お問い合わせ</h3>
                        <p className="text-white/60 text-sm">
                            プロジェクトのご相談やご依頼は、下記フォームまたはメールにてご連絡ください。<br />
                            通常24時間以内に返信いたします。
                        </p>
                        <div className="mt-6">
                            <a href="mailto:taiki.mishima.biz@gmail.com" className="inline-flex items-center gap-2 text-[#f6bd2b] hover:underline font-bold tracking-wider">
                                <Mail className="w-4 h-4" /> taiki.mishima.biz@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Notion Form Placeholder - In robust implementation this would use a Notion API backend or existing form service */}
                    <form className="space-y-6 max-w-lg mx-auto" action="mailto:taiki.mishima.biz@gmail.com" method="post" encType="text/plain">
                        <div>
                            <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2">Name</label>
                            <input type="text" name="name" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#f6bd2b] transition-colors" placeholder="山田 太郎" required />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2">Contact (Email / X)</label>
                            <input type="text" name="contact" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#f6bd2b] transition-colors" placeholder="email@example.com" required />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2">Category</label>
                            <select name="category" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#f6bd2b] transition-colors">
                                <option value="consultation">壁打ち・相談</option>
                                <option value="improvement">LP・資料改善</option>
                                <option value="development">プロダクト開発</option>
                                <option value="other">その他</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2">Message</label>
                            <textarea name="message" rows={5} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#f6bd2b] transition-colors" placeholder="ご相談内容、案件の背景、納期感など" required></textarea>
                        </div>

                        <Button type="submit" className="w-full bg-[#f6bd2b] text-[#040B17] hover:bg-[#f6bd2b]/90 font-bold tracking-widest h-12 rounded-full">
                            SEND MESSAGE <MoveRight className="w-4 h-4 ml-2" />
                        </Button>
                    </form>
                </div>
            </div>
        </Section>
    );
}
