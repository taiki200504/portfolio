import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle, FileText, ArrowRight } from "lucide-react";

// Section Components
import { Identity } from "@/components/sections/identity";
import { History as HistorySection } from "@/components/sections/history";
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
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <Navbar />
      <main className="pt-24">
        {/* HERO SECTION */}
        <div className="relative h-[90vh] flex items-center justify-center overflow-hidden border-b border-black/10">
          {/* Grid Background */}
          <div className="absolute inset-0 z-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
              backgroundSize: "64px 64px"
            }}
          />

          <div className="relative z-20 container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-left mb-12"
              >
                <p className="text-sm font-bold tracking-[0.3em] uppercase mb-4 text-black/40">Portfolio 2025</p>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] font-['Outfit'] mb-8 text-black">
                  TAIKI <br />
                  MISHIMA
                </h1>
                <p className="text-lg md:text-2xl font-medium leading-relaxed max-w-2xl text-black/70">
                  Student Entrepreneur / <br />
                  Product & Community Architect
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12 border-t border-black/10 pt-8"
              >
                <div className="flex flex-wrap gap-3">
                  {proofPills.map((pill, idx) => (
                    <div
                      key={idx}
                      className="border border-black/10 px-4 py-2 text-sm font-bold tracking-wide text-black/60 hover:border-black/40 hover:text-black transition-colors cursor-default bg-white"
                    >
                      {pill}
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={() => handleScrollTo("contact")}
                    size="lg"
                    className="rounded-none h-14 px-8 text-base font-bold tracking-widest bg-black text-white hover:bg-black/90 transition-all border border-black"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" /> CONSULT
                  </Button>
                  <Button
                    onClick={() => handleScrollTo("case-studies")}
                    variant="outline"
                    size="lg"
                    className="rounded-none h-14 px-8 text-base font-bold tracking-widest border border-black text-black hover:bg-black hover:text-white transition-all bg-transparent"
                  >
                    <FileText className="mr-2 w-5 h-5" /> WORKS
                  </Button>
                </div>
              </motion.div>
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
