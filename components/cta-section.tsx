"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, PhoneCall } from "lucide-react";

export function CTASection({
  title = "Prêt à concrétiser votre projet digital ?",
  subtitle = "Contactez B-Tech Company dès aujourd'hui pour obtenir une estimation personnalisée et échanger sur vos besoins.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-blue-900 via-slate-900 to-zinc-950 text-white border border-blue-500/30 shadow-2xl overflow-hidden">
          {/* Ambient light glow */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Démarrons une collaboration</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {title}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/devis"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-200 hover:from-cyan-300 hover:to-white shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-base"
              >
                <span>Demander un devis gratuit</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-200 text-base"
              >
                <PhoneCall className="w-4 h-4 text-cyan-400" />
                <span>Nous contacter</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

