import { Section } from "@/components/ui/section";
import { Link } from "wouter";
import { ExternalLink } from "lucide-react";

export function Skills() {
    return (
        <Section id="skills" className="py-20 bg-white border-t border-black/10">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-black text-xs font-bold tracking-[0.3em] uppercase mb-16 text-center font-['Outfit']">
                    SKILLS & STACK
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">

                    {/* Product */}
                    <div>
                        <h3 className="text-lg font-bold text-black mb-6 border-b border-black/20 pb-2 font-['Outfit']">
                            Product
                        </h3>
                        <ul className="list-disc list-inside space-y-3 text-sm text-black/80 font-medium">
                            <li>事業・プロダクトの要件化<br /><span className="text-xs text-black/40 pl-5 block mt-1">(Vision → 構造 → 実装計画)</span></li>
                            <li>KPI設計と運用改善</li>
                        </ul>
                    </div>

                    {/* Growth */}
                    <div>
                        <h3 className="text-lg font-bold text-black mb-6 border-b border-black/20 pb-2 font-['Outfit']">
                            Growth
                        </h3>
                        <ul className="list-disc list-inside space-y-3 text-sm text-black/80 font-medium">
                            <li>コミュニティ運用<br /><span className="text-xs text-black/40 pl-5 block mt-1">(参加者が動く導線設計)</span></li>
                            <li>発信・コンテンツ企画</li>
                        </ul>
                    </div>

                    {/* Build */}
                    <div>
                        <h3 className="text-lg font-bold text-black mb-6 border-b border-black/20 pb-2 font-['Outfit']">
                            Build
                        </h3>
                        <ul className="list-disc list-inside space-y-3 text-sm text-black/80 font-medium">
                            <li>Next.js / TypeScript / Tailwind</li>
                            <li>Notion連携・業務自動化</li>
                        </ul>
                    </div>

                </div>
            </div>
        </Section>
    );
}
