"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FolderGit2,
  Globe,
  MessageCircle,
} from "lucide-react";
import {
  portfolioCategories,
  portfolioProjects,
} from "@/data/projects";
import { CTASection } from "@/components/cta-section";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Tous");
  const filteredProjects = activeCategory === "Tous"
    ? portfolioProjects
    : portfolioProjects.filter((project) => project.category === activeCategory);

  return (
    <div className="flex w-full flex-col">
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-950/10 via-transparent to-transparent py-20 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-emerald-500/10 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700 shadow-xs dark:border-cyan-500/20 dark:bg-blue-950/60 dark:text-cyan-300">
              <FolderGit2 className="h-3.5 w-3.5" />
              <span>Réalisations B-Tech Company</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white">
              Notre <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg dark:text-zinc-300">
              Découvrez nos solutions web et logicielles, conçues pour simplifier les opérations métier et développer votre visibilité digitale.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 flex max-w-2xl flex-wrap items-center justify-center gap-2 rounded-[32px] border border-slate-200/80 bg-slate-100/90 p-2 shadow-sm dark:border-white/10 dark:bg-zinc-900/90">
          {portfolioCategories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`cursor-pointer rounded-full px-4 py-2.5 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                    : "text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mb-20 space-y-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/70 hover:shadow-2xl dark:border-white/10 dark:bg-zinc-900/80 dark:hover:border-cyan-400/40"
            >
              <div className="flex flex-col lg:flex-row items-stretch">
                {/* Visual / Screenshot Showcase Column */}
                <div className={`relative w-full lg:w-[48%] shrink-0 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br ${project.gradient} overflow-hidden min-h-[260px] sm:min-h-[320px]`}>
                  {/* Subtle Glows */}
                  <div className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
                  <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-600/20 blur-3xl" />

                  {/* KPI Metric Floating Badge */}
                  {project.kpiMetric && (
                    <div className="absolute right-4 top-4 z-20 rounded-full border border-white/20 bg-slate-950/85 px-3.5 py-1 text-xs font-bold text-white shadow-lg backdrop-blur-md">
                      {project.kpiMetric}
                    </div>
                  )}

                  {/* Browser Mockup Window Frame */}
                  <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-white/20 bg-slate-950 shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-cyan-400/40">
                    {/* Browser Header Bar */}
                    <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/90 px-3.5 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
                        <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
                        <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
                      </div>
                      <div className="flex items-center gap-1.5 rounded-full bg-slate-800/80 px-3 py-0.5 text-[11px] text-zinc-300 border border-white/10">
                        <Globe className="h-3 w-3 text-cyan-400 shrink-0" />
                        <span className="truncate max-w-[160px] font-mono text-[11px]">
                          {project.id}.btech.mg
                        </span>
                      </div>
                      <div className="h-3 w-3 rounded-full bg-white/10" />
                    </div>

                    {/* Screenshot Container - Centered and fully preserved */}
                    <div className="relative aspect-[16/10] w-full bg-slate-950/80 overflow-hidden flex items-center justify-center p-2">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 48vw"
                        className="object-contain object-center rounded-lg p-1 transition-transform duration-700 group-hover:scale-105"
                        priority={project.id === "gestion-scolaire"}
                      />
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="flex flex-1 flex-col p-6 sm:p-8 justify-between">
                  <div>
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-800 dark:border-cyan-500/30 dark:bg-blue-950/50 dark:text-cyan-300">
                        {project.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-zinc-400">
                        <Clock className="h-3.5 w-3.5 text-cyan-500" />
                        {project.status}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-400">
                      {project.title}
                    </h2>
                    <p className="mt-1 text-sm font-semibold text-blue-600 dark:text-cyan-400">
                      {project.tagline}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
                      {project.description}
                    </p>

                    <ul className="mt-5 grid gap-2.5 border-t border-slate-100 pt-4 text-sm text-slate-600 sm:grid-cols-2 dark:border-white/5 dark:text-zinc-300">
                      {project.features.slice(0, 4).map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-5 dark:border-white/5">
                    <p className="mb-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                      Technologies & Outils
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-slate-200/70 bg-slate-100/80 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-zinc-800 dark:text-zinc-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6">
                      <Link
                        href={`/devis?projet=${encodeURIComponent(project.title)}`}
                        className="btn-modern-primary inline-flex items-center gap-2 px-5 py-3 text-xs"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>Discuter du projet</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="Vous souhaitez donner vie à un projet sur mesure ?"
        subtitle="Notre équipe vous accompagne de la réflexion à la mise en ligne de votre solution digitale."
      />
    </div>
  );
}
