import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Section } from "@/components/ui/section";
import { Link } from "wouter";
import useSWR from "swr";
import { useTranslation } from "@/lib/i18n";

const fetcher = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Failed to fetch");
    }
    return res.json();
};

export default function NewsPage() {
    const { data: news, error } = useSWR("/api/news", fetcher);
    const { t, language } = useTranslation();

    const getLink = (path: string) => language === "en" ? `/en${path}` : path;

    return (
        <div className="min-h-screen bg-[#040B17] text-white font-sans selection:bg-[#f6bd2b] selection:text-[#040B17]">
            <Navbar />
            <main className="pt-24">
                <Section className="py-24">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-16 font-['Outfit'] tracking-widest text-center">
                            {t("newsPage.title")}
                        </h1>

                        <div className="space-y-8">
                            {!news && !error && (
                                <div className="text-center text-white/40 py-12">{t("newsPage.loading")}</div>
                            )}
                            {error && (
                                <div className="text-center text-red-400 py-12">
                                    {t("newsPage.error")}
                                    <br />
                                    <span className="text-sm opacity-70">{error.message}</span>
                                </div>
                            )}
                            {news && news.length === 0 && (
                                <div className="text-center text-white/40 py-12">{t("newsPage.empty")}</div>
                            )}
                            {news && news.length > 0 && (
                                news.map((item: any) => (
                                    <Link key={item.id} href={getLink(`/news/${item.slug}`)} className="block group">
                                        <article className="bg-white/5 border border-white/10 p-8 rounded-xl hover:border-[#f6bd2b] transition-all duration-300">
                                            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                                                <time className="text-sm text-white/40 font-['Outfit'] shrink-0 w-32">
                                                    {item.date}
                                                </time>
                                                <div>
                                                    <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#f6bd2b] transition-colors mb-2">
                                                        {item.title}
                                                    </h2>
                                                    {item.excerpt && (
                                                        <p className="text-white/60 text-sm line-clamp-2">
                                                            {item.excerpt}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                ))
                            )}
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
