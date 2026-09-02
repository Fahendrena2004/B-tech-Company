"use client";

import React, { useState } from "react";
import {
  Zap,
  Code,
  FileCode2,
  Braces,
  Paintbrush,
  Server,
  Terminal,
  Database,
  Palette,
  GitBranch,
  Sparkles,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import { technologiesData, techCategories } from "@/data/technologies";
import { CTASection } from "@/components/cta-section";
import { GithubIcon } from "@/components/icons";

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Code,
  FileCode2,
  Braces,
  Paintbrush,
  Server,
  Terminal,
  Database,
  Palette,
  GitBranch,
  Github: GithubIcon,
};

export function TechIconRenderer({ iconName, className = "w-6 h-6" }: { iconName: string; className?: string }) {
  if (iconName === "Github") {
    return <GithubIcon className={className} />;
  }
  const Icon = iconMap[iconName] || Code;
  return <Icon className={className} />;
}

export default function TechnologiesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Tous");

  const filteredTechnologies =
    activeCategory === "Tous"
      ? technologiesData
      : technologiesData.filter((t) => t.category === activeCategory);

  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-b from-blue-950/10 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/20">
              <Cpu className="w-3.5 h-3.5" />
              <span>Stack Technique Maîtrisée</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Nos <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Technologies</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
              Nous sélectionnons rigoureusement des technologies modernes, performantes et pérennes pour garantir la solidité et l&apos;évolutivité de vos projets.
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-100/80 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-white/10 max-w-2xl mx-auto mb-12">
          {techCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-white dark:bg-zinc-800 text-blue-600 dark:text-cyan-400 shadow-sm border border-slate-200/60 dark:border-white/10"
                    : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredTechnologies.map((tech) => (
            <div
              key={tech.name}
              className="p-6 rounded-2xl bg-white/70 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-white/10 hover:border-blue-400 dark:hover:border-cyan-400/40 shadow-xs hover:shadow-lg transition-all duration-300 space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-zinc-800 text-blue-600 dark:text-cyan-400 flex items-center justify-center border border-blue-100 dark:border-white/5">
                    <TechIconRenderer iconName={tech.iconName} />
                  </div>
                  <span className="text-[11px] font-semibold uppercase px-2.5 py-1 rounded-full bg-blue-50 dark:bg-white/5 text-blue-700 dark:text-cyan-300 border border-blue-100 dark:border-white/10">
                    {tech.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {tech.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 mt-2 leading-relaxed">
                  {tech.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-white/5 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {tech.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-slate-50/60 dark:bg-zinc-950/40 border-y border-slate-200/60 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-cyan-400 flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Standards du Marché
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-400">
                Nous exploitons les bibliothèques et frameworks les plus adoptés au monde pour garantir robustesse et pérennité.
              </p>
            </div>

            <div className="p-6 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-cyan-400 flex items-center justify-center mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Sécurité & Performance
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-400">
                Chaque composant est optimisé pour les temps de réponse, la sécurité des flux de données et la compatibilité.
              </p>
            </div>

            <div className="p-6 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-cyan-400 flex items-center justify-center mx-auto">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Code Propre & Scalable
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-400">
                Typage statique TypeScript, architecture MVC Laravel et conventions strictes facilitant les évolutions futures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Un projet avec l'une de ces technologies ?"
        subtitle="Confiez vos développements à une équipe qui maîtrise les outils de son époque."
      />
    </div>
  );
}

