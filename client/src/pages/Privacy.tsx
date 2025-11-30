import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Section } from "@/components/ui/section";

export default function Privacy() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Navbar />
            <main className="pt-32 pb-20">
                <Section className="max-w-3xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold mb-12 text-[#092a62]">プライバシーポリシー</h1>

                    <div className="prose prose-slate max-w-none space-y-8 text-[#092a62]/80">
                        <section>
                            <h2 className="text-xl font-bold text-[#092a62] mb-4">1. 個人情報の取り扱いについて</h2>
                            <p>
                                LYEN株式会社（以下、「当社」といいます。）は、本ウェブサイト上で提供するサービス（以下、「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#092a62] mb-4">2. 個人情報の収集方法</h2>
                            <p>
                                当社は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレスなどの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を、当社の提携先などから収集することがあります。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#092a62] mb-4">3. 個人情報の利用目的</h2>
                            <p>
                                当社が個人情報を収集・利用する目的は、以下のとおりです。
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>当社サービスの提供・運営のため</li>
                                <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                                <li>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため</li>
                                <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#092a62] mb-4">4. お問い合わせ窓口</h2>
                            <p>
                                本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
                            </p>
                            <p className="mt-4">
                                LYEN株式会社<br />
                                Eメールアドレス：info@lyen.jp
                            </p>
                        </section>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
