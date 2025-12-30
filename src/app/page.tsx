import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

// Section Components
import { Hero } from "@/components/sections/Hero";
import { Identity } from "@/components/sections/Identity";
import { History as HistorySection } from "@/components/sections/History";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { getWorks } from "@/lib/notion";

// Force dynamic rendering if Notion data changes frequently
// export const dynamic = 'force-dynamic';
// Or keep static if you build periodically (ISR)
export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  const works = await getWorks();

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Identity />
        <HistorySection />
        <CaseStudies works={works} />
        import {BasicInfo} from "@/components/sections/BasicInfo";

        // ... (imports)

        // ... (inside Home function)
        <Skills />
        <BasicInfo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
