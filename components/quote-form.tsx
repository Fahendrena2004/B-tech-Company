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
  ArrowRight,
  ArrowLeft,
  Briefcase,
  User,
  FileText
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
};

export function QuoteForm({ initialProjectType }: { initialProjectType?: string }) {
  const [formData, setFormData] = useState<QuoteState>({
    ...initialQuoteState,
    projectType: initialProjectType || initialQuoteState.projectType,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const validateStep = (step: number) => {
    const errs: Partial<Record<keyof QuoteState, string>> = {};
    if (step === 1) {
      if (!formData.projectType) errs.projectType = "Veuillez sélectionner un type de projet";
    }
    if (step === 2) {
      if (!formData.description.trim()) {
        errs.description = "Veuillez décrire brièvement vos attentes ou fonctionnalités";
      } else if (formData.description.trim().length < 15) {
        errs.description = "Merci d'apporter un minimum de détails (15 caractères min.)";
      }
    }
    if (step === 3) {
      if (!formData.budgetRange) errs.budgetRange = "Veuillez sélectionner un budget";
      if (!formData.deadline) errs.deadline = "Veuillez sélectionner un délai";
    }
    if (step === 4) {
      if (!formData.fullName.trim()) errs.fullName = "Le nom complet est obligatoire";
      if (!formData.email.trim()) {
        errs.email = "L'adresse email est requise";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errs.email = "Veuillez saisir un email valide";
      }
      if (!formData.phone.trim()) errs.phone = "Le numéro de téléphone est requis";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleWhatsAppQuote = () => {
    if (!validateStep(1) || !validateStep(2) || !validateStep(3) || !validateStep(4)) return;
    const cleanPhone = contactData.whatsapp.replace(/[^0-9]/g, "");
    const text = encodeURIComponent(
      `*Demande de Devis — B-Tech Company*\n\n` +
      `📋 *Type de projet* : ${formData.projectType}\n` +
      `👤 *Client* : ${formData.fullName}\n` +
      `📧 *Email* : ${formData.email}\n` +
      `📞 *Téléphone* : ${formData.phone}\n` +
      `🏢 *Entreprise* : ${formData.company || "Non renseigné"}\n` +
      `💰 *Budget* : ${formData.budgetRange}\n` +
      `⏱️ *Délai souhaité* : ${formData.deadline}\n\n` +
      `📝 *Description du projet* :\n${formData.description}`
    );
    window.open(`https://wa.me/${cleanPhone}?text=${text}`, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setStatus("loading");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      setFormData(initialQuoteState);
      setErrors({});
      setCurrentStep(1);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="rounded-[32px] p-6 sm:p-10 lg:p-12 bg-white/80 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-white/10 shadow-2xl backdrop-blur-md relative overflow-hidden">
      {status === "success" ? (
        <div className="py-12 text-center space-y-5">
          <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Demande de devis transmise !
          </h3>
          <p className="text-base text-slate-600 dark:text-zinc-300 max-w-lg mx-auto leading-relaxed">
            Nous avons bien reçu vos spécifications. Un chargé de projet B-Tech Company étudiera votre cahier des charges et vous transmettra une estimation chiffrée sous 24 à 48 heures.
          </p>
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="px-8 py-3 rounded-[24px] font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-md"
            >
              Faire une autre demande
            </button>
            <a
              href={`https://wa.me/${contactData.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[24px] font-bold text-sm text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-500" />
              <span>Suivre sur WhatsApp</span>
            </a>
          </div>
        </div>
      ) : (
        <>
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 dark:bg-zinc-800 rounded-full -z-10" />
              <div 
                className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-blue-500 transition-all duration-300 rounded-full -z-10" 
                style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
              />
              {[
                { step: 1, icon: Briefcase, label: "Service" },
                { step: 2, icon: FileText, label: "Détails" },
                { step: 3, icon: Wallet, label: "Budget" },
                { step: 4, icon: User, label: "Contact" }
              ].map((item) => {
                const isActive = currentStep === item.step;
                const isCompleted = currentStep > item.step;
                return (
                  <div key={item.step} className="flex flex-col items-center gap-2 bg-white dark:bg-zinc-900 px-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${isActive ? "border-blue-500 bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-cyan-400" : isCompleted ? "border-blue-500 bg-blue-500 text-white" : "border-slate-200 dark:border-zinc-700 text-slate-400"}`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] sm:text-xs font-semibold uppercase tracking-wider hidden sm:block ${isActive ? "text-blue-600 dark:text-cyan-400" : isCompleted ? "text-slate-800 dark:text-zinc-200" : "text-slate-400"}`}>
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {status === "error" && (
              <div className="p-4 rounded-[24px] bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 flex items-center gap-3 text-red-700 dark:text-red-300 text-sm">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>Une erreur est survenue lors de la transmission. Veuillez réessayer.</span>
              </div>
            )}

            {/* Step 1: Type of project */}
            {currentStep === 1 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <label className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300 flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-cyan-500" />
                  <span>Sélectionnez le type de projet</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {projectOptions.map((option) => {
                    const isSelected = formData.projectType === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setFormData({ ...formData, projectType: option })}
                        className={`p-4 rounded-[24px] text-sm font-semibold text-center border transition-all duration-200 cursor-pointer ${
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
            )}

            {/* Step 2: Project Description */}
            {currentStep === 2 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <label htmlFor="quote-description" className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
                  Description du projet & Fonctionnalités clés <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="quote-description"
                  rows={8}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Décrivez votre besoin : objectifs, fonctionnalités souhaitées, public cible, technologies envisagées ou exemples de réalisations inspirantes..."
                  className={`w-full px-5 py-4 rounded-[24px] border text-sm bg-white dark:bg-zinc-800/80 text-slate-900 dark:text-white focus:outline-none transition-colors resize-y ${
                    errors.description
                      ? "border-red-500 focus:border-red-500"
                      : "border-slate-200 dark:border-white/10 focus:border-blue-500 dark:focus:border-cyan-400"
                  }`}
                />
                {errors.description && <p className="text-xs text-red-500 font-medium mt-1">{errors.description}</p>}
              </div>
            )}

            {/* Step 3: Budget & Timeline */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
                  Budget & Délais prévisionnels
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Budget */}
                  <div className="space-y-2">
                    <label htmlFor="quote-budget" className="text-sm font-medium text-slate-600 dark:text-zinc-400 flex items-center gap-2">
                      <Wallet className="w-4 h-4 text-cyan-500" />
                      <span>Budget estimatif</span>
                    </label>
                    <select
                      id="quote-budget"
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-5 py-4 rounded-[24px] border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-800/80 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-cyan-400 cursor-pointer"
                    >
                      {budgetOptions.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  {/* Deadline */}
                  <div className="space-y-2">
                    <label htmlFor="quote-deadline" className="text-sm font-medium text-slate-600 dark:text-zinc-400 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-cyan-500" />
                      <span>Délai souhaité</span>
                    </label>
                    <select
                      id="quote-deadline"
                      value={formData.deadline}
                      onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                      className="w-full px-5 py-4 rounded-[24px] border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-800/80 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-cyan-400 cursor-pointer"
                    >
                      {deadlineOptions.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Identification */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
                  Vos Coordonnées
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Nom */}
                  <div className="space-y-2">
                    <label htmlFor="quote-fullname" className="text-xs font-medium text-slate-600 dark:text-zinc-400">
                      Nom complet <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="quote-fullname"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Ex: Hery Rakoto"
                      className={`w-full px-4 py-3 rounded-[24px] border text-sm bg-white dark:bg-zinc-800/80 text-slate-900 dark:text-white focus:outline-none transition-colors ${
                        errors.fullName ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-white/10 focus:border-blue-500 dark:focus:border-cyan-400"
                      }`}
                    />
                    {errors.fullName && <p className="text-xs text-red-500 font-medium">{errors.fullName}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="quote-email" className="text-xs font-medium text-slate-600 dark:text-zinc-400">
                      Adresse Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Ex: contact@entreprise.mg"
                      className={`w-full px-4 py-3 rounded-[24px] border text-sm bg-white dark:bg-zinc-800/80 text-slate-900 dark:text-white focus:outline-none transition-colors ${
                        errors.email ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-white/10 focus:border-blue-500 dark:focus:border-cyan-400"
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email}</p>}
                  </div>

                  {/* Téléphone */}
                  <div className="space-y-2">
                    <label htmlFor="quote-phone" className="text-xs font-medium text-slate-600 dark:text-zinc-400">
                      Téléphone / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="quote-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ex: +261 34 12 345 67"
                      className={`w-full px-4 py-3 rounded-[24px] border text-sm bg-white dark:bg-zinc-800/80 text-slate-900 dark:text-white focus:outline-none transition-colors ${
                        errors.phone ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-white/10 focus:border-blue-500 dark:focus:border-cyan-400"
                      }`}
                    />
                    {errors.phone && <p className="text-xs text-red-500 font-medium">{errors.phone}</p>}
                  </div>

                  {/* Entreprise */}
                  <div className="space-y-2">
                    <label htmlFor="quote-company" className="text-xs font-medium text-slate-600 dark:text-zinc-400">
                      Entreprise / Organisation (Facultatif)
                    </label>
                    <input
                      id="quote-company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Ex: Société B-Tech"
                      className="w-full px-4 py-3 rounded-[24px] border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-800/80 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-cyan-400"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Form Navigation Controls */}
            <div className="pt-6 mt-8 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-[24px] font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Précédent</span>
                </button>
              ) : (
                <div /> // Spacer
              )}

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="btn-modern-primary px-8 py-3 rounded-full text-sm text-white"
                >
                  <span>Suivant</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              ) : (
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppQuote}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-all shadow-sm"
                    title="Demander via WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="hidden sm:inline">WhatsApp</span>
                  </button>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-modern-primary px-8 py-3 rounded-full text-sm text-white disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    ) : (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    <span>Envoyer</span>
                  </button>
                </div>
              )}
            </div>
          </form>
        </>
      )}
    </div>
  );
}
