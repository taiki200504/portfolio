import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Section } from "@/components/ui/section";

export default function Terms() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Navbar />
            <main className="pt-32 pb-20">
                <Section className="max-w-3xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold mb-12 text-[#092a62]">利用規約</h1>

                    <div className="prose prose-slate max-w-none space-y-8 text-[#092a62]/80">
                        <section>
                            <h2 className="text-xl font-bold text-[#092a62] mb-4">1. 適用</h2>
                            <p>
                                本規約は、ユーザーとLYEN株式会社（以下、「当社」といいます。）との間の本サービスの利用に関わる一切の関係に適用されるものとします。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#092a62] mb-4">2. 禁止事項</h2>
                            <p>
                                ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>法令または公序良俗に違反する行為</li>
                                <li>犯罪行為に関連する行為</li>
                                <li>本サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為</li>
                                <li>当社、ほかのユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#092a62] mb-4">3. 免責事項</h2>
                            <p>
                                当社の債務不履行責任は、当社の故意または重過失によらない場合には免責されるものとします。
                            </p>
                        </section>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
