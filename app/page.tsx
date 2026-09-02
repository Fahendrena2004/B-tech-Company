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

      {/* 2. Services Section */}
      <section className="relative py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nos Domaines d&apos;Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Nos <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300">
            B-Tech Company propose un éventail complet de prestations technologiques pour répondre aux exigences numériques des entreprises et particuliers.
          </p>
        </div>

        {/* Services Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-zinc-900 border border-blue-200 dark:border-white/10 hover:bg-blue-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <span>Voir le détail de tous nos services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 3. Pourquoi B-Tech Section */}
      <WhyUs />

      {/* 4. Quick Showcase / Brand Identity highlight */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl p-8 sm:p-12 bg-white/60 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-white/10 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 relative aspect-video sm:aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-md">
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
