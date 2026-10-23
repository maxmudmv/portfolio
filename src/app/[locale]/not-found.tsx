import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[65vh] flex-col items-center justify-center px-4 text-center">
      <p className="font-mono text-sm font-bold tracking-widest text-gold-400 uppercase">
        404 • SAHIFA TOPILMADI
      </p>
      <h1 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-5xl">
        Soʻralgan sahifa mavjud emas
      </h1>
      <p className="mt-3 max-w-md text-sm text-slate-400">
        Manzil notoʻgʻri kiritilgan boʻlishi mumkin. Asosiy sahifaga qaytib, barcha boʻlimlar bilan tanishing.
      </p>
      <Link
        href="/uz"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold-400 to-amber-500 px-6 py-3 text-sm font-bold text-obsidian-950 shadow-gold-sm"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Asosiy sahifaga qaytish</span>
      </Link>
    </div>
  );
}
