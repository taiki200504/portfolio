import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#040B17] text-white p-4">
      <h1 className="text-6xl md:text-9xl font-bold text-[#f6bd2b] mb-4 font-['Outfit'] opacity-20">404</h1>
      <h2 className="text-2xl md:text-4xl font-bold mb-6 font-['Outfit'] tracking-widest">VOID DETECTED</h2>
      <p className="text-white/60 mb-12 text-center max-w-md">
        この座標には、まだ何もありません。
        <br />
        内側の世界へ戻りましょう。
      </p>
      <Link href="/">
        <Button size="lg" className="rounded-full font-bold tracking-wider">
          RETURN TO HOME
        </Button>
      </Link>
    </div>
  );
}
