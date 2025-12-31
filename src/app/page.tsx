import { AiServices } from "@/components/sections/AiServices";

// ... ensure import at top if I could, but `replace_file_content` checks exact match.
// I will do it in two chunks correctly this time.
// Actually, I can use `multi_replace`. Or just `replace` carefully.
// I'll assume lines match. I will check the file content again to be safe?
// I already saw page.tsx content in Step 453.
// Imports were at the top.
// I will just add the component in the JSX first, then add the import.

import { Navbar } from "@/components/layout/navbar";

// Section Components
import { Hero } from "@/components/sections/Hero";
import { Identity } from "@/components/sections/Identity";
import { History as HistorySection } from "@/components/sections/History";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { BasicInfo } from "@/components/sections/BasicInfo";
import { AiServices } from "@/components/sections/AiServices";
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
        <AiServices />
        <CaseStudies works={works} />

        <Skills />
        <BasicInfo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
