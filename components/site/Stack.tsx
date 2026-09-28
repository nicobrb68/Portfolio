"use client";

import { useRef } from "react";
import { profile } from "@/data/projects";
import { useReveal } from "@/components/site/useReveal";

const categoryLabels: Record<string, string> = {
  systemAndCloud: "Systèmes & Cloud",
  scriptingAndCode: "Scripting & Code",
  networkAndSecurity: "Réseaux & Sécurité",
  aiAndTools: "IA & Outils",
  devopsAndArch: "DevOps & Architecture",
};

export default function Stack() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  const skillsData = profile.skills ?? {};

  return (
    <section ref={root} id="stack" className="border-t border-border px-4 py-24 md:px-8 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 md:mb-18">
          <p className="font-mono text-xs uppercase tracking-wider text-purple-400 mb-3">
            (04) Compétences & Outils
          </p>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-ink">
            Stack <span className="text-purple-500">&</span> Technologies
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {Object.entries(skillsData).map(([key, items]) => (
            <div
              key={key}
              data-reveal
              className="rounded-xl border border-border bg-card/50 p-5 md:p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/5"
            >
              <p className="mb-4 font-mono text-xs font-bold uppercase tracking-wider text-purple-400 border-b border-border/60 pb-2">
                {categoryLabels[key] ?? key}
              </p>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2 font-mono text-xs sm:text-sm text-ink/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}