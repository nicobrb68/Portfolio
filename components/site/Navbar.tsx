"use client";

import { useState } from "react";
import { profile } from "@/data/projects";

const navLinks = [
  { label: "Parcours", href: "#parcours", num: "02" },
  { label: "Projets", href: "#projets-42", num: "03" },
  { label: "Stack", href: "#stack", num: "04" },
  { label: "Méthode", href: "#methodologie", num: "05" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border/80 bg-paper/85 backdrop-blur-md transition-all">
      <div className="w-full px-6 md:px-12 h-16 flex items-center justify-between">
        
        {/* Identifiant gauche */}
        <a
          href="#top"
          className="font-mono text-xs uppercase tracking-wider text-ink font-bold hover:text-purple-400 transition-colors flex items-center gap-2"
        >
          <span className="h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
          <span>{profile.name}</span>
          <span className="hidden sm:inline text-ink/40 font-normal">· 42 Mulhouse</span>
        </a>

        {/* Liens de navigation centraux (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-ink/70 hover:text-purple-400 transition-colors flex items-center gap-1.5"
            >
              <span className="text-purple-400/80 text-[10px]">({link.num})</span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Bouton Contact & Menu Mobile */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold px-4 py-2 rounded border border-purple-500/40 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 hover:border-purple-500 transition-all"
          >
            <span>Me contacter</span>
            <span></span>
          </a>

          {/* Déclencheur menu déroulant mobile */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden font-mono text-xs uppercase tracking-wider px-3 py-1.5 rounded border border-border text-ink"
            aria-label="Ouvrir le menu"
          >
            {isOpen ? "Fermer [×]" : "Menu [≡]"}
          </button>
        </div>

      </div>

      {/* Menu déroulant mobile */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-paper px-6 py-6 font-mono text-xs uppercase tracking-wider space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between text-ink/80 hover:text-purple-400 py-2 border-b border-border/40"
            >
              <span>{link.label}</span>
              <span className="text-purple-400">({link.num})</span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between text-purple-300 font-bold py-2"
          >
            <span>Prise de contact</span>
            <span>(06) →</span>
          </a>
        </div>
      )}
    </header>
  );
}