"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowRight,
  Sparkles,
  Layers,
  Code2,
  ShieldCheck,
  Zap,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 lg:py-24 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent dark:via-blue-950/20">
      {/* Ambient gradient circles & Organic Shapes */}
      <div 
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/20 to-indigo-600/10 blur-[100px] sm:blur-[120px] pointer-events-none animate-spin"
        style={{ animationDuration: '30s', borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
      />
      <div 
        className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-amber-500/10 via-orange-500/10 to-blue-500/10 blur-[100px] sm:blur-[120px] pointer-events-none animate-spin"
        style={{ animationDuration: '40s', animationDirection: 'reverse', borderRadius: '40% 60% 60% 40% / 50% 50% 50% 50%' }}
      />
      
      {/* Dashed spinning circles for Tech Vibe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-dashed border-slate-300/30 dark:border-white/5 animate-spin pointer-events-none" style={{ animationDuration: '60s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-dashed border-slate-300/20 dark:border-white/5 animate-spin pointer-events-none" style={{ animationDuration: '45s', animationDirection: 'reverse' }} />

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
                className="w-full sm:w-auto btn-tactile-primary px-8 py-4 rounded-full text-base text-white shadow-lg flex items-center justify-center gap-2.5"
              >
                <span>Découvrir nos services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto btn-tactile-secondary px-8 py-4 rounded-full text-base text-slate-800 dark:text-zinc-100 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/15 flex items-center justify-center gap-2"
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
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Organic Blob Image Container */}
            <div className="relative w-full max-w-[450px] aspect-square group">
              {/* Animated shadow behind blob */}
              <div 
                className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-blue-600 blur-2xl opacity-40 animate-pulse pointer-events-none"
                style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', animationDuration: '4s' }}
              />
              
              <div 
                className="relative w-full h-full overflow-hidden bg-slate-200 dark:bg-zinc-800 animate-spin border-[6px] border-white dark:border-zinc-900 shadow-xl"
                style={{ 
                  animationDuration: '20s', 
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' 
                }}
              >
                {/* We counter-spin the image so it stays upright while the mask spins */}
                <div 
                  className="w-[120%] h-[120%] -mt-[10%] -ml-[10%] animate-spin" 
                  style={{ animationDuration: '20s', animationDirection: 'reverse' }}
                >
                  <Image
                    src="/images/Acceuil.jpeg"
                    alt="Équipe B-Tech Company en plein développement"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 -right-6 p-4 rounded-[28px] bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-slate-200 dark:border-white/15 shadow-2xl flex items-center gap-3 z-10"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-cyan-400 flex items-center justify-center font-black">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    Innovation
                  </p>
                  <p className="text-xs text-slate-500 dark:text-zinc-400">
                    & Créativité
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

