import type { Metadata } from "next";
import { Inter, Syncopate } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syncopate = Syncopate({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-syncopate",
  display: "swap",
});

export const metadata: Metadata = {
  title: "三島大毅ポートフォリオサイト | Taiki Life OS",
  description: "起業家 / ビジョンアーキテクト。未知の世界をテクノロジーで体現する。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${syncopate.variable}`} suppressHydrationWarning>
      <body
        className="antialiased bg-void-black text-ether-white selection:bg-electric-cyan selection:text-void-black"
        suppressHydrationWarning
      >

        {children}
      </body>
    </html>
  );
}
