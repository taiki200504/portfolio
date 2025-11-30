import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#040B17] text-white font-sans selection:bg-[#f6bd2b] selection:text-[#040B17]">
      <Navbar />
      <main>
        <Hero />

        {/* Highlights Section */}
        <Section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "PHILOSOPHY", desc: "Why we build internal OS.", link: "/philosophy", color: "bg-[#092a62]" },
              { title: "PRODUCT", desc: "The EGG Series 01.", link: "/product", color: "bg-black" },
              { title: "COMPANY", desc: "Our team and vision.", link: "/company", color: "bg-[#1a1a1a]" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={item.link}>
                  <a className={`block h-full p-8 rounded-3xl border border-white/10 hover:border-[#f6bd2b]/50 transition-all group ${item.color} relative overflow-hidden`}>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-2 font-['Outfit']">{item.title}</h3>
                      <p className="text-white/60 mb-8">{item.desc}</p>
                      <div className="flex items-center gap-2 text-[#f6bd2b] font-bold text-sm group-hover:gap-4 transition-all">
                        EXPLORE <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f6bd2b]/0 to-[#f6bd2b]/0 group-hover:from-[#f6bd2b]/5 group-hover:to-transparent transition-all duration-500" />
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
