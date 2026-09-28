"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/projects";
import ThemeToggle from "@/components/site/ThemeToggle";

const links = [
  { href: "#parcours", label: "Parcours" },
  { href: "#projets-42", label: "Projets 42" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

const pad = (n: number) => String(n).padStart(2, "0");

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      id="menu-mobile"
      aria-hidden={!open}
      data-lenis-prevent
      className={`fixed inset-0 z-40 flex flex-col justify-between bg-paper px-6 pb-8 pt-24 text-ink transition-[clip-path] duration-700 ease-out md:hidden ${
        open ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]"
      }`}
    >
      <nav>
        <ul className="divide-y divide-border">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={onClose}
                tabIndex={open ? 0 : -1}
                className="group flex items-baseline gap-4 py-4"
              >
                <span className="font-mono text-sm opacity-50">{pad(i + 1)}</span>
                <span className="text-3xl font-bold tracking-tight text-ink group-hover:text-sky-500 transition-colors">
                  {l.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="grid grid-cols-2 gap-3 font-mono text-xs uppercase tracking-wider">
        <a href={profile.linkedin} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1} className="border border-border p-4 text-center rounded-lg hover:border-sky-500">
          LinkedIn ↗
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1} className="border border-border p-4 text-center rounded-lg hover:border-sky-500">
          GitHub ↗
        </a>
        <a href={profile.cv} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1} className="border border-border p-4 text-center rounded-lg hover:border-sky-500">
          CV (PDF) ↗
        </a>
        <a href={`mailto:${profile.email}`} tabIndex={open ? 0 : -1} className="bg-sky-500 text-white p-4 text-center rounded-lg font-bold">
          Me contacter ↗
        </a>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-paper/80 border-b border-border/60 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#top" onClick={() => setOpen(false)} className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-md shadow-sky-500/20">
              NB
            </span>
            <span className="font-bold tracking-tight text-ink text-base hidden sm:inline-block">
              Nicolas Barbosa
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-ink/80">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-sky-500 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-sky-500 hover:after:w-full after:transition-all"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href={`mailto:${profile.email}`}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Alternance 2027</span>
            </a>

            <button
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              className="p-2 text-ink md:hidden font-mono text-xs font-bold uppercase tracking-wider"
            >
              {open ? "Fermer" : "Menu"}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}