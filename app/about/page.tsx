import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  Target,
  Eye,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Zap,
  Code2,
} from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { WhyUs } from "@/components/why-us";

export const metadata: Metadata = {
  title: "À Propos",
  description:
    "Découvrez B-Tech Company, entreprise spécialisée dans les solutions numériques, le développement web et mobile, le génie logiciel et le design graphique.",
};

const values = [
  {
    icon: Lightbulb,
    title: "Innovation Technologique",
    description:
      "Nous adoptons en continu les meilleures technologies modernes (Next.js, TypeScript, Laravel) pour fournir des produits performants et d'actualité.",
  },
  {
    icon: ShieldCheck,
    title: "Rigueur & Fiabilité",
    description:
      "La qualité du code, la sécurité des données et le respect scrupuleux des délais sont au cœur de tous nos engagements professionnels.",
  },
  {
    icon: HeartHandshake,
    title: "Accompagnement Client",
    description:
      "Nous travaillons en étroite collaboration avec chaque client pour comprendre ses spécificités et lui proposer des solutions sur-mesure.",
  },
  {
    icon: Zap,
    title: "Excellence & Performance",
    description:
      "Des temps de chargement ultra-rapides, une ergonomie soignée et une expérience utilisateur sans friction sur tous les supports.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Header */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-b from-blue-950/10 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/20">
              <Code2 className="w-3.5 h-3.5" />
              <span>Qui sommes-nous ?</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              À propos de <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">B-Tech Company</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
              Une entreprise spécialisée dans le domaine numérique, dédiée à la conception de solutions digitales sur mesure, performantes et pérennes.
            </p>
          </div>
        </div>
      </section>

      {/* Presentation & Story Section */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Donner vie à votre transition digitale avec expertise et rigueur
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
            </div>

            <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
              <strong>B-Tech Company</strong> est née d&apos;une passion partagée pour la technologie, le développement logiciel et le design graphique. Notre mission est d&apos;accompagner les entreprises, startups et particuliers dans la concrétisation de leurs projets numériques.
            </p>

            <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
              Que vous ayez besoin d&apos;une application web complexe, d&apos;une application mobile réactive, d&apos;un logiciel de gestion personnalisé ou d&apos;une identité visuelle complète, notre équipe met en œuvre des méthodologies éprouvées et les technologies les plus modernes pour garantir un résultat professionnel.
            </p>

            {/* Core Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-[28px] bg-white dark:bg-zinc-900/80 border border-slate-200/80 dark:border-white/10 space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-blue-600 dark:text-cyan-400 font-bold">
                  <Target className="w-5 h-5" />
                  <span>Notre Mission</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  Fournir des solutions numériques de haute facture qui résolvent des problématiques concrètes et génèrent de la valeur mesurable.
                </p>
              </div>

              <div className="p-5 rounded-[28px] bg-white dark:bg-zinc-900/80 border border-slate-200/80 dark:border-white/10 space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-blue-600 dark:text-cyan-400 font-bold">
                  <Eye className="w-5 h-5" />
                  <span>Notre Vision</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  Devenir un partenaire technologique de référence, reconnu pour sa fiabilité, sa créativité et son excellence opérationnelle.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[32px] overflow-hidden p-2 bg-gradient-to-br from-blue-600/30 to-cyan-500/20 border border-slate-200 dark:border-white/10 shadow-2xl">
              <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden">
                <Image
                  src="/images/Apropos.jpeg"
                  alt="L'équipe de B-Tech Company au travail"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-slate-50/60 dark:bg-zinc-950/40 border-y border-slate-200/60 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Nos Valeurs Fondamentales
            </h2>
            <p className="text-base text-slate-600 dark:text-zinc-300">
              Les principes qui guident chacune de nos décisions et chacune de nos lignes de code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="p-6 rounded-[28px] bg-white dark:bg-zinc-900/80 border border-slate-200/80 dark:border-white/10 space-y-3 shadow-xs hover:border-blue-400 dark:hover:border-cyan-400/40 transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-[24px] bg-blue-50 dark:bg-zinc-800 text-blue-600 dark:text-cyan-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pourquoi B-Tech Component */}
      <WhyUs />

      {/* CTA */}
      <CTASection
        title="Vous souhaitez collaborer avec B-Tech Company ?"
        subtitle="Discutons de vos projets et découvrons ensemble comment nos solutions numériques peuvent accélérer votre croissance."
      />
    </div>
  );
}

