"use client";

import { useState } from "react";
import { profile } from "@/data/projects";
import ContactForm from "@/components/site/ContactForm";

const contactLinks = [
  ...(profile.phone
    ? [{ label: "Téléphone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` }]
    : []),
  { label: "LinkedIn", value: "Nicolas Barbosa", href: profile.linkedin },
  { label: "GitHub", value: "nicobrb68", href: profile.github },
  { label: "Curriculum Vitae", value: "Télécharger PDF", href: profile.cv },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Repli si le presse-papier n'est pas autorisé
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-between border-t border-border bg-paper w-full overflow-hidden"
    >
      {/* Halo violet d'ambiance grand angle */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 w-[80vw] h-[500px] bg-gradient-to-b from-purple-900/15 via-violet-600/10 to-transparent blur-[140px]"
      />

      <div className="w-full">
        {/* Bandeau d'en-tête pleine largeur */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border font-mono text-xs uppercase tracking-wider text-ink/60 md:px-12">
          <span className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            (06) Prise de contact
          </span>
          <span className="hidden sm:inline">Grand-Est · Suisse</span>
          <span>Alternance 2027</span>
        </div>

        {/* Titre monumental pleine largeur */}
        <div className="px-6 pt-12 pb-8 md:px-12 md:pt-16 border-b border-border">
          <h2 className="font-display font-black uppercase tracking-tight text-ink text-[13vw] sm:text-[11vw] lg:text-[9.5vw] leading-[0.85] select-none">
            Prenons <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400">
              Contact.
            </span>
          </h2>
        </div>

        {/* Grille pleine largeur : Métriques statiques (pas d'hover trompeur) */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border-b border-border font-mono">
          <div className="p-6 md:p-10 flex flex-col justify-between bg-card/20">
            <span className="text-xs uppercase tracking-wider text-purple-400 font-bold">
              [01] Disponibilité
            </span>
            <div className="my-6">
              <span className="font-display-wide text-3xl sm:text-4xl lg:text-5xl font-bold text-ink">
                {profile.alternance.start}
              </span>
              <p className="mt-2 text-xs text-ink/50">Contrat d&apos;alternance · 24 mois</p>
            </div>
            <span className="text-[11px] text-emerald-400 flex items-center gap-1.5 font-semibold">
              ● Statut : En recherche active
            </span>
          </div>

          <div className="p-6 md:p-10 flex flex-col justify-between bg-card/20">
            <span className="text-xs uppercase tracking-wider text-ink/50 font-bold">
              [02] Rythme
            </span>
            <div className="my-6">
              <span className="font-display-wide text-3xl sm:text-4xl lg:text-5xl font-bold text-ink">
                3 sem. / 1 sem.
              </span>
              <p className="mt-2 text-xs text-ink/50">3 semaines entreprise / 1 semaine école</p>
            </div>
            <span className="text-[11px] text-ink/40">Présence maximisée en équipe</span>
          </div>

          <div className="p-6 md:p-10 flex flex-col justify-between bg-card/20">
            <span className="text-xs uppercase tracking-wider text-ink/50 font-bold">
              [03] Cursus & Diplôme
            </span>
            <div className="my-6">
              <span className="font-display-wide text-3xl sm:text-4xl lg:text-5xl font-bold text-ink">
                RNCP 7 · Bac+5 Master
              </span>
              <p className="mt-2 text-xs text-ink/50">Expert en architecture informatique</p>
            </div>
            <span className="text-[11px] text-purple-400">École 42 Mulhouse</span>
          </div>
        </div>

        {/* Section interaction : 50/50 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border">
          {/* Colonne gauche : Adresse directe avec action de copie + Liens */}
          <div className="lg:col-span-6 p-6 md:p-12 flex flex-col justify-between space-y-12">
            <div>
              <div className="flex items-center justify-between mb-4">
                <p className="font-mono text-xs uppercase tracking-wider text-purple-400 font-bold">
                  Adresse électronique directe
                </p>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded border border-border hover:border-purple-500 hover:text-purple-300 transition-colors cursor-pointer"
                >
                  {copied ? "Copié !" : "Copier"}
                </button>
              </div>

              <a
                href={`mailto:${profile.email}`}
                className="group block font-display-wide text-2xl sm:text-4xl lg:text-[2.6vw] font-bold text-ink tracking-tight hover:text-purple-300 transition-colors break-words leading-tight"
              >
                {profile.email}
                <span className="block h-0.5 w-full bg-border group-hover:bg-purple-500 transition-all duration-300 mt-4" />
              </a>
            </div>

            {/* Liens cliquables avec flèche active */}
            <div className="divide-y divide-border border-y border-border">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group py-5 flex items-center justify-between text-ink hover:text-purple-400 transition-colors cursor-pointer"
                >
                  <span className="font-mono text-xs uppercase tracking-wider text-ink/60 group-hover:text-purple-300">
                    {link.label}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-semibold">{link.value}</span>
                    <span className="font-mono text-xs transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Colonne droite : Formulaire */}
          <div className="lg:col-span-6 p-6 md:p-12 bg-card/10">
            <p className="font-mono text-xs uppercase tracking-wider text-purple-400 font-bold mb-8">
              Formulaire de transmission direct
            </p>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Footer technique */}
      <footer className="w-full border-t border-border px-6 py-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-ink/50 bg-paper">
        <div>© {new Date().getFullYear()} {profile.name} · 42 Mulhouse</div>
        <div className="flex items-center gap-8">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors">
            GitHub ↗
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors">
            LinkedIn ↗
          </a>
          <a href="#top" className="hover:text-purple-400 transition-colors">
            Retour en haut ↑
          </a>
        </div>
      </footer>
    </section>
  );
}