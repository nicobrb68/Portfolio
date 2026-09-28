"use client";

import { useState } from "react";
import { profile } from "@/data/projects";

const categories = [
  {
    title: "Systèmes & Cloud",
    tag: "01",
    skills: profile.skills.systemAndCloud,
    description:
      "Environnements virtualisés, durcissement Debian, gestion des permissions POSIX et conteneurisation isolée.",
  },
  {
    title: "Scripting & Langages",
    tag: "02",
    skills: profile.skills.scriptingAndCode,
    description:
      "Développement bas niveau en C avec gestion mémoire rigoureuse, automatisation Bash et outillage Python.",
  },
  {
    title: "Réseaux & Sécurité",
    tag: "03",
    skills: profile.skills.networkAndSecurity,
    description:
      "Sockets TCP/IP, tunnels SSH, filtrage pare-feu UFW, reverse proxying et contrôle de version distribué sous Git.",
  },
  {
    title: "DevOps & Déploiement",
    tag: "04",
    skills: profile.skills.devopsAndArch,
    description:
      "Pipelines CI/CD, orchestration multi-conteneurs Docker Compose, isolation réseau et résilience de services.",
  },
  {
    title: "Intelligence Artificielle & Outils",
    tag: "05",
    skills: profile.skills.aiAndTools,
    description:
      "Architectures RAG, vectorisation, intégration de LLM locaux/API et chaînes de traitement automatisées.",
  },
];

function CategoryRow({ cat }: { cat: (typeof categories)[0] }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-6 md:p-12 transition-colors duration-300 space-y-6 overflow-hidden group"
    >
      {/* Spotlight radial améthyste qui suit le curseur */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(168, 85, 247, 0.12), transparent 70%)`,
        }}
      />

      <div className="relative z-10 flex items-baseline justify-between gap-4">
        <span className="font-mono text-xs text-purple-400 font-bold group-hover:text-fuchsia-300 transition-colors">
          [{cat.tag}]
        </span>
        <span className="font-mono text-[11px] uppercase tracking-wider text-ink/40">
          Production ready
        </span>
      </div>

      <div className="relative z-10">
        <h4 className="font-display-wide text-2xl sm:text-3xl font-bold text-ink uppercase tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-purple-200 group-hover:to-fuchsia-300 transition-all">
          {cat.title}
        </h4>
        <p className="mt-2 font-mono text-xs sm:text-sm text-ink/70 leading-relaxed">
          {cat.description}
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap gap-2 pt-2">
        {cat.skills.map((skill) => (
          <span
            key={skill}
            className="px-3.5 py-1.5 rounded bg-purple-500/10 border border-purple-500/20 font-mono text-xs text-purple-300 font-medium transition-all duration-200 hover:bg-purple-500/25 hover:border-purple-400/50 hover:text-white hover:scale-105 cursor-default select-none shadow-sm hover:shadow-[0_0_12px_rgba(168,85,247,0.3)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="border-t border-border w-full bg-paper">
      {/* En-tête pleine largeur */}
      <div className="w-full flex items-center justify-between px-6 md:px-12 py-5 border-b border-border font-mono text-xs uppercase tracking-wider text-ink/60">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
          (04) Environnement & Compétences
        </span>
        <span>Stack Technique</span>
      </div>

      {/* Titre pleine largeur */}
      <div className="w-full px-6 md:px-12 py-12 md:py-16 border-b border-border flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <h2 className="font-display font-black uppercase tracking-tight text-ink text-[11vw] sm:text-[9vw] lg:text-[7.5vw] leading-[0.88]">
          Stack & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-400 to-indigo-400">
            Technologies
          </span>
        </h2>
        <p className="max-w-xl font-mono text-xs sm:text-sm text-ink/70 leading-relaxed lg:pb-2">
          Un socle axé sur la fiabilité des systèmes, la rigueur mémoire et l&apos;automatisation moderne via conteneurs et agents.
        </p>
      </div>

      {/* Grille : Colonne gauche STICKY + Colonne droite qui défile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-border items-start">
        
        {/* Colonne gauche ÉPINGLÉE (Sticky) */}
        <div className="lg:col-span-5 p-6 md:p-12 lg:sticky lg:top-24 border-b lg:border-b-0 lg:border-r border-border space-y-6">
          <div className="font-mono text-xs font-bold uppercase tracking-wider text-purple-400">
            [04.1] Philosophie d&apos;ingénierie
          </div>
          
          <h3 className="font-display-wide text-2xl sm:text-3xl font-bold text-ink leading-tight">
            Comprendre le système jusqu&apos;au noyau, automatiser le reste.
          </h3>

          <p className="font-mono text-xs sm:text-sm text-ink/70 leading-relaxed">
            Pas de boîte noire. La maîtrise des allocations mémoires en C et des protocoles réseaux fondamentaux permet de concevoir des conteneurs légers, fiables et parfaitement isolés pour la production.
          </p>

          <div className="border-t border-border pt-6 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-ink/70">
              <span className="text-ink/50">Noyau de prédilection :</span>
              <span className="text-purple-400 font-semibold">Linux / Debian</span>
            </div>
            <div className="flex items-center justify-between text-ink/70">
              <span className="text-ink/50">Isolation d&apos;exécution :</span>
              <span className="text-ink font-semibold">Docker & Compose</span>
            </div>
            <div className="flex items-center justify-between text-ink/70">
              <span className="text-ink/50">Contrôle qualité :</span>
              <span className="text-emerald-400 font-semibold">Valgrind / AddressSanitizer</span>
            </div>
          </div>
        </div>

        {/* Colonne droite QUI DÉFILE (Les 5 catégories) */}
        <div className="lg:col-span-7 divide-y divide-border">
          <div className="p-6 md:px-12 md:py-6 bg-card/20 font-mono text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center justify-between">
            <span>[04.2] Domaines d&apos;expertise</span>
            <span>05 Modules</span>
          </div>

          {categories.map((cat) => (
            <CategoryRow key={cat.title} cat={cat} />
          ))}
        </div>

      </div>
    </section>
  );
}