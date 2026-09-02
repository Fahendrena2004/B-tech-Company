"use client";

import React, { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

function emptySubscribe() {
  return () => {};
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 flex items-center justify-center ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        resolvedTheme === "dark"
          ? "Passer au thème clair"
          : "Passer au thème sombre"
      }
      className={`relative w-9 h-9 rounded-xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md flex items-center justify-center text-slate-700 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-300 dark:hover:border-cyan-500/30 transition-all duration-200 shadow-xs cursor-pointer ${className}`}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-slate-700 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}

