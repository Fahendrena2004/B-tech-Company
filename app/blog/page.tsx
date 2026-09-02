import React from "react";
import type { Metadata } from "next";
import {
  BookOpen,
  Sparkles,
  Newspaper,
  Terminal,
  Lightbulb,
  BellRing,
} from "lucide-react";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Blog & Actualités",
  description:
    "Espace blog et actualités de B-Tech Company : retrouvez prochainement nos articles technologiques, tutoriels de développement, conseils numériques et actualités de l'entreprise.",
};

const futureCategories = [
  {
    icon: Lightbulb,
    title: "Conseils Numériques",
    description: "Guides pratiques pour optimiser la présence en ligne et la productivité des entreprises.",
  },
  {
    icon: Terminal,
    title: "Tutoriels & Développement",
    description: "Bonnes pratiques sur Next.js, TypeScript, Laravel, Tailwind CSS et architectures logicielles.",
  },
  {
    icon: Newspaper,
    title: "Actualités B-Tech",
    description: "Suivez nos nouveaux déploiements, mises à jour et évolutions de l'entreprise.",
  },
  {
    icon: Sparkles,
    title: "Tendances Technologiques",
    description: "Analyses des innovations de rupture dans le web, le mobile et le design UI/UX.",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-b from-blue-950/10 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/20">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Publications & Ressources</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Blog & <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Actualités</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
              Le point de rendez-vous pour découvrir nos réflexions technologiques, retours d&apos;expérience et actualités.
            </p>
          </div>
        </div>
      </section>

      {/* Clean "Coming Soon" State */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-16">
        <div className="rounded-3xl p-8 sm:p-12 lg:p-16 bg-white/70 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-white/10 backdrop-blur-md text-center max-w-3xl mx-auto shadow-sm space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 border border-cyan-400/30 text-blue-600 dark:text-cyan-400 flex items-center justify-center mx-auto shadow-md">
            <BellRing className="w-8 h-8 animate-bounce" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Nos articles arrivent bientôt.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 max-w-xl mx-auto leading-relaxed">
              Nous préparons une série d&apos;articles techniques et d&apos;analyses pratiques pour vous aider à mieux appréhender les technologies web et mobiles.
            </p>
          </div>

          {/* Quick email notification simulator box */}
          <div className="pt-4 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <input
                type="email"
                placeholder="Votre adresse email..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/15 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:border-blue-500 dark:focus:border-cyan-400"
              />
              <button
                type="button"
                className="w-full sm:w-auto px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500 transition-colors whitespace-nowrap"
              >
                M&apos;avertir
              </button>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              Aucun spam, seulement nos meilleures publications techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Planned Categories Preview */}
      <section className="py-16 bg-slate-50/60 dark:bg-zinc-950/40 border-y border-slate-200/60 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Thématiques prévues au programme
            </h2>
            <p className="text-sm text-slate-600 dark:text-zinc-400">
              L&apos;architecture du blog a été pensée pour couvrir l&apos;ensemble de nos domaines d&apos;expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {futureCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="p-6 rounded-2xl bg-white dark:bg-zinc-900/80 border border-slate-200/80 dark:border-white/10 space-y-3 shadow-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-zinc-800 text-blue-600 dark:text-cyan-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}

