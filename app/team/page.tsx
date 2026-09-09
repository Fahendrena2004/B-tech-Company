import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  User,
  ArrowRight,
  Mail,
  Phone,
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-20 space-y-16">
        {["Équipe Management & Communication", "Équipe Cloud & DevOps", "Équipe Développement & Solutions Digitales"].map((departmentName) => (
          <div key={departmentName}>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-8 text-center border-b border-slate-200 dark:border-white/10 pb-4">
              {departmentName}
            </h2>
            <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
              {teamMembers.filter(m => m.department === departmentName).map((member) => (
                <div
                  key={member.id}
                  className="group relative w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] max-w-xs rounded-2xl bg-white/70 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-white/10 hover:border-blue-400 dark:hover:border-cyan-400/40 shadow-xs hover:shadow-xl transition-all duration-300 backdrop-blur-sm flex flex-col overflow-hidden"
                >
                  <div className="flex flex-col flex-1 items-center pt-5 sm:pt-6">
                    {/* Photo Placeholder */}
                    <div className="group/photo relative h-36 w-36 sm:h-40 sm:w-40 shrink-0 rounded-full bg-gradient-to-br from-blue-600/10 via-cyan-500/10 to-indigo-600/10 dark:from-blue-500/20 dark:to-cyan-400/20 border-2 border-blue-200/60 dark:border-white/10 flex flex-col items-center justify-center text-center overflow-hidden shadow-sm">
                      {/* Default Content */}
                      <div className="flex flex-col items-center justify-center transition-opacity duration-300 group-hover/photo:opacity-0 absolute inset-0">
                        {member.avatarUrl ? (
                          <Image
                            src={member.avatarUrl}
                            alt={`Photo de ${member.name}`}
                            fill
                            sizes="(max-width: 640px) 144px, 160px"
                            className="object-cover group-hover/photo:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <>
                            <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-zinc-800 text-blue-600 dark:text-cyan-400 flex items-center justify-center shadow-inner mb-2">
                              <User className="w-10 h-10" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                              Photo du membre
                            </span>
                          </>
                        )}
                      </div>

                      {/* Hover Overlay Content (Contact Info) */}
                      <div className="absolute inset-0 bg-slate-900/60 flex flex-col items-center justify-center opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300 p-4">
                        <span className="text-white font-bold mb-2">Contact</span>
                        {member.email && (
                          <span className="text-blue-50 text-xs sm:text-sm break-all">{member.email}</span>
                        )}
                        {member.phone && (
                          <span className="text-blue-50 text-sm mt-1">{member.phone}</span>
                        )}
                        <div className="flex gap-3 mt-4">
                          <a href={member.linkedinUrl || "#"} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${member.name}`} className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                            <LinkedinIcon className="w-4 h-4 text-white" />
                          </a>
                          <a href={member.githubUrl || "#"} target="_blank" rel="noopener noreferrer" aria-label={`GitHub de ${member.name}`} className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                            <GithubIcon className="w-4 h-4 text-white" />
                          </a>
                        </div>
                      </div>

                    </div>

                    <div className="p-4 pb-3 flex-1 flex flex-col justify-center">
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white text-center leading-tight">
                        {member.name}
                      </h3>
                    </div>
                  </div>

                  <div className="px-4 py-3 mt-auto border-t border-slate-100 dark:border-white/5 text-center bg-slate-50/50 dark:bg-white/[0.02] space-y-2">
                    <span className="text-xs font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-wide">
                      {member.role}
                    </span>
                    {(member.phone || member.email) && (
                      <div className="flex items-center justify-center gap-2">
                        {member.phone && (
                          <a href={`tel:${member.phone.replace(/\s/g, "")}`} aria-label={`Appeler ${member.name}`} title={member.phone} className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700 transition-colors hover:bg-blue-600 hover:text-white dark:bg-cyan-400/10 dark:text-cyan-300 dark:hover:bg-cyan-400 dark:hover:text-slate-950">
                            <Phone className="h-4 w-4" />
                          </a>
                        )}
                        {member.email && (
                          <a href={`mailto:${member.email}`} aria-label={`Envoyer un e-mail Ã  ${member.name}`} title={member.email} className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700 transition-colors hover:bg-blue-600 hover:text-white dark:bg-cyan-400/10 dark:text-cyan-300 dark:hover:bg-cyan-400 dark:hover:text-slate-950">
                            <Mail className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[24px] font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 transition-colors"
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
