import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { ServiceCard } from "@/components/service-card";
import { ProcessSection } from "@/components/process-section";
import { CTASection } from "@/components/cta-section";
import { servicesData } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Découvrez les services numériques proposés par B-Tech Company : Développement Web & Mobile, Création de sites web, Logiciels sur mesure, Design graphique et Solutions digitales.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-b from-blue-950/10 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Savoir-faire & Pôles d&apos;expertise</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Nos <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
              Des prestations sur-mesure conçues pour répondre à vos exigences de performance, de design et de rentabilité.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Detailed Grid */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} showFullDetails={true} />
          ))}
        </div>
      </section>

      {/* Visual Feature Block */}
      <section className="py-16 bg-slate-50/50 dark:bg-zinc-950/40 border-y border-slate-200/60 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-[28px] overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl">
              <Image
                src="/images/services.jpeg"
                alt="Conception et développement de solutions chez B-Tech"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Un accompagnement personnalisé à chaque phase
              </h2>
              <p className="text-slate-600 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
                Chaque prestation fait l&apos;objet d&apos;un cadrage minutieux. Nous nous assurons que les solutions techniques mises en place répondent directement à vos enjeux métiers, avec des garanties de pérennité, d&apos;évolutivité et de sécurité.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-zinc-200 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" />
                  <span>Code propre, documenté et facilement maintenable</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-zinc-200 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" />
                  <span>Respect strict des délais et transparence sur les étapes</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-zinc-200 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" />
                  <span>Support technique et maintenance évolutive continue</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/devis"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-[24px] font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors text-sm shadow-md"
                >
                  <span>Demander un devis pour votre projet</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* CTA */}
      <CTASection
        title="Un besoin spécifique en développement ou design ?"
        subtitle="Nos experts sont à votre disposition pour analyser votre demande et vous proposer la solution optimale."
      />
    </div>
  );
}

