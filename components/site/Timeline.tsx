"use client";

import { experiences, education } from "@/data/projects";

export default function Timeline() {
  return (
    <section id="parcours" className="border-t border-border w-full bg-paper">
      {/* En-tête pleine largeur */}
      <div className="w-full flex items-center justify-between px-6 md:px-12 py-5 border-b border-border font-mono text-xs uppercase tracking-wider text-ink/60">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
          (02) Trajectoire & Formation
        </span>
        <span>Parcours professionnel</span>
      </div>

      {/* Titre pleine largeur */}
      <div className="w-full px-6 md:px-12 py-12 md:py-16 border-b border-border flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <h2 className="font-display font-black uppercase tracking-tight text-ink text-[11vw] sm:text-[9vw] lg:text-[7.5vw] leading-[0.88]">
          Parcours & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-400 to-indigo-400">
            Expériences
          </span>
        </h2>
        <p className="max-w-xl font-mono text-xs sm:text-sm text-ink/70 leading-relaxed lg:pb-2">
          De la haute précision micromécanique en Suisse à l&apos;immersion technique anglophone, puis l&apos;exigence de l&apos;École 42.
        </p>
      </div>

      {/* Grille principale : colonne gauche STICKY + colonne droite qui défile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-border items-start">
        
        {/* Colonne gauche ÉPINGLÉE (Sticky) */}
        <div className="lg:col-span-5 p-6 md:p-12 lg:sticky lg:top-24 border-b lg:border-b-0 lg:border-r border-border space-y-6">
          <div className="font-mono text-xs font-bold uppercase tracking-wider text-purple-400">
            [02.1] Diplômes & Certifications
          </div>
          <p className="font-mono text-xs sm:text-sm text-ink/70 leading-relaxed">
            Un parcours atypique orienté rigueur manuelle et logique algorithmique, consolidé par le tronc commun de 42.
          </p>

          <div className="divide-y divide-border border-y border-border">
            {education.map((edu, idx) => (
              <div key={idx} className="py-4">
                <span className="font-mono text-xs text-purple-400 font-semibold block mb-1">
                  {edu.period}
                </span>
                <h4 className="font-display-wide text-lg font-bold text-ink">
                  {edu.title}
                </h4>
                <p className="font-mono text-xs text-ink/50 mt-1">{edu.place}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Colonne droite QUI DÉFILE (Expériences) */}
        <div className="lg:col-span-7 divide-y divide-border">
          <div className="p-6 md:px-12 md:py-6 bg-card/20 font-mono text-xs font-bold uppercase tracking-wider text-purple-400">
            [02.2] Expériences professionnelles & Immersion
          </div>
          {experiences.map((exp, idx) => (
            <div key={idx} className="p-6 md:p-12 hover:bg-purple-950/10 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                <span className="font-display-wide text-2xl sm:text-3xl font-bold text-ink">
                  {exp.title}
                </span>
                <span className="font-mono text-xs text-purple-400 font-semibold shrink-0">
                  {exp.period}
                </span>
              </div>
              <p className="font-mono text-xs text-ink/50 mb-4">{exp.place}</p>
              {exp.description && (
                <p className="text-sm text-ink/80 leading-relaxed mb-4">
                  {exp.description}
                </p>
              )}
              {exp.highlights && (
                <ul className="space-y-1.5 font-mono text-xs text-ink/70 border-l border-purple-500/40 pl-4">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}