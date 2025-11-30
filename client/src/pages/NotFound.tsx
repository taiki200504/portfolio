import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#040B17] text-white p-4">
      <div className="text-center">
        <h1 className="text-[150px] font-bold text-[#f6bd2b]/10 leading-none font-['Outfit']">404</h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-4 font-['Outfit']">Void Detected.</h2>
        <p className="text-white/60 mb-8">
          この座標にはまだ何もありません。
          <br />
          内側の宇宙へ戻りましょう。
        </p>

        <Link href="/">
          <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-8 py-6">
            RETURN HOME
          </Button>
        </Link>
      </div>
    </div>
  );
}
