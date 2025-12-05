import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function NewsPreview() {
    const { data: news, error } = useSWR("/api/news", fetcher);

    // Placeholder data if API fails or no data (for development/demo)
    const placeholderNews = [
        {
            id: "1",
            title: "LYEN Corporate Site Renewal",
            date: "2025-11-30",
            slug: "renewal",
        },
        {
            id: "2",
            title: "The EGG Prototype v2 Released",
            date: "2025-11-15",
            slug: "prototype-v2",
        },
    ];

    const displayNews = news && news.length > 0 ? news.slice(0, 3) : placeholderNews;

    return (
        <section className="py-24 bg-[#040B17]">
            <div className="container mx-auto px-4">
                <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-4">
                    <h2 className="text-2xl font-bold text-white font-['Outfit'] tracking-widest">
                        NEWS
                    </h2>
                    <Link href="/news" className="text-xs font-bold text-[#f6bd2b] hover:text-white transition-colors tracking-widest flex items-center gap-2">
                        VIEW ALL <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {displayNews.length > 0 ? (
                        displayNews.map((item: any) => (
                            <Link key={item.id} href={`/news/${item.slug}`} className="group block">
                                <article className="h-full bg-white/5 border border-white/10 p-6 rounded-lg hover:border-[#f6bd2b] transition-colors">
                                    <time className="text-xs text-white/40 font-['Outfit'] mb-3 block">
                                        {item.date}
                                    </time>
                                    <h3 className="text-lg font-bold text-white group-hover:text-[#f6bd2b] transition-colors line-clamp-2">
                                        {item.title}
                                    </h3>
                                </article>
                            </Link>
                        ))
                    ) : (
                        <div className="col-span-3 text-center py-12 text-white/40 text-sm">
                            {error ? "Failed to load news." : "No news available yet."}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
