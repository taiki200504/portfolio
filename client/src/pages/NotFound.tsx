import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#040B17] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#092a62]/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-[120px] font-bold text-[#f6bd2b]/10 leading-none select-none">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-wide">
          Page Not Found
        </h2>
        <p className="text-white/60 mb-8 max-w-md mx-auto leading-relaxed">
          お探しのページは、静寂の中に消えてしまったようです。
          <br />
          URLをご確認いただくか、トップページへお戻りください。
        </p>

        <Link href="/">
          <Button className="bg-[#f6bd2b] text-[#040B17] hover:bg-[#f6bd2b]/90 px-8 py-6 rounded-full font-bold gap-2">
            <ArrowLeft className="w-4 h-4" />
            トップへ戻る
          </Button>
        </Link>
      </div>
    </div>
  );
}
