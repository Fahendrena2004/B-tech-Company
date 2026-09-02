import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  User,
  ArrowRight,
} from "lucide-react";
import { teamMembers } from "@/data/team";
import { CTASection } from "@/components/cta-section";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Notre Équipe",
  description:
    "Découvrez la structure et les pôles de compétences de l'équipe B-Tech Company : développement web, mobile, génie logiciel et design graphique.",
};

export default function TeamPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-b from-blue-950/10 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/20">
              <Users className="w-3.5 h-3.5" />
              <span>Talents & Pôles Techniques</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Notre <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Équipe</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
              Une organisation structurée en pôles complémentaires pour mener à bien des projets numériques de haute précision.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-20">
        <div className="max-w-2xl mx-auto mb-10 p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/70 dark:border-cyan-500/20 text-center text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
          <p>
            ℹ️ <strong>Structure préconfigurée :</strong> Les fiches ci-dessous présentent les postes clés et compétences de l&apos;équipe. Les profils individuels seront mis à jour avec les informations nominatives officielles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative rounded-2xl p-6 bg-white/70 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-white/10 hover:border-blue-400 dark:hover:border-cyan-400/40 shadow-xs hover:shadow-xl transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                {/* Photo Placeholder */}
                <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-blue-600/10 via-cyan-500/10 to-indigo-600/10 dark:from-blue-500/20 dark:to-cyan-400/20 border border-blue-200/60 dark:border-white/10 flex flex-col items-center justify-center p-6 text-center mb-5 group-hover:scale-[1.02] transition-transform duration-300 overflow-hidden">
                  <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-zinc-800 text-blue-600 dark:text-cyan-400 flex items-center justify-center shadow-inner mb-2">
                    <User className="w-8 h-8" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                    Photo du membre
                  </span>
                </div>

                {/* Role badge & Info */}
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 dark:bg-zinc-800 text-blue-700 dark:text-cyan-300 border border-blue-100 dark:border-white/10 inline-block mb-2">
                  {member.department}
                </span>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-blue-600 dark:text-cyan-400 mt-0.5">
                  {member.role}
                </p>

                <p className="text-xs text-slate-600 dark:text-zinc-300 mt-3 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Social placeholders */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Réseaux pros</span>
                <div className="flex items-center gap-2">
                  <a
                    href={member.linkedinUrl || "https://linkedin.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Profil LinkedIn"
                    className="p-1.5 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={member.githubUrl || "https://github.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Profil GitHub"
                    className="p-1.5 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recruitment / Collaboration banner */}
      <section className="py-16 bg-slate-50/60 dark:bg-zinc-950/40 border-y border-slate-200/60 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Vous souhaitez rejoindre l&apos;aventure B-Tech ?
          </h2>
          <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
            Nous sommes toujours ouverts aux talents passionnés par le code, l&apos;ingénierie et le design moderne. Envoyez-nous votre candidature spontanée.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 transition-colors"
            >
              <span>Contacter l&apos;équipe</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}

