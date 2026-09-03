"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Sparkles,
  Clock,
  Search,
  Tag,
  CheckCircle2,
} from "lucide-react";
import { CTASection } from "@/components/cta-section";

const previewArticles = [
  {
    id: "nextjs-16-turbopack",
    title: "Pourquoi Next.js et Turbopack révolutionnent le développement Web moderne",
    category: "Développement Web",
    readTime: "5 min de lecture",
    date: "Prochainement",
    tags: ["Next.js", "Turbopack", "Performance", "React"],
    summary:
      "Analyse approfondie des performances de compilation et du Server-Side Rendering (SSR) pour créer des applications web ultra-rapides et optimisées pour le SEO.",
    gradient: "from-blue-600/20 via-cyan-500/10 to-indigo-600/20",
  },
  {
    id: "flutter-vs-react-native",
    title: "Applications Mobiles en 2026 : Architecture cross-platform vs native",
    category: "Développement Mobile",
    readTime: "7 min de lecture",
    date: "Prochainement",
    tags: ["Mobile", "Flutter", "iOS", "Android"],
    summary:
      "Comment choisir la bonne pile technologique pour votre application mobile professionnelle sans compromis sur la fluidité et l'expérience utilisateur.",
    gradient: "from-cyan-500/20 via-blue-600/10 to-emerald-500/20",
  },
  {
    id: "logiciels-metiers-pme",
    title: "Digitalisation & Logiciels Métiers : Automatiser pour multiplier sa rentabilité",
    category: "Solutions Numériques",
    readTime: "6 min de lecture",
    date: "Prochainement",
    tags: ["ERP", "Gestion", "Automatisation", "Productivité"],
    summary:
      "Pourquoi abandonner les fichiers Excel manuels au profit de dashboards sur-mesure connectés transforme la rentabilité des PME modernes.",
    gradient: "from-indigo-600/20 via-purple-500/10 to-blue-500/20",
  },
  {
    id: "ui-ux-design-conversions",
    title: "Design Graphique & UI/UX : L'impact direct de la clarté visuelle sur vos ventes",
    category: "Design & UX",
    readTime: "4 min de lecture",
    date: "Prochainement",
    tags: ["UI/UX", "Figma", "Branding", "Conversion"],
    summary:
      "Les principes fondamentaux de hiérarchie visuelle, contrastes et micro-interactions qui transforment de simples visiteurs en clients fidèles.",
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
  },
];

const categories = [
  "Tous",
  "Développement Web",
  "Développement Mobile",
  "Solutions Numériques",
  "Design & UX",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const filteredArticles = previewArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === "Tous" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-b from-blue-950/10 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/20">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Publications & Ressources</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Blog & <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Actualités Tech</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
              Explorez nos analyses technologiques, tutoriels pratiques et retours d&apos;expérience sur le développement moderne.
            </p>
          </div>
        </div>
      </section>

      {/* Main Search & Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
          {/* Categories Pill Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-white dark:bg-zinc-800/80 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300 hover:border-blue-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un sujet..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-800/80 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-cyan-400"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="group rounded-3xl p-6 sm:p-8 bg-white dark:bg-zinc-900/80 border border-slate-200/80 dark:border-white/10 hover:border-blue-400 dark:hover:border-cyan-400/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Badge header */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-100 dark:border-cyan-500/20">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-zinc-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
                  {article.title}
                </h2>

                {/* Summary */}
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  {article.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400"
                    >
                      <Tag className="w-2.5 h-2.5 text-cyan-500" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer status */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs">
                <span className="text-amber-600 dark:text-amber-400 font-semibold inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  Rédaction en cours
                </span>
                <span className="text-slate-400 dark:text-zinc-500 font-medium">
                  B-Tech Insights
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter / Notification Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-16">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-blue-900/40 via-slate-900/60 to-cyan-950/40 border border-blue-500/20 dark:border-cyan-500/20 backdrop-blur-xl text-center space-y-5 shadow-2xl">
          <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-cyan-400/30 text-cyan-400 flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Restez informé de nos futures publications
            </h3>
            <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
              Recevez en avant-première nos tutoriels de développement, analyses comparatives et retours d&apos;expérience technologiques.
            </p>
          </div>

          {subscribed ? (
            <div className="inline-flex items-center gap-2 p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-semibold">
              <CheckCircle2 className="w-5 h-5" />
              <span>Merci ! Vous recevrez une notification lors de la parution de nos premiers articles.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto">
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Votre adresse email professionnelle..."
                className="w-full px-4 py-3 rounded-xl border border-white/15 bg-white/10 text-white text-sm placeholder:text-slate-400 focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-md shadow-cyan-400/20 whitespace-nowrap cursor-pointer"
              >
                S&apos;inscrire
              </button>
            </form>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
