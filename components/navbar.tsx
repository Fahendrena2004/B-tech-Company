"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Technologies", href: "/technologies" },
  { label: "Équipe", href: "/team" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prevPath, setPrevPath] = useState(pathname);

  // Close mobile menu if route changes during render
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group transition-transform duration-200 hover:scale-[1.02] focus:outline-none shrink-0"
          >
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600/10 via-cyan-500/10 to-indigo-600/10 dark:from-blue-500/20 dark:to-cyan-400/20 border border-blue-500/20 dark:border-cyan-400/30 flex items-center justify-center p-1 shadow-xs overflow-hidden">
              <Image
                src="/images/logoBtechcompany-removebg-preview.png"
                alt="B-Tech Company Logo"
                width={38}
                height={38}
                className="object-contain w-auto h-auto transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-cyan-200 dark:to-blue-400 bg-clip-text text-transparent">
                B-Tech <span className="text-blue-600 dark:text-cyan-400 font-black">Company</span>
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-widest text-slate-500 dark:text-zinc-400">
                Digital Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (>= lg) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-blue-600 dark:text-cyan-400 font-semibold"
                      : "text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions (Theme Toggle & CTA) - ONLY on lg and above */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <ThemeToggle />
            <Link
              href="/devis"
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-md shadow-blue-500/20 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-200 animate-pulse" />
              <span>Demander un devis</span>
            </Link>
          </div>

          {/* Mobile & Tablet Right Controls - ONLY on screens below lg */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 text-slate-700 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-cyan-400 focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden border-b border-slate-200 dark:border-white/10 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl shadow-xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 pt-2 pb-6 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-cyan-400 font-semibold"
                        : "text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-white/5"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400" />}
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-100 dark:border-white/10">
                <Link
                  href="/devis"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-md shadow-blue-500/20"
                >
                  <Sparkles className="w-4 h-4 text-cyan-200" />
                  <span>Demander un devis</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
