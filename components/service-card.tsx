"use client";

import React from "react";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  Cloud,
  Palette,
  Video,
  ArrowRight,
} from "lucide-react";
import { ServiceItem } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Cloud,
  Palette,
  Video,
};

type AccentStyle = {
  iconBg: string;
  iconText: string;
  badge: string;
  linkText: string;
};

const accentMap: Record<string, AccentStyle> = {
  blue: {
    iconBg: "bg-blue-500/10 dark:bg-blue-500/15 border-blue-400/25",
    iconText: "text-blue-600 dark:text-cyan-400",
    badge:
      "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-cyan-300 border-blue-200 dark:border-cyan-500/25",
    linkText: "text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300",
  },
  cyan: {
    iconBg: "bg-cyan-500/10 dark:bg-cyan-500/15 border-cyan-400/25",
    iconText: "text-cyan-600 dark:text-cyan-300",
    badge:
      "bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-500/25",
    linkText: "text-cyan-600 dark:text-cyan-300 hover:text-cyan-700 dark:hover:text-cyan-200",
  },
  sky: {
    iconBg: "bg-sky-500/10 dark:bg-sky-500/15 border-sky-400/25",
    iconText: "text-sky-600 dark:text-sky-400",
    badge:
      "bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-500/25",
    linkText: "text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300",
  },
  purple: {
    iconBg: "bg-violet-500/10 dark:bg-violet-500/15 border-violet-400/25",
    iconText: "text-violet-600 dark:text-violet-400",
    badge:
      "bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-500/25",
    linkText: "text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300",
  },
  indigo: {
    iconBg: "bg-indigo-500/10 dark:bg-indigo-500/15 border-indigo-400/25",
    iconText: "text-indigo-600 dark:text-indigo-400",
    badge:
      "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/25",
    linkText: "text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300",
  },
};

export function ServiceCard({
  service,
}: {
  service: ServiceItem;
  showFullDetails?: boolean;
}) {
  const Icon = iconMap[service.iconName] ?? Globe;
  const accent = accentMap[service.accentColor] ?? accentMap.blue;

  return (
    <div
      id={service.id}
      className="group relative flex flex-row items-center gap-6 sm:gap-7
        rounded-2xl p-7 sm:p-8
        bg-white/80 dark:bg-white/[0.04]
        border border-slate-200/80 dark:border-white/[0.08]
        hover:border-slate-300 dark:hover:border-white/[0.2]
        shadow-sm hover:shadow-xl
        transition-all duration-300 backdrop-blur-sm h-full"
    >
      {/* ── ICON (gauche, centré verticalement) ── */}
      <div
        className={`shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border flex items-center justify-center
          ${accent.iconBg} ${accent.iconText}
          transition-transform duration-300 group-hover:scale-105 shadow-xs`}
      >
        <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
      </div>

      {/* ── CONTENT (droite) ── */}
      <div className="flex flex-col min-w-0 gap-2 flex-1 justify-center">
        {/* Badge */}
        <span
          className={`self-start text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full border ${accent.badge}`}
        >
          {service.badge}
        </span>

        {/* Titre */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
          {service.title}
        </h3>

        {/* Description courte */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Footer Link redirige vers Contact / Devis */}
        <div className="pt-1">
          <Link
            href={`/contact?service=${encodeURIComponent(service.title)}`}
            className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold ${accent.linkText} transition-colors group/link`}
          >
            <span>Nous contacter</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
