import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { contactData } from "@/data/contact";
import { FacebookIcon, LinkedinIcon, GithubIcon } from "@/components/icons";

export function Footer() {
  const cleanPhone = contactData.whatsapp.replace(/[^0-9]/g, "");

  return (
    <footer className="relative bg-slate-950 text-slate-300 overflow-hidden mt-10">
      {/* Wave shape at top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] sm:h-[120px]"
        >
          <path
            d="M0,0 C300,120 900,120 1200,0 L1200,0 L0,0 Z"
            className="fill-white dark:fill-slate-900"
          ></path>
        </svg>
      </div>

      {/* Background ambient gradient glow */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Brand & Pitch (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-[24px] bg-gradient-to-br from-blue-500/20 to-cyan-400/20 border border-cyan-400/30 flex items-center justify-center p-1">
                <Image
                  src="/images/logoBtechcompany-removebg-preview.png"
                  alt="B-Tech Company Logo"
                  width={36}
                  height={36}
                  className="object-contain w-auto h-auto"
                />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                B-Tech <span className="text-cyan-400">Company</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              B-Tech Company conçoit et développe des solutions numériques modernes,
              performantes et sur-mesure pour propulser les entreprises et les créateurs
              dans l&apos;ère digitale.
            </p>

            {/* Social Icons */}
            <div className="pt-2">
              <div className="flex items-center gap-2">
                <a
                  href={contactData.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook B-Tech Company"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={contactData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn B-Tech Company"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={contactData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub B-Tech Company"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-100">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/technologies"
                  className="text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                >
                  Technologies
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                >
                  Équipe
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-100">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services#developpement-web"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Développement Web
                </Link>
              </li>
              <li>
                <Link
                  href="/services#developpement-mobile"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Développement Mobile
                </Link>
              </li>
              <li>
                <Link
                  href="/services#creation-sites-web"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Création de Sites Web
                </Link>
              </li>
              <li>
                <Link
                  href="/services#developpement-logiciels"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Développement de Logiciels
                </Link>
              </li>
              <li>
                <Link
                  href="/services#design-graphique"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Design Graphique
                </Link>
              </li>
              <li>
                <Link
                  href="/services#solutions-numeriques"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Solutions Numériques
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-100">
              Contact
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li>
                <a
                  href={`mailto:${contactData.email}`}
                  className="flex items-start gap-2.5 hover:text-cyan-400 transition-colors group"
                >
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>{contactData.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactData.phone.replace(/\s+/g, "")}`}
                  className="flex items-start gap-2.5 hover:text-cyan-400 transition-colors group"
                >
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>{contactData.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${cleanPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 hover:text-cyan-400 transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp : {contactData.whatsapp}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{contactData.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Banner with Devis CTA & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 B-Tech Company. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/devis"
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Demander un devis en ligne</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
