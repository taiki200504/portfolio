import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { MenuGrid } from "@/components/sections/menu-grid";
import { NewsPreview } from "@/components/sections/news-preview";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#040B17] text-white font-sans selection:bg-[#f6bd2b] selection:text-[#040B17]">
      <Navbar />
      <main>
        <Hero />
        <MenuGrid />
        <NewsPreview />
      </main>
      <Footer />
    </div>
  );
}
