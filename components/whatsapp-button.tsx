"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { contactData } from "@/data/contact";

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const cleanPhone = contactData.whatsapp.replace(/[^0-9]/g, "");
  const defaultMessage = encodeURIComponent(
    "Bonjour B-Tech Company ! Je souhaite avoir des informations sur vos services numériques et vos offres de développement."
  );
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end print:hidden">
      {/* Popover Bubble */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-72 sm:w-80 p-4 rounded-[28px] bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 shadow-2xl backdrop-blur-md text-slate-800 dark:text-white"
          >
            <div className="flex items-start justify-between pb-3 border-b border-slate-100 dark:border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                    BT
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-white dark:ring-zinc-900" />
                </div>
                <div>
                  <h4 className="text-sm font-bold">B-Tech Support</h4>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                    En ligne • Réponse rapide
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
                aria-label="Fermer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 dark:text-zinc-300 py-3 leading-relaxed">
              👋 Bonjour ! Avez-vous un projet web, mobile ou logiciel à concrétiser ? Discutons-en directement sur WhatsApp.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[24px] bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs transition-colors shadow-md shadow-emerald-500/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Démarrer la discussion</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <div className="relative flex items-center">
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden sm:flex items-center mr-3 px-3 py-1.5 rounded-full bg-slate-900/90 dark:bg-zinc-800/90 text-white text-xs font-medium shadow-lg backdrop-blur-md border border-white/10 pointer-events-none"
          >
            Discuter sur WhatsApp
          </motion.div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Contacter B-Tech sur WhatsApp"
          className="relative group w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/45 transition-all duration-200 hover:scale-105 cursor-pointer"
        >
          {/* Animated ping ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-ping pointer-events-none" />
          
          <MessageCircle className="w-7 h-7 relative z-10 transition-transform group-hover:scale-110" />

          {/* Unread badge dot */}
          <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-red-500 border-2 border-white dark:border-zinc-950" />
        </button>
      </div>
    </div>
  );
}
