"use client";

import React from "react";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  Layout,
  Code2,
  Palette,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { ServiceItem } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Layout,
  Code2,
  Palette,
  Cpu,
};

export function ServiceCard({
  service,
  showFullDetails = false,
}: {
  service: ServiceItem;
  showFullDetails?: boolean;
}) {
  const Icon = iconMap[service.iconName] || Globe;

  return (
    <div
      id={service.id}
      className="group relative flex flex-col justify-between rounded-[28px] p-6 sm:p-8 bg-white/70 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-white/10 hover:border-blue-500/40 dark:hover:border-cyan-400/40 shadow-xs hover:shadow-xl transition-all duration-300 backdrop-blur-sm overflow-hidden"
    >
      {/* Background Hover Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      {/* Top Section: Icon, Badge & Title */}
      <div className="relative space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-13 h-13 rounded-[28px] bg-gradient-to-br from-blue-500/10 to-cyan-500/20 dark:from-blue-500/20 dark:to-cyan-400/20 border border-blue-500/20 dark:border-cyan-400/30 text-blue-600 dark:text-cyan-400 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-cyan-500/20">
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-zinc-400 border border-slate-200/60 dark:border-white/10">
            {service.badge}
          </span>
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-zinc-300 mt-2 leading-relaxed">
            {showFullDetails ? service.fullDescription : service.shortDescription}
          </p>
        </div>

        {/* Feature bullets if full details or card preview */}
        <div className="pt-2 space-y-2 border-t border-slate-100 dark:border-white/5">
          {service.features.slice(0, showFullDetails ? 5 : 3).map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
              <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Deliverables section if full details requested */}
        {showFullDetails && (
          <div className="pt-4 mt-2 border-t border-slate-100 dark:border-white/10">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-zinc-200 mb-2">
              Livrables inclus :
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-zinc-400">
              {service.deliverables.map((item, index) => (
                <li key={index} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Bottom Action Link */}
      <div className="relative pt-6 mt-4">
        <Link
          href={`/devis?service=${encodeURIComponent(service.title)}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors group/link"
        >
          <span>Démarrer un projet</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

