"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FolderGit2,
  Clock,
  ArrowRight,
  Layers,
} from "lucide-react";
import {
  portfolioProjects,
  portfolioCategories,
} from "@/data/projects";
import { CTASection } from "@/components/cta-section";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Tous");

  const filteredProjects =
    activeCategory === "Tous"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-b from-blue-950/10 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/20">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Réalisations & Projets</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Notre <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
              Explorez les types de solutions que nous développons. Notre espace portfolio est prêt à accueillir nos prochaines réalisations officielles.
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-100/80 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-white/10 max-w-md mx-auto mb-12">
          {portfolioCategories.map((cat) => {
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

        {/* Informative Notice Badge */}
        <div className="max-w-2xl mx-auto mb-10 p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/70 dark:border-cyan-500/20 text-center text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
          <p>
            ✨ <strong>Espace de démonstration :</strong> Cette section est configurée pour recevoir les projets et études de cas réels de B-Tech Company au fur et à mesure de leur déploiement.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl p-6 bg-white/70 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-white/10 hover:border-blue-400 dark:hover:border-cyan-400/40 shadow-xs hover:shadow-xl transition-all duration-300 backdrop-blur-sm flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Visual Thumbnail Placeholder */}
                <div
                  className={`relative aspect-video rounded-xl bg-gradient-to-br ${project.gradient} border border-slate-200/60 dark:border-white/5 flex flex-col items-center justify-center p-6 text-center mb-5 overflow-hidden`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md flex items-center justify-center text-blue-600 dark:text-cyan-400 mb-3 shadow-md">
                    <Layers className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    {project.status}
                  </span>
                  <span className="text-[11px] text-slate-600 dark:text-zinc-300 mt-0.5">
                    Structure de projet prête
                  </span>
                </div>

                {/* Category & Status */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-zinc-800 text-blue-700 dark:text-cyan-300 border border-blue-100 dark:border-white/10">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-400 dark:text-zinc-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{project.status}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-blue-600 dark:text-cyan-400 mt-1">
                  {project.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 mt-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="pt-3 mt-3 border-t border-slate-100 dark:border-white/5 space-y-1">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="text-xs text-slate-500 dark:text-zinc-400 flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & CTA */}
              <div className="pt-5 mt-4 border-t border-slate-100 dark:border-white/5">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href="/devis"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-800 dark:text-zinc-200 bg-slate-100 dark:bg-zinc-800/80 hover:bg-blue-600 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-slate-950 transition-colors"
                >
                  <span>Créer un projet similaire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Vous avez un projet en tête ?"
        subtitle="Soyez parmi les premières entreprises à figurer dans nos réalisations phares !"
      />
    </div>
  );
}

