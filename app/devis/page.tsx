import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Sparkles, CheckCircle2, ShieldCheck, Clock, Layers } from "lucide-react";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Demander un Devis",
  description:
    "Demandez un devis gratuit et personnalisé pour votre projet de développement web, mobile, logiciel ou création graphique chez B-Tech Company.",
};

export default function DevisPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-b from-blue-950/10 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Estimation Gratuite & Sans Engagement</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Demander un <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Devis</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
              Détaillez vos besoins techniques et visuels. Notre équipe analysera votre projet et vous transmettra une proposition sur-mesure adaptée à votre budget.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Guarantees & Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-white/70 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-white/10 space-y-4 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Pourquoi demander un devis ?
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <span><strong>100% Gratuit</strong> et sans engagement contractuel préalable</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <span>Réponse chiffrée détaillée sous <strong>24 à 48h</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <span>Conseils techniques et recommandations d&apos;architecture inclus</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Layers className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <span>Tarification transparente sans frais cachés</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/40 to-cyan-900/20 border border-blue-500/20 text-slate-300 space-y-2 text-xs leading-relaxed">
              <p className="font-bold text-white text-sm">
                Besoin d&apos;un échange direct avant de remplir ?
              </p>
              <p>
                Vous pouvez également nous joindre directement par téléphone ou WhatsApp au <strong>+261 34 00 000 00</strong> pour discuter de vive voix de votre projet.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form (8 cols) */}
          <div className="lg:col-span-8">
            <Suspense fallback={<div className="p-12 text-center text-slate-400">Chargement du formulaire...</div>}>
              <QuoteForm />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
}

