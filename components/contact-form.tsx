"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, MessageCircle } from "lucide-react";
import { contactData } from "@/data/contact";

interface FormState {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  honeypot: string;
}

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  projectType: "Développement Web",
  message: "",
  honeypot: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const validate = () => {
    const errs: Partial<Record<keyof FormState, string>> = {};
    if (!formData.name.trim()) {
      errs.name = "Le nom complet est obligatoire (min. 2 caractères).";
    } else if (formData.name.trim().length < 2) {
      errs.name = "Le nom doit comporter au moins 2 caractères.";
    }

    if (!formData.email.trim()) {
      errs.email = "L'adresse email est requise.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Veuillez entrer une adresse email valide (ex: contact@domaine.com).";
    }

    if (!formData.message.trim()) {
      errs.message = "Le message est obligatoire.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Veuillez préciser votre demande (10 caractères minimum).";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleWhatsAppDirect = () => {
    if (!validate()) return;
    const cleanPhone = contactData.whatsapp.replace(/[^0-9]/g, "");
    const text = encodeURIComponent(
      `*Demande de Contact — B-Tech Company*\n\n` +
      `👤 *Nom* : ${formData.name.trim()}\n` +
      `📧 *Email* : ${formData.email.trim()}\n` +
      `📞 *Téléphone* : ${formData.phone.trim() || "Non renseigné"}\n` +
      `📌 *Type de projet* : ${formData.projectType}\n\n` +
      `💬 *Message* :\n${formData.message.trim()}`
    );
    window.open(`https://wa.me/${cleanPhone}?text=${text}`, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setStatus("error");
        setErrorMessage(data.error || "Une erreur est survenue lors de l'envoi de votre message.");
        return;
      }

      setStatus("success");
      setFormData(initialFormState);
      setErrors({});
    } catch {
      setStatus("error");
      setErrorMessage("Impossible de contacter le serveur. Veuillez vérifier votre connexion ou nous contacter directement sur WhatsApp.");
    }
  };

  const isLoading = status === "loading";

  return (
    <div className="rounded-3xl p-6 sm:p-10 bg-white/80 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-white/10 shadow-xl backdrop-blur-md">
      {status === "success" ? (
        <div className="py-10 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            Message envoyé avec succès !
          </h3>
          <p className="text-sm text-slate-600 dark:text-zinc-300 max-w-md mx-auto leading-relaxed">
            Merci d&apos;avoir contacté <strong>B-Tech Company</strong>. Votre demande a bien été transmise à notre équipe qui vous répondra dans les plus brefs délais.
          </p>
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setErrorMessage("");
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500 transition-colors cursor-pointer"
            >
              Envoyer un autre message
            </button>
            <a
              href={`https://wa.me/${contactData.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-800 dark:text-zinc-200 bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-500" />
              <span>Contacter sur WhatsApp</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {status === "error" && (
            <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 flex items-start gap-3 text-red-700 dark:text-red-300 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{errorMessage || "Une erreur est survenue lors de l'envoi. Veuillez réessayer."}</span>
            </div>
          )}

          {/* Hidden honeypot field for bot spam detection */}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Nom */}
            <div className="space-y-1.5">
              <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
                Nom complet <span className="text-red-500">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                disabled={isLoading}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ex: Jean Dupont"
                className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-zinc-800/80 text-slate-900 dark:text-white focus:outline-none transition-colors disabled:opacity-50 ${
                  errors.name
                    ? "border-red-500 focus:border-red-500"
                    : "border-slate-200 dark:border-white/10 focus:border-blue-500 dark:focus:border-cyan-400"
                }`}
              />
              {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
                Adresse Email <span className="text-red-500">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                disabled={isLoading}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Ex: jean.dupont@example.com"
                className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-zinc-800/80 text-slate-900 dark:text-white focus:outline-none transition-colors disabled:opacity-50 ${
                  errors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-slate-200 dark:border-white/10 focus:border-blue-500 dark:focus:border-cyan-400"
                }`}
              />
              {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Téléphone */}
            <div className="space-y-1.5">
              <label htmlFor="contact-phone" className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
                Téléphone
              </label>
              <input
                id="contact-phone"
                type="tel"
                disabled={isLoading}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Ex: +261 34 00 000 00"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-800/80 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-cyan-400 disabled:opacity-50"
              />
            </div>

            {/* Type de projet */}
            <div className="space-y-1.5">
              <label htmlFor="contact-project-type" className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
                Type de projet
              </label>
              <select
                id="contact-project-type"
                disabled={isLoading}
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-800/80 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-cyan-400 cursor-pointer disabled:opacity-50"
              >
                <option value="Développement Web">Développement d&apos;application Web</option>
                <option value="Développement Mobile">Développement Mobile (iOS/Android)</option>
                <option value="Création de Site Web">Création de Site Web</option>
                <option value="Développement de Logiciel">Développement de Logiciel métier</option>
                <option value="Design Graphique">Design Graphique & Visuels</option>
                <option value="Solutions Numériques">Solutions Numériques sur mesure</option>
                <option value="Autre">Autre demande</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
              Votre Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="contact-message"
              rows={5}
              disabled={isLoading}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Décrivez brièvement votre projet ou votre question..."
              className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-zinc-800/80 text-slate-900 dark:text-white focus:outline-none transition-colors resize-y disabled:opacity-50 ${
                errors.message
                  ? "border-red-500 focus:border-red-500"
                  : "border-slate-200 dark:border-white/10 focus:border-blue-500 dark:focus:border-cyan-400"
              }`}
            />
            {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-md shadow-blue-500/20 disabled:opacity-50 transition-all cursor-pointer text-sm"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Envoi en cours...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Envoyer ma demande</span>
                </>
              )}
            </button>

            <button
              type="button"
              disabled={isLoading}
              onClick={handleWhatsAppDirect}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-800 dark:text-zinc-200 bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-zinc-700 shadow-xs transition-all cursor-pointer text-sm disabled:opacity-50"
            >
              <MessageCircle className="w-4 h-4 text-emerald-500" />
              <span>Transmettre via WhatsApp</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
