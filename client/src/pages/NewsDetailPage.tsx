import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Section } from "@/components/ui/section";
import { Link, useRoute } from "wouter";
import useSWR from "swr";
import ReactMarkdown from "react-markdown";
import { ArrowLeft } from "lucide-react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function NewsDetailPage() {
    const [match, params] = useRoute("/news/:slug");
    const slug = params?.slug;
    const { data: news, error } = useSWR(slug ? `/api/news/${slug}` : null, fetcher);

    if (!match) return null;

    return (
        <div className="min-h-screen bg-[#040B17] text-white font-sans selection:bg-[#f6bd2b] selection:text-[#040B17]">
            <Navbar />
            <main className="pt-24">
                <Section className="py-24">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <Link href="/news">
                            <a className="inline-flex items-center gap-2 text-white/40 hover:text-[#f6bd2b] transition-colors mb-12 text-sm font-bold tracking-widest font-['Outfit']">
                                <ArrowLeft className="w-4 h-4" /> BACK TO NEWS
                            </a>
                        </Link>

                        {news ? (
                            <article>
                                <header className="mb-12 border-b border-white/10 pb-12">
                                    <time className="text-sm text-[#f6bd2b] font-['Outfit'] mb-4 block tracking-widest">
                                        {news.date}
                                    </time>
                                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                                        {news.title}
                                    </h1>
                                </header>

                                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-['Outfit'] prose-a:text-[#f6bd2b] prose-strong:text-white">
                                    <ReactMarkdown>{news.content}</ReactMarkdown>
                                </div>
                            </article>
                        ) : (
                            <div className="text-center text-white/40 py-12">
                                {error ? "Failed to load news." : "Loading..."}
                            </div>
                        )}
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
