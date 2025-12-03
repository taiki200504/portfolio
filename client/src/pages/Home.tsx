import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { useTranslation } from "@/lib/i18n";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "wouter";
import { LyenIn60s } from "@/components/sections/lyen-in-60s";
import { GlassMenuGrid } from "@/components/sections/glass-menu-grid";

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

  const getLink = (path: string) => language === "en" ? `/en${path}` : path;

  // Mock News Data
  const newsItems = [
    {
      date: "2024.05.01",
      category: "NEWS",
      title: "LYEN Official Website Renewal",
      path: "/news/renewal"
    },
    {
      date: "2024.04.15",
      category: "NEWS",
      title: "The EGG Concept Movie Released",
      path: "/news/movie"
    },
    {
      date: "2024.04.01",
      category: "PRESS",
      title: "LYEN raises seed funding to accelerate 'Internal OS' development",
      path: "/news/funding"
    }
  ];

  return (
    <div className="min-h-screen bg-[#040B17] text-white font-sans selection:bg-[#f6bd2b] selection:text-[#040B17]">
      <Navbar />
      <main>
        {/* 1. HERO SECTION */}
        <div ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Visuals */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[#040B17]/40 z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#092a62] via-[#040B17] to-[#040B17] opacity-60" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f6bd2b]/10 rounded-full blur-[120px]" />
          </div>

          <motion.div
            style={{ opacity, scale, y }}
            className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 font-['Outfit'] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 leading-tight">
                {t("hero.title")}
              </h1>
              <p className="text-white/70 text-sm md:text-lg font-medium leading-relaxed max-w-2xl mb-10 whitespace-pre-line">
                {t("hero.subtitle")}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Link href={getLink("/catalog")}>
                  <Button size="lg" className="w-full sm:w-auto rounded-full px-8 h-12 text-sm font-bold tracking-widest bg-[#f6bd2b] text-[#040B17] hover:bg-[#f6bd2b]/90 shadow-[0_0_20px_rgba(246,189,43,0.3)] hover:shadow-[0_0_30px_rgba(246,189,43,0.5)] transition-all">
                    {t("hero.cta.catalog")}
                  </Button>
                </Link>
                <Link href={getLink("/contact")}>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-8 h-12 text-sm font-bold tracking-widest border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/40 transition-all">
                    {t("hero.cta.contact")}
                  </Button>
                </Link>
                <Link href={getLink("/waiting-list")}>
                  <Button variant="ghost" size="lg" className="w-full sm:w-auto rounded-full px-8 h-12 text-sm font-bold tracking-widest text-white/50 hover:text-white hover:bg-white/5 transition-all">
                    {t("hero.cta.waitingList")}
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

        {/* 2. LYEN in 60 seconds */}
        <LyenIn60s />

        {/* 3. Glass Menu Grid */}
        <GlassMenuGrid />

        {/* 4. Latest News */}
        <Section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-2xl font-bold font-['Outfit'] tracking-widest text-white">LATEST NEWS</h2>
              <Link href={getLink("/news")}>
                <Button variant="ghost" className="text-white/50 hover:text-white group">
                  VIEW ALL <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="flex flex-col gap-6">
              {newsItems.map((item, index) => (
                <Link key={index} href={getLink(item.path)}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-4 text-xs font-bold tracking-widest font-['Outfit']">
                      <span className="text-white/40">{item.date}</span>
                      <span className="px-2 py-1 rounded bg-white/10 text-[#f6bd2b]">{item.category}</span>
                    </div>
                    <h3 className="text-lg font-bold group-hover:text-[#f6bd2b] transition-colors flex-1">
                      {item.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-[#f6bd2b] group-hover:translate-x-1 transition-all" />
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </Section>

      </main>
      <Footer />
    </div>
  );
}
