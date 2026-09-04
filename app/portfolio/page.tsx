"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FolderGit2,
  Clock,
  ArrowRight,
  Sparkles,
  Eye,
  X,
  CheckCircle2,
  Package,
  TrendingUp,
  BarChart3,
} from "lucide-react";
import {
  portfolioProjects,
  portfolioCategories,
  ProjectItem,
} from "@/data/projects";
import { CTASection } from "@/components/cta-section";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Tous");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCategoryChange = (cat: string) => {
    setIsLoading(true);
    setActiveCategory(cat);
    setTimeout(() => setIsLoading(false), 250);
  };

  const filteredProjects =
    activeCategory === "Tous"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-b from-blue-950/10 via-transparent to-transparent overflow-hidden">
        {/* Background Ambience */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/20 shadow-xs">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Bento UI & Décoration Éditioriale</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Notre <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-amber-500 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
              Découvrez nos réalisations structurées en **Bento SaaS** pour les logiciels & le web, et en **Editorial UI** pour nos collections d&apos;**Arts de la Table & Décoration**.
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 rounded-[32px] bg-slate-100/90 dark:bg-zinc-900/90 border border-slate-200/80 dark:border-white/10 max-w-2xl mx-auto mb-12 shadow-sm">
          {portfolioCategories.map((cat) => {
            const isActive = activeCategory === cat;
            const isDecoTab = cat === "Décoration & Vaisselle";
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? isDecoTab
                      ? "bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md shadow-orange-500/25"
                      : "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                    : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid (Bento UI & Editorial Cards) */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-96 skeleton-loader" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredProjects.map((project) => {
              const isDeco = project.category === "Décoration & Vaisselle";
              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`group relative cursor-pointer transition-all duration-300 ${
                    isDeco ? "bento-card-editorial" : "bento-card"
                  }`}
                >
                  <div>
                    {/* Visual Thumbnail Frame */}
                    <div
                      className={`relative ${
                        isDeco ? "aspect-[4/5]" : "aspect-video"
                      } rounded-[22px] bg-gradient-to-br ${project.gradient} border border-slate-200/60 dark:border-white/5 flex flex-col items-center justify-center text-center mb-5 overflow-hidden shadow-inner group-hover:scale-[1.01] transition-transform duration-500`}
                    >
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Floating KPI Badge top-right */}
                      {project.kpiMetric && (
                        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold flex items-center gap-1.5 shadow-md">
                          {isDeco ? (
                            <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                          ) : (
                            <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
                          )}
                          <span>{project.kpiMetric}</span>
                        </div>
                      )}

                      {/* Hover Overlay with Zoom Eye */}
                      <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="px-4 py-2 rounded-full bg-white/90 dark:bg-zinc-900/90 text-slate-900 dark:text-white font-bold text-xs flex items-center gap-2 shadow-lg">
                          <Eye className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                          <span>Aperçu & Spécifications</span>
                        </div>
                      </div>
                    </div>

                    {/* Category & Status */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span
                        className={`text-[11px] font-bold uppercase px-3 py-1 rounded-full border ${
                          isDeco
                            ? "bg-orange-50 dark:bg-amber-950/50 text-orange-800 dark:text-amber-300 border-orange-200 dark:border-amber-700/50"
                            : "bg-blue-50 dark:bg-blue-950/50 text-blue-800 dark:text-cyan-300 border-blue-200 dark:border-cyan-500/30"
                        }`}
                      >
                        {project.category}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-zinc-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{project.status}</span>
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p
                      className={`text-xs font-semibold mt-1 ${
                        isDeco
                          ? "text-orange-700 dark:text-amber-400"
                          : "text-blue-700 dark:text-cyan-400"
                      }`}
                    >
                      {project.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 mt-3 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Materials highlight if Decor */}
                    {isDeco && project.materials && (
                      <div className="mt-3 pt-3 border-t border-orange-100 dark:border-amber-900/30 flex items-center gap-2 text-xs text-orange-900 dark:text-amber-300 font-medium">
                        <Package className="w-4 h-4 text-orange-600 shrink-0" />
                        <span>Matériaux : {project.materials.join(", ")}</span>
                      </div>
                    )}

                    {/* Features */}
                    <div className="pt-3 mt-3 border-t border-slate-100 dark:border-white/5 space-y-1">
                      {project.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="text-xs text-slate-600 dark:text-zinc-300 flex items-center gap-1.5"
                        >
                          <CheckCircle2
                            className={`w-3.5 h-3.5 shrink-0 ${
                              isDeco ? "text-orange-600" : "text-cyan-500"
                            }`}
                          />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies / Tools & Action CTA */}
                  <div className="pt-5 mt-4 border-t border-slate-100 dark:border-white/5">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 border border-slate-200/60 dark:border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className={`w-full ${
                        isDeco ? "btn-modern-orange" : "btn-modern-primary"
                      } px-4 py-3 rounded-full text-xs text-white shadow-md flex items-center justify-center gap-2`}
                    >
                      <span>Consulter les détails</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Project Lightbox Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[32px] bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/15 p-6 sm:p-8 shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-video sm:aspect-[16/9] rounded-[24px] overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg">
              <Image
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Modal Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-cyan-300">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-slate-600 dark:text-zinc-400 font-medium">
                  Statut : {selectedProject.status}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {selectedProject.title}
              </h2>
              <p className="text-sm font-semibold text-blue-700 dark:text-cyan-400">
                {selectedProject.tagline}
              </p>

              <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Materials detail */}
              {selectedProject.materials && (
                <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/40">
                  <p className="text-xs font-bold uppercase text-amber-900 dark:text-amber-300 mb-1">
                    Matériaux & Savoir-faire d&apos;art
                  </p>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-zinc-200">
                    {selectedProject.materials.join(" • ")}
                  </p>
                </div>
              )}

              {/* Features List */}
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-zinc-200">
                  Caractéristiques principales :
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-slate-700 dark:text-zinc-300 font-medium"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Action */}
              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100 dark:border-white/10">
                <Link
                  href="/devis"
                  onClick={() => setSelectedProject(null)}
                  className="btn-modern-primary px-7 py-3 rounded-full text-xs text-white flex items-center gap-2"
                >
                  <span>Commander un projet similaire</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <CTASection
        title="Vous souhaitez donner vie à un projet sur mesure ?"
        subtitle="Qu'il s'agisse d'une application numérique complexe ou d'un projet d'arts de la table & décoration, nos experts vous accompagnent."
      />
    </div>
  );
}
