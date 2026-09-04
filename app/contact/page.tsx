import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { contactData } from "@/data/contact";
import { FacebookIcon, LinkedinIcon, GithubIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez B-Tech Company pour échanger sur vos projets de développement web, d'applications mobiles, de logiciels et de création graphique.",
};

export default function ContactPage() {
  const cleanPhone = contactData.whatsapp.replace(/[^0-9]/g, "");

  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-b from-blue-950/10 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/20">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Restons en contact</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Contactez <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">B-Tech Company</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
              Une question, un projet ou une demande d&apos;information ? Remplissez le formulaire ci-dessous ou utilisez nos coordonnées directes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Image (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Nos Coordonnées
              </h2>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                Notre équipe est disponible pour vous orienter et planifier un échange technique ou commercial.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              {/* Email card */}
              <a
                href={`mailto:${contactData.email}`}
                className="p-5 rounded-2xl bg-white dark:bg-zinc-900/80 border border-slate-200/80 dark:border-white/10 flex items-start gap-4 shadow-xs hover:border-blue-500/40 dark:hover:border-cyan-400/40 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-zinc-800 text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                      Email
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                    {contactData.email}
                  </p>
                  <span className="text-[11px] text-slate-400">
                    Réponse sous 24h ouvrées
                  </span>
                </div>
              </a>

              {/* Phone & WhatsApp card */}
              <a
                href={`https://wa.me/${cleanPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white dark:bg-zinc-900/80 border border-slate-200/80 dark:border-white/10 flex items-start gap-4 shadow-xs hover:border-blue-500/40 dark:hover:border-cyan-400/40 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-zinc-800 text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                      WhatsApp Direct
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                    {contactData.whatsapp}
                  </p>
                  <span className="text-[11px] text-slate-400">
                    Cliquez pour discuter directement sur WhatsApp
                  </span>
                </div>
              </a>

              {/* Phone call card */}
              <a
                href={`tel:${contactData.phone.replace(/\s+/g, "")}`}
                className="p-5 rounded-2xl bg-white dark:bg-zinc-900/80 border border-slate-200/80 dark:border-white/10 flex items-start gap-4 shadow-xs hover:border-blue-500/40 dark:hover:border-cyan-400/40 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-zinc-800 text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                      Appel Direct
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                    {contactData.phone}
                  </p>
                  <span className="text-[11px] text-slate-400">
                    Disponible du Lundi au Vendredi
                  </span>
                </div>
              </a>

              {/* Location card */}
              <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900/80 border border-slate-200/80 dark:border-white/10 flex items-start gap-4 shadow-xs">
                <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-zinc-800 text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                    Localisation
                  </h3>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">
                    {contactData.address}
                  </p>
                </div>
              </div>

              {/* Opening hours */}
              <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900/80 border border-slate-200/80 dark:border-white/10 flex items-start gap-4 shadow-xs">
                <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-zinc-800 text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                    Horaires d&apos;ouverture
                  </h3>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">
                    {contactData.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Social media links */}
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900/80 border border-slate-200/80 dark:border-white/10 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
                Suivez-nous sur les réseaux
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href={contactData.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-cyan-400 text-xs font-medium transition-colors"
                >
                  <FacebookIcon className="w-4 h-4 text-blue-600" />
                  <span>Facebook</span>
                </a>
                <a
                  href={contactData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-cyan-400 text-xs font-medium transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-500" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={contactData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-cyan-400 text-xs font-medium transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-slate-800 dark:text-white" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Support Representative Visual */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/contact.jpeg"
                  alt="Service d'écoute et d'accompagnement B-Tech"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
