import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle, FileText, ArrowDownRight } from "lucide-react";

// Section Components
import { Identity } from "@/components/sections/identity";
import { History as HistorySection } from "@/components/sections/history";
import { CaseStudies } from "@/components/sections/case-studies";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <Navbar />
      <main className="pt-24">
        {/* HERO SECTION */}
        <div className="relative flex flex-col items-center justify-center overflow-hidden border-b border-black/10 pb-20">
          {/* Grid Background */}
          <div className="absolute inset-0 z-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
              backgroundSize: "64px 64px"
            }}
          />

          <div className="relative z-20 container mx-auto px-4 pt-10 md:pt-20">
            <div className="max-w-6xl mx-auto">
              {/* 1. Main Copy */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-left"
                >
                  <p className="text-sm font-bold tracking-[0.3em] uppercase mb-6 text-black/40">Portfolio 2025</p>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] font-['Outfit'] mb-6 text-black">
                    <span className="block mb-2 text-2xl md:text-3xl opacity-60">学生起業家 |</span>
                    プロダクト設計 <br />× コミュニティ設計 <br />× 実装
                  </h1>
                  <div className="space-y-4 mb-8">
                    <p className="text-lg font-medium leading-relaxed max-w-lg text-black/80">
                      世界観や想いを、実装できる計画とアウトプットに落とします。<br />
                      企画・言語化・運用・制作まで、一気通貫で「動く形」にするのが得意です。
                    </p>
                    <p className="text-sm font-bold text-black border-l-2 border-black pl-4 py-1">
                      一次情報で本質を掘り、最短距離で検証して前に進めます。
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      onClick={() => handleScrollTo("contact")}
                      size="lg"
                      className="rounded-none h-14 px-8 text-base font-bold tracking-widest bg-black text-white hover:bg-black/90 transition-all border border-black"
                    >
                      <MessageCircle className="mr-2 w-5 h-5" /> 相談する
                    </Button>
                    <Button
                      onClick={() => handleScrollTo("case-studies")}
                      variant="outline"
                      size="lg"
                      className="rounded-none h-14 px-8 text-base font-bold tracking-widest border border-black text-black hover:bg-black hover:text-white transition-all bg-transparent"
                    >
                      <FileText className="mr-2 w-5 h-5" /> 実績を見る
                    </Button>
                  </div>
                </motion.div>

                {/* 2. Service Menu (What I do) */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="grid grid-cols-1 gap-4"
                >
                  {/* Service Card 1 */}
                  <div className="bg-white border border-black/10 p-6 hover:border-black transition-colors group cursor-default">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg text-black">事業 / プロダクトの言語化</h3>
                      <ArrowDownRight className="w-5 h-5 opacity-20 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <ul className="list-disc list-inside text-xs text-black/60 space-y-1 ml-1">
                      <li>ぼんやりした構想を、刺さる言葉・構造・要件に変換</li>
                      <li>ピッチ / LP / 提案資料の「伝わる型」まで整備</li>
                    </ul>
                  </div>

                  {/* Service Card 2 */}
                  <div className="bg-white border border-black/10 p-6 hover:border-black transition-colors group cursor-default">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg text-black">コミュニティ / メディア設計</h3>
                      <ArrowDownRight className="w-5 h-5 opacity-20 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <ul className="list-disc list-inside text-xs text-black/60 space-y-1 ml-1">
                      <li>参加者が動く導線設計（コンテンツ / イベント / 運営）</li>
                      <li>KPIを置き、再現性のある運用へ落とし込む</li>
                    </ul>
                  </div>

                  {/* Service Card 3 */}
                  <div className="bg-white border border-black/10 p-6 hover:border-black transition-colors group cursor-default">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg text-black">実装（Next.js中心）</h3>
                      <ArrowDownRight className="w-5 h-5 opacity-20 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <ul className="list-disc list-inside text-xs text-black/60 space-y-1 ml-1">
                      <li>LP・簡易プロダクト・ダッシュボード・運用自動化</li>
                      <li>作って終わりではなく「使われる状態」まで仕上げる</li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <Identity />
        <HistorySection />
        <CaseStudies />
        <Skills />
        <Contact />

      </main>
      <Footer />
    </div>
  );
}
