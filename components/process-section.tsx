"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Search,
  LayoutTemplate,
  Code2,
  CheckCircle2,
  Rocket,
  Headphones,
  Check,
} from "lucide-react";
import { processSteps } from "@/data/process";

const iconMap: Record<string, React.ElementType> = {
  Search,
  LayoutTemplate,
  Code2,
  CheckCircle2,
  Rocket,
  Headphones,
};

export function ProcessSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background elements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-100 dark:bg-cyan-950/50 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/20">
            Méthodologie & Rigueur
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Notre méthode de <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">travail</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300">
            Un processus en 6 étapes structurées pour mener votre projet du concept initial jusqu&apos;à son succès opérationnel.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {processSteps.map((step, index) => {
            const Icon = iconMap[step.iconName] || Search;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative rounded-2xl p-7 bg-white/80 dark:bg-zinc-900/70 border border-slate-200/80 dark:border-white/10 hover:border-cyan-500/40 dark:hover:border-cyan-400/40 shadow-xs hover:shadow-xl transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
              >
                {/* Step number badge & icon */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black tracking-tight text-blue-600/30 dark:text-cyan-400/30 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      {step.step}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-zinc-800/80 border border-blue-200/60 dark:border-white/10 text-blue-600 dark:text-cyan-400 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-cyan-400/90 mt-1">
                    {step.subtitle}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-zinc-300 mt-3 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bullets */}
                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5 space-y-1.5">
                  {step.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400">
                      <Check className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

