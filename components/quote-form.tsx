"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Calendar,
  Wallet,
  MessageCircle,
} from "lucide-react";
import { contactData } from "@/data/contact";

interface QuoteState {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  description: string;
  budgetRange: string;
  deadline: string;
  honeypot: string;
}

const projectOptions = [
  "Site Web",
  "Application Web",
  "Application Mobile",
  "Logiciel sur mesure",
  "Design Graphique",
  "E-commerce",
  "Autre solution numérique",
];

const budgetOptions = [
  "Non défini / À discuter",
  "< 1 000 000 Ar",
  "1 000 000 Ar - 3 000 000 Ar",
  "3 000 000 Ar - 7 000 000 Ar",
  "> 7 000 000 Ar",
  "Budget International (€ / $)",
];

const deadlineOptions = [
  "Urgent (< 2 semaines)",
  "1 mois",
  "2 à 3 mois",
  "Plus de 3 mois",
  "Flexible",
];

const initialQuoteState: QuoteState = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  projectType: "Application Web",
  description: "",
  budgetRange: "Non défini / À discuter",
  deadline: "1 mois",
  honeypot: "",
};

export function QuoteForm({ initialProjectType }: { initialProjectType?: string }) {
  const [formData, setFormData] = useState<QuoteState>({
    ...initialQuoteState,
    projectType: initialProjectType || initialQuoteState.projectType,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const validate = () => {
    const errs: Partial<Record<keyof QuoteState, string>> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Le nom complet est obligatoire (min. 2 caractères).";
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = "Le nom doit comporter au moins 2 caractères.";
    }

    if (!formData.email.trim()) {
      errs.email = "L'adresse email est requise.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Veuillez saisir un email valide (ex: contact@domaine.com).";
    }

    if (!formData.phone.trim()) {
      errs.phone = "Le numéro de téléphone est obligatoire.";
    } else if (formData.phone.trim().length < 5) {
      errs.phone = "Veuillez saisir un numéro de téléphone valide.";
    }

    if (!formData.description.trim()) {
      errs.description = "Veuillez décrire brièvement vos attentes ou fonctionnalités clés.";
    } else if (formData.description.trim().length < 15) {
      errs.description = "Merci d'apporter un minimum de détails (15 caractères minimum).";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleWhatsAppQuote = () => {
    if (!validate()) return;
    const cleanPhone = contactData.whatsapp.replace(/[^0-9]/g, "");
    const text = encodeURIComponent(
      `*Demande de Devis — B-Tech Company*\n\n` +
      `📋 *Type de projet* : ${formData.projectType}\n` +
      `👤 *Client* : ${formData.fullName.trim()}\n` +
      `📧 *Email* : ${formData.email.trim()}\n` +
      `📞 *Téléphone/WhatsApp* : ${formData.phone.trim()}\n` +
      `🏢 *Entreprise* : ${formData.company.trim() || "Non précisée"}\n` +
      `💰 *Budget estimatif* : ${formData.budgetRange}\n` +
      `⏱️ *Délai souhaité* : ${formData.deadline}\n\n` +
      `📝 *Description du projet & Fonctionnalités* :\n${formData.description.trim()}`
    );
    window.open(`https://wa.me/${cleanPhone}?text=${text}`, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/devis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setStatus("error");
        setErrorMessage(data.error || "Une erreur est survenue lors de l'envoi de votre devis.");
        return;
      }

      setStatus("success");
      setFormData(initialQuoteState);
      setErrors({});
    } catch {
      setStatus("error");
      setErrorMessage("Impossible de contacter le serveur. Veuillez vérifier votre connexion ou nous contacter directement via WhatsApp.");
    }
  };

  const isLoading = status === "loading";

  return (
    <div className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-white/80 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-white/10 shadow-2xl backdrop-blur-md">
      {status === "success" ? (
        <div className="py-12 text-center space-y-5">
          <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Demande de devis transmise !
          </h3>
          <p className="text-base text-slate-600 dark:text-zinc-300 max-w-lg mx-auto leading-relaxed">
            Nous avons bien reçu vos spécifications. Un chargé de projet <strong>B-Tech Company</strong> étudiera votre cahier des charges et vous transmettra une estimation chiffrée sous 24 à 48 heures.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setErrorMessage("");
              }}
              className="w-full sm:w-auto px-8 py-3 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-md cursor-pointer"
            >
              Faire une autre demande
            </button>
            <a
              href={`https://wa.me/${contactData.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-slate-800 dark:text-zinc-200 bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-500" />
              <span>Suivre sur WhatsApp</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
          {status === "error" && (
            <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 flex items-start gap-3 text-red-700 dark:text-red-300 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{errorMessage || "Une erreur est survenue lors de la transmission. Veuillez réessayer."}</span>
            </div>
          )}

          {/* Hidden honeypot field for spam prevention */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            />
          </div>

          {/* Step 1: Type of project */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-500" />
              <span>1. Sélectionnez le type de projet</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {projectOptions.map((option) => {
                const isSelected = formData.projectType === option;
                return (
                  <button
                    key={option}
                    type="button"
                    disabled={isLoading}
                    onClick={() => setFormData({ ...formData, projectType: option })}
                    className={`p-3 rounded-xl text-xs sm:text-sm font-semibold text-center border transition-all duration-200 cursor-pointer disabled:opacity-50 ${
                      isSelected
                        ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                        : "bg-white dark:bg-zinc-800/80 border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300 hover:border-blue-400 dark:hover:border-cyan-400/40"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Identification */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
              2. Vos Coordonnées
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Nom */}
              <div className="space-y-1.5">
                <label htmlFor="quote-fullname" className="text-xs font-medium text-slate-600 dark:text-zinc-400">
                  Nom complet <span className="text-red-500">*</span>
                </label>
                <input
                  id="quote-fullname"
                  type="text"
                  disabled={isLoading}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Ex: Hery Rakoto"
                  className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-zinc-800/80 text-slate-900 dark:text-white focus:outline-none transition-colors disabled:opacity-50 ${
                    errors.fullName
                      ? "border-red-500 focus:border-red-500"
                      : "border-slate-200 dark:border-white/10 focus:border-blue-500 dark:focus:border-cyan-400"
                  }`}
                />
                {errors.fullName && <p className="text-xs text-red-500">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="quote-email" className="text-xs font-medium text-slate-600 dark:text-zinc-400">
                  Adresse Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="quote-email"
                  type="email"
                  disabled={isLoading}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Ex: contact@entreprise.mg"
                  className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-zinc-800/80 text-slate-900 dark:text-white focus:outline-none transition-colors disabled:opacity-50 ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-slate-200 dark:border-white/10 focus:border-blue-500 dark:focus:border-cyan-400"
                  }`}
                />
                {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
              </div>

              {/* Téléphone */}
              <div className="space-y-1.5">
                <label htmlFor="quote-phone" className="text-xs font-medium text-slate-600 dark:text-zinc-400">
                  Téléphone / WhatsApp <span className="text-red-500">*</span>
                </label>
                <input
                  id="quote-phone"
                  type="tel"
                  disabled={isLoading}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Ex: +261 34 12 345 67"
                  className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-zinc-800/80 text-slate-900 dark:text-white focus:outline-none transition-colors disabled:opacity-50 ${
                    errors.phone
                      ? "border-red-500 focus:border-red-500"
                      : "border-slate-200 dark:border-white/10 focus:border-blue-500 dark:focus:border-cyan-400"
                  }`}
                />
                {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
              </div>

              {/* Entreprise */}
              <div className="space-y-1.5">
                <label htmlFor="quote-company" className="text-xs font-medium text-slate-600 dark:text-zinc-400">
                  Entreprise / Organisation (Facultatif)
                </label>
                <input
                  id="quote-company"
                  type="text"
                  disabled={isLoading}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Ex: Société B-Tech"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-800/80 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-cyan-400 disabled:opacity-50"
                />
              </div>
            </div>
          </div>

          {/* Step 3: Budget & Timeline */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
              3. Budget & Délais prévisionnels
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Budget */}
              <div className="space-y-1.5">
                <label htmlFor="quote-budget" className="text-xs font-medium text-slate-600 dark:text-zinc-400 flex items-center gap-1.5">
                  <Wallet className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Budget estimatif</span>
                </label>
                <select
                  id="quote-budget"
                  disabled={isLoading}
                  value={formData.budgetRange}
                  onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-800/80 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-cyan-400 cursor-pointer disabled:opacity-50"
                >
                  {budgetOptions.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              {/* Deadline */}
              <div className="space-y-1.5">
                <label htmlFor="quote-deadline" className="text-xs font-medium text-slate-600 dark:text-zinc-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Délai souhaité</span>
                </label>
                <select
                  id="quote-deadline"
                  disabled={isLoading}
                  value={formData.deadline}
                  onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-800/80 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-cyan-400 cursor-pointer disabled:opacity-50"
                >
                  {deadlineOptions.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Step 4: Project Description */}
          <div className="space-y-1.5">
            <label htmlFor="quote-description" className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
              4. Description du projet & Fonctionnalités clés <span className="text-red-500">*</span>
            </label>
            <textarea
              id="quote-description"
              rows={5}
              disabled={isLoading}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Décrivez votre besoin : objectifs, fonctionnalités souhaitées, public cible, technologies envisagées ou exemples de réalisations inspirantes..."
              className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-zinc-800/80 text-slate-900 dark:text-white focus:outline-none transition-colors resize-y disabled:opacity-50 ${
                errors.description
                  ? "border-red-500 focus:border-red-500"
                  : "border-slate-200 dark:border-white/10 focus:border-blue-500 dark:focus:border-cyan-400"
              }`}
            />
            {errors.description && <p className="text-xs text-red-500">{errors.description}</p>}
          </div>

          {/* Submit & WhatsApp buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-500/25 disabled:opacity-50 transition-all cursor-pointer text-sm sm:text-base"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Calcul et transmission...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Obtenir mon devis en ligne</span>
                </>
              )}
            </button>

            <button
              type="button"
              disabled={isLoading}
              onClick={handleWhatsAppQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-slate-800 dark:text-zinc-200 bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-zinc-700 shadow-xs transition-all cursor-pointer text-sm sm:text-base disabled:opacity-50"
            >
              <MessageCircle className="w-5 h-5 text-emerald-500" />
              <span>Demander via WhatsApp</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
