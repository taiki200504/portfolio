import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle, FileText } from "lucide-react";

// Section Components
import { Identity } from "@/components/sections/identity";
import { History as HistorySection } from "@/components/sections/history"; // Aliased to avoid conflict
import { CaseStudies } from "@/components/sections/case-studies";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  const proofPills = [
    "UNION事業譲渡",
    "Gaiax DAO",
    "Regalis CMO",
    "JAA公認アンバサダー"
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#040B17] text-white font-sans selection:bg-[#f6bd2b] selection:text-[#040B17]">
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Visuals - Keeping minimal/abstract */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[#040B17]/40 z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#092a62] via-[#040B17] to-[#040B17] opacity-60" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f6bd2b]/5 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-20 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 text-center md:text-left"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 font-['Outfit'] leading-tight">
                学生起業家 / <br className="md:hidden" />
                <span className="text-white/80">プロダクト & <br />コミュニティ設計</span>
              </h1>

              <p className="text-white/70 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-10 mx-auto md:mx-0">
                Visionを、実装できる計画とプロダクトに落とします。
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <Button
                  onClick={() => handleScrollTo("contact")}
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-8 h-14 text-base font-bold tracking-widest bg-[#f6bd2b] text-[#040B17] hover:bg-[#f6bd2b]/90 shadow-[0_0_20px_rgba(246,189,43,0.3)] hover:shadow-[0_0_30px_rgba(246,189,43,0.5)] transition-all"
                >
                  <MessageCircle className="mr-2 w-5 h-5" /> 相談する
                </Button>
                <Button
                  onClick={() => handleScrollTo("case-studies")}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-8 h-14 text-base font-bold tracking-widest border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/40 transition-all"
                >
                  <FileText className="mr-2 w-5 h-5" /> 実績を見る
                </Button>
              </div>
            </motion.div>

            {/* Right: Proof Pills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex-1 flex flex-col items-center md:items-end gap-4"
            >
              {proofPills.map((pill, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-full text-white/90 font-bold tracking-wide shadow-lg hover:border-[#f6bd2b]/50 transition-colors cursor-default"
                >
                  {pill}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-[0.2em] uppercase font-['Outfit']"
          >
            Scroll
          </motion.div>
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
