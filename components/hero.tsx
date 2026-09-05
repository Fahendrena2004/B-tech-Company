"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowRight,
  Layers,
  Code2,
  ShieldCheck,
  Zap,
  Sparkles,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 lg:py-24 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent dark:via-blue-950/20">
      {/* Background Glowing Orbs */}

      {/* Ambient gradient circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/20 to-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions (7 cols on lg) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">
            {/* Top Pill / Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200/80 dark:border-cyan-500/30 bg-blue-50/80 dark:bg-blue-950/40 text-blue-700 dark:text-cyan-300 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-xs"
            >
              <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-ping" />
              <span>Entreprise Technologique & Digitale</span>
              <span className="text-slate-300 dark:text-zinc-600">•</span>
              <span className="text-slate-600 dark:text-zinc-300 font-normal">
                B-Tech Company
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]"
            >
              Transformons vos idées en{" "}
              <span className="relative inline-block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-300 bg-clip-text text-transparent">
                solutions numériques.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 dark:text-zinc-300 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-normal"
            >
              B-Tech Company conçoit des solutions digitales modernes,
              performantes et adaptées aux besoins des entreprises et des
              particuliers.
            </motion.p>

            {/* Call to Actions Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-base"
              >
                <span>Découvrir nos services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-zinc-100 bg-white dark:bg-zinc-900/90 border border-slate-200 dark:border-white/15 hover:bg-slate-50 dark:hover:bg-zinc-800 hover:border-slate-300 dark:hover:border-white/30 shadow-xs transition-all duration-200 text-base"
              >
                <span>Nous contacter</span>
              </Link>
            </motion.div>

            {/* Key Value Micro-Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-200/80 dark:border-white/10 max-w-lg mx-auto lg:mx-0 text-left"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                <Zap className="w-4 h-4 text-cyan-500 shrink-0" />
                <span className="font-medium">Haute Performance</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                <Layers className="w-4 h-4 text-blue-500 shrink-0" />
                <span className="font-medium">Sur Mesure</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                <ShieldCheck className="w-4 h-4 text-indigo-500 shrink-0" />
                <span className="font-medium">Accompagnement</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Tech Showcase (5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center mt-10 lg:mt-0"
          >
            {/* Halo de lumière radiale dorée */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.15),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_70%)] blur-2xl pointer-events-none" />

            {/* Cercle concentrique subtil */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square rounded-full border border-yellow-500/10 dark:border-cyan-500/10 pointer-events-none" />

            {/* Forme d'arrière-plan organique (nuage) en bas à gauche */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-slate-100 dark:bg-white/5 rounded-full blur-[80px] pointer-events-none" />

            {/* Arbre en pointillés animés (effets d'orbite) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] sm:w-[130%] aspect-square pointer-events-none opacity-40 dark:opacity-60 flex items-center justify-center animate-[spin_60s_linear_infinite]">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor">
                <path
                  d="M50 90 V70 M50 70 C30 70 20 60 20 45 C20 30 35 25 50 10 C65 25 80 30 80 45 C80 60 70 70 50 70"
                  className="text-blue-400 dark:text-cyan-500 stroke-[0.5]"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    strokeDasharray: "4 6",
                    animation: "dash 20s linear infinite"
                  }}
                />
              </svg>
            </div>

            {/* Main Visual Image - Photo flottante */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-sm aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            >
              <Image
                src="/images/Acceuil.jpeg"
                alt="B-Tech Company - Solutions Numériques"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Badge "Pilule" Flottant */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute bottom-6 -left-6 sm:-left-12 z-20 px-6 py-3.5 rounded-full bg-white text-slate-900 shadow-2xl flex items-center gap-3"
            >
              <div className="text-orange-500">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm">
                Joie d&apos;apprendre
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

