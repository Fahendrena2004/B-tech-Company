"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Sliders, Sparkles, Cpu, Headphones, Check } from "lucide-react";

const whyUsPoints = [
  {
    icon: Sliders,
    title: "Solutions sur mesure",
    description:
      "Chaque projet est conçu selon les besoins spécifiques du client. Pas de modèles génériques, mais des architectures adaptées à vos objectifs précis.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Sparkles,
    title: "Design moderne",
    description:
      "Des interfaces modernes, intuitives et professionnelles. Nous soignons chaque détail visuel et ergonomique pour valoriser votre marque.",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Cpu,
    title: "Technologies modernes",
    description:
      "Utilisation de technologies adaptées aux besoins des projets (Next.js, React, Laravel, TypeScript). Des outils stables, pérennes et ultra-rapides.",
    color: "from-blue-600 to-indigo-600",
  },
  {
    icon: Headphones,
    title: "Accompagnement",
    description:
      "Accompagnement du client pendant les différentes étapes du projet. De l'analyse initiale au déploiement et à la maintenance continue.",
    color: "from-indigo-500 to-purple-600",
  },
];

export function WhyUs() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-slate-50/50 dark:bg-zinc-950/40 border-y border-slate-200/60 dark:border-white/5">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] bg-gradient-to-bl from-blue-500/10 to-transparent blur-[80px] rounded-full pointer-events-none" />
      <div 
        className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 to-transparent blur-[100px] pointer-events-none animate-spin" 
        style={{ animationDuration: '50s', borderRadius: '60% 40% 50% 50% / 40% 50% 60% 50%' }} 
      />
      <div className="absolute top-20 left-10 text-cyan-400/30 animate-pulse pointer-events-none">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="absolute bottom-40 right-20 text-blue-400/20 animate-bounce pointer-events-none" style={{ animationDuration: '3s' }}>
        <Sparkles className="w-12 h-12" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/20">
            Engagement & Valeur ajoutée
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Pourquoi choisir <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">B-Tech ?</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300">
            Une approche centrée sur la qualité, la transparence et la performance technologique pour donner vie à vos projets les plus ambitieux.
          </p>
        </div>

        {/* 2-Column Grid with Interactive Points and Real Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: 4 Core Advantages (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyUsPoints.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-[28px] bg-white dark:bg-zinc-900/80 border border-slate-200/80 dark:border-white/10 hover:border-blue-400 dark:hover:border-cyan-500/40 shadow-xs hover:shadow-lg transition-all duration-300 space-y-3"
                >
                  <div className={`w-11 h-11 rounded-[24px] bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-md`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[28px] overflow-hidden p-2 bg-gradient-to-br from-blue-600/20 via-cyan-500/10 to-transparent border border-slate-200 dark:border-white/10 shadow-xl">
              <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden">
                <Image
                  src="/images/Apropos.jpeg"
                  alt="Équipe B-Tech Company analysant des interfaces"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-600/80 backdrop-blur-md mb-2">
                    <Check className="w-3.5 h-3.5" /> Méthodologie Éprouvée
                  </span>
                  <p className="text-sm font-medium text-slate-200">
                    Conception participative et suivi rigoureux de chaque étape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

