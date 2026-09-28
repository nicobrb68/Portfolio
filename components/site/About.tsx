"use client";

import { useRef } from "react";
import { experiences, profile } from "@/data/projects";

function age(birthDate: string) {
  const b = new Date(birthDate);
  const now = new Date();
  const hadBirthday =
    now.getMonth() > b.getMonth() ||
    (now.getMonth() === b.getMonth() && now.getDate() >= b.getDate());
  return now.getFullYear() - b.getFullYear() - (hadBirthday ? 0 : 1);
}

export default function About() {
  const root = useRef<HTMLElement>(null);

  const main = experiences.filter((e) => !e.minor);
  const minor = experiences.filter((e) => e.minor);

  return (
    <section ref={root} id="parcours" className="border-t border-border px-4 py-24 md:px-8 md:py-32">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête de section moderne */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center justify-between gap-4 border-b border-border pb-6 font-mono text-xs uppercase tracking-wider text-ink/60">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500" />
              (02) Profil & Expérience
            </span>
            <span>42 Mulhouse · Alternance 2027</span>
          </div>

          <div className="mt-8">
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-ink leading-[0.9]">
              Parcours <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-400 to-indigo-400">
                & Méthodologie
              </span>
            </h2>
          </div>
        </div>

        {/* Grille de contenu */}
        <div className="grid gap-16 lg:grid-cols-12 items-start">
          
          {/* Colonne gauche : Bio & Langues */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-sm space-y-4">
              <p className="text-xl sm:text-2xl font-medium leading-snug text-ink">
                Nicolas Barbosa, {age(profile.birthdate)} ans.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-ink/80">
                Étudiant en tête de promotion à <strong className="text-ink font-semibold">l&apos;École 42 Mulhouse</strong>, 
                je combine la rigueur de l&apos;horlogerie suisse, l&apos;autonomie d&apos;une expatriation d&apos;un an en Australie 
                et la robustesse de l&apos;ingénierie système 42.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-ink/80">
                Mon objectif : intégrer une entreprise en <strong className="text-purple-400 font-semibold">alternance de 24 mois</strong> dès {profile.alternance.start} pour administrer des clusters conteneurisés, concevoir des pipelines CI/CD et durcir les infrastructures Linux.
              </p>

              <div className="pt-4 border-t border-border/60">
                <p className="font-mono text-xs uppercase tracking-wider text-ink/50 mb-3">
                  Langues & Communication
                </p>
                <div className="flex flex-wrap gap-2">
                  {profile.languages.map((l) => (
                    <span
                      key={l}
                      className="px-3 py-1 rounded-md border border-purple-500/20 bg-purple-500/10 font-mono text-xs text-purple-300 font-medium"
                    >
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite : Timeline détaillée */}
          <div className="lg:col-span-7 space-y-8">
            <ol className="relative border-l border-purple-500/30 ml-3 space-y-12">
              {main.map((e) => (
                <li key={e.title} className="relative pl-8 md:pl-10">
                  {/* Point sur la timeline */}
                  <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-paper bg-purple-500 shadow-sm shadow-purple-500/50" />

                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-400 font-bold">
                      {e.period}
                    </span>
                    <span className="font-mono text-xs text-ink/50">
                      {e.place}
                    </span>
                  </div>

                  <h3 className="font-display-wide text-2xl sm:text-3xl font-bold tracking-tight text-ink mt-1">
                    {e.title}
                  </h3>

                  {e.description && (
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-ink/80">
                      {e.description}
                    </p>
                  )}

                  {e.highlights && (
                    <div className="mt-4 p-4 rounded-xl border border-border/80 bg-paper/50 space-y-2.5">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-purple-400 font-bold">
                        Piliers techniques validés :
                      </p>
                      <ul className="space-y-2">
                        {e.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink/75 leading-relaxed">
                            <span className="text-purple-400 font-bold mt-0.5">›</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}

              {minor.map((e) => (
                <li key={e.title} className="relative pl-8 md:pl-10">
                  <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border border-paper bg-ink/40" />
                  <span className="font-mono text-xs uppercase tracking-wider text-ink/50">
                    {e.period}
                  </span>
                  <p className="text-sm font-medium text-ink/70">
                    {e.title} — {e.place}
                  </p>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
}