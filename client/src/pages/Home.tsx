import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Product } from "@/components/sections/product";
import { Roadmap } from "@/components/sections/roadmap";
import { Science } from "@/components/sections/science";
import { Solution } from "@/components/sections/solution";
import { Team } from "@/components/sections/team";
import { UseCases } from "@/components/sections/use-cases";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#040B17] text-white font-sans selection:bg-[#f6bd2b] selection:text-[#040B17]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Problem />
        <Solution />
        <Product />
        <Experience />
        <UseCases />
        <Science />
        <Roadmap />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
