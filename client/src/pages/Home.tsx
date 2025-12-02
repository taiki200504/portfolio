import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { useTranslation } from "@/lib/i18n";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "wouter";

export default function Home() {
  const { t, language } = useTranslation();
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <div className="min-h-screen bg-[#040B17] text-white font-sans selection:bg-[#f6bd2b] selection:text-[#040B17]">
      <Navbar />
      <main>
        {/* 1. HERO SECTION */}
        <div ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Visuals */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[#040B17]/40 z-10" />
            {/* Placeholder for Hero Video/Image */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#092a62] via-[#040B17] to-[#040B17] opacity-60" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f6bd2b]/10 rounded-full blur-[120px]" />
          </div>

          <motion.div
            style={{ opacity, scale, y }}
            className="relative z-20 text-center px-4 max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="text-[#f6bd2b] text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-6 font-['Outfit']">
                {t("hero.subtitle")}
              </h2>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 font-['Outfit'] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                {t("hero.title")}
              </h1>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
                <Link href={language === "en" ? "/en/product/the-egg" : "/product/the-egg"}>
                  <Button size="lg" className="rounded-full px-8 h-14 text-base bg-[#f6bd2b] text-[#040B17] hover:bg-[#f6bd2b]/90 font-bold tracking-widest shadow-[0_0_30px_rgba(246,189,43,0.3)] hover:shadow-[0_0_50px_rgba(246,189,43,0.5)] transition-all duration-300">
                    {t("hero.cta")}
                  </Button>
                </Link>
                <Link href={language === "en" ? "/en/company" : "/company"}>
                  <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-base border-white/20 text-white hover:bg-white/10 font-['Outfit'] tracking-widest backdrop-blur-sm">
                    ABOUT LYEN
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-[0.2em] uppercase font-['Outfit']"
          >
            {t("hero.scroll")}
          </motion.div>
        </div>

        {/* 2. PRODUCT SHOWCASE (Visual Heavy) */}
        <Section className="py-32 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden group"
              >
                {/* Placeholder for Product Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a2c4e] to-[#040B17] group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-80 bg-black/40 rounded-[48%] border border-white/10 backdrop-blur-md shadow-2xl relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-[48%]" />
                    {/* Inner Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#f6bd2b]/20 rounded-full blur-3xl" />
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl font-bold font-['Outfit'] mb-2">The EGG</h3>
                  <p className="text-white/60 text-sm">Flagship Immersion Pod</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h2 className="text-4xl md:text-5xl font-bold leading-tight font-['Outfit']">
                  <span className="text-[#f6bd2b]">Silence</span> is the new luxury.
                </h2>
                <p className="text-lg text-white/60 leading-relaxed">
                  {t("product.desc")}
                </p>
                <div className="flex flex-col gap-4">
                  <Link href={language === "en" ? "/en/product/the-egg" : "/product/the-egg"} className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 hover:border-[#f6bd2b]/30">
                    <div className="w-12 h-12 rounded-full bg-[#f6bd2b]/10 flex items-center justify-center text-[#f6bd2b]">
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div>
                      <h4 className="font-bold font-['Outfit'] text-lg">Discover The EGG</h4>
                      <p className="text-xs text-white/40">Hardware Specs & Features</p>
                    </div>
                  </Link>
                  <Link href={language === "en" ? "/en/product/lineup" : "/product/lineup"} className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 hover:border-[#f6bd2b]/30">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/60 group-hover:text-white">
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div>
                      <h4 className="font-bold font-['Outfit'] text-lg">View Lineup</h4>
                      <p className="text-xs text-white/40">Standard / Pro / Public</p>
                    </div>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* 3. HUB GRID (Visual Cards) */}
        <Section className="py-24 bg-white/[0.02]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Use Cases Card */}
              <Link href={language === "en" ? "/en/use-cases" : "/use-cases"} className="group relative aspect-[4/5] md:aspect-auto md:h-[500px] rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                {/* Placeholder Image */}
                <div className="absolute inset-0 bg-[#111] group-hover:scale-105 transition-transform duration-700">
                  <div className="absolute inset-0 bg-[url('/assets/placeholder-office.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <h3 className="text-2xl font-bold font-['Outfit'] mb-2 group-hover:text-[#f6bd2b] transition-colors">Use Cases</h3>
                  <p className="text-white/60 text-sm line-clamp-2">
                    Executive rooms, airport lounges, saunas. See how The EGG fits into various spaces.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[#f6bd2b] text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    View Scenes <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              {/* Platform Card */}
              <Link href={language === "en" ? "/en/platform" : "/platform"} className="group relative aspect-[4/5] md:aspect-auto md:h-[500px] rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                {/* Placeholder Image */}
                <div className="absolute inset-0 bg-[#0d1b2a] group-hover:scale-105 transition-transform duration-700">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1e40af] to-transparent opacity-30" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <h3 className="text-2xl font-bold font-['Outfit'] mb-2 group-hover:text-[#f6bd2b] transition-colors">Internal OS</h3>
                  <p className="text-white/60 text-sm line-clamp-2">
                    The platform connecting Space, Experience, and Log. Upgrade humanity from the inside out.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[#f6bd2b] text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    Explore Platform <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              {/* Company Card */}
              <Link href={language === "en" ? "/en/company" : "/company"} className="group relative aspect-[4/5] md:aspect-auto md:h-[500px] rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                {/* Placeholder Image */}
                <div className="absolute inset-0 bg-[#1a1a1a] group-hover:scale-105 transition-transform duration-700">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-20" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <h3 className="text-2xl font-bold font-['Outfit'] mb-2 group-hover:text-[#f6bd2b] transition-colors">Company</h3>
                  <p className="text-white/60 text-sm line-clamp-2">
                    We Engineer Silence. Meet the team and see our roadmap.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[#f6bd2b] text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    About LYEN <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
