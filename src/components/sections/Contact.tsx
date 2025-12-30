"use client";

import { Section } from "@/components/ui/section";
import { Mail } from "lucide-react";

export function Contact() {
    const consultationTypes = [
        {
            title: "壁打ち",
            desc: "構想の言語化・整理",
            price: "Free",
            link: "#"
        },
        {
            title: "LP / 提案資料の改善",
            desc: "伝わる構成へのブラッシュアップ",
            price: "Ask",
            link: "#contact-form"
        },
        {
            title: "0→1の設計 / 実装",
            desc: "要件定義から実装まで一気通貫",
            price: "Ask",
            link: "#contact-form"
        }
    ];
    return (
        <Section id="contact" className="py-20 bg-white border-t border-black/10">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-black text-xs font-bold tracking-[0.3em] uppercase mb-16 text-center font-['Outfit']">
                    CONTACT
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {consultationTypes.map((type, i) => (
                        <div key={i} className="bg-white border border-black/10 p-6 flex flex-col items-center text-center hover:border-black transition-colors cursor-default">
                            <h3 className="text-lg font-bold text-black mb-2">{type.title}</h3>
                            <p className="text-black/60 text-sm">{type.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="bg-gray-50 border border-black/5 p-8 md:p-12 mb-12">
                    <div className="text-center mb-10">
                        <p className="text-black font-medium text-base mb-4 leading-relaxed">
                            何を相談すればいいか分からない状態でも問題ありません。<br />
                            上記のいずれかに当てはまれば、概要だけ送ってください。
                        </p>
                        <div className="mt-8">
                            <a href="mailto:taiki.mishima.biz@gmail.com" className="inline-flex items-center gap-2 text-black hover:underline font-bold tracking-wider text-lg">
                                <Mail className="w-5 h-5" /> taiki.mishima.biz@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="w-full h-[600px] bg-white">
                        <iframe
                            src="https://taiki-pages.notion.site/ebd/2d9e50949125804dabc9ffa81e38acec"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allowFullScreen
                            className="bg-transparent"
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
}
