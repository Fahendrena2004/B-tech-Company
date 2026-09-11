import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Hero } from "@/components/hero";
import { ServiceCard } from "@/components/service-card";
import { WhyUs } from "@/components/why-us";
import { ProcessSection } from "@/components/process-section";
import { CTASection } from "@/components/cta-section";
import { servicesData } from "@/data/services";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Services Section — background strip + 2 colonnes + scroll animation */}
      <section className="relative py-24 lg:py-32 w-full overflow-hidden">
        {/* ── Background strip : pleine largeur mais alternatif sur les côtés ── */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-[2%] right-[2%] sm:left-[3%] sm:right-[3%] rounded-3xl
            bg-slate-100/80 dark:bg-white/[0.03]
            border border-slate-200/60 dark:border-white/[0.06]
            backdrop-blur-sm pointer-events-none"
        />

        <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
          {/* En-tête */}
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Nos Domaines d&apos;Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Nos <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">
              B-Tech Company propose un éventail complet de prestations technologiques pour répondre aux exigences numériques des entreprises et particuliers.
            </p>
          </div>

          {/* Grille 2 colonnes avec centrage automatique de la dernière carte si impaire */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {servicesData.map((service, i) => {
              const isLastOdd = i === servicesData.length - 1 && servicesData.length % 2 !== 0;
              return (
                <div
                  key={service.id}
                  className={isLastOdd ? "md:col-span-2 md:max-w-xl md:mx-auto w-full" : "w-full"}
                >
                  <ServiceCard service={service} />
                </div>
              );
            })}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-white/5 border border-blue-200 dark:border-white/10 hover:bg-blue-100 dark:hover:bg-white/10 transition-colors shadow-sm"
            >
              <span>Voir tous nos services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* 3. Pourquoi B-Tech Section */}
      <WhyUs />

      {/* 4. Quick Showcase / Brand Identity highlight */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-[32px] p-8 sm:p-12 bg-white/60 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-white/10 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 relative aspect-video sm:aspect-square lg:aspect-[4/3] rounded-[28px] overflow-hidden border border-slate-200 dark:border-white/10 shadow-md">
              <Image
                src="/images/services.jpeg"
                alt="Conception graphique et applications chez B-Tech"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400">
                Identité & Vision
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Une synergie entre précision technique et créativité visuelle
              </h3>
              <p className="text-slate-600 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
                Chez B-Tech Company, nous combinons le meilleur de l&apos;ingénierie logicielle (Next.js, Laravel, architecture propre) avec un sens aigu du design graphique et de l&apos;ergonomie utilisateur. Chaque projet bénéficie d&apos;une attention personnalisée pour maximiser son impact.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-cyan-400 hover:underline"
                >
                  <span>En savoir plus sur notre entreprise</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/technologies"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                >
                  <span>Découvrir notre stack technologique</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process Section (Notre méthode de travail) */}
      <ProcessSection />

      {/* 6. CTA Section */}
      <CTASection />
    </div>
  );
}
