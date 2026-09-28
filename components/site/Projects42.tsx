"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { projects42 } from "@/data/projects";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function Projects42() {
  const root = useRef<HTMLElement>(null);
  const [activeSlug, setActiveSlug] = useState<string | null>("ft-transcendence");

  // Animation d'apparition globale (Cascade GSAP)
  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !root.current) return;

    const ctx = gsap.context(() => {
      // 1. Entrée échelonnée des lignes de projets
      gsap.from("[data-project-row]", {
        y: 45,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 75%",
          once: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  // Gestion du Tilt 3D par élément
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    
    // Position normalisée entre -1 et 1
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

    // Déplacement subtil : 4° max en Y, 3° max en X
    gsap.to(target, {
      rotateY: x * 3.5,
      rotateX: -y * 2.5,
      transformPerspective: 1000,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    gsap.to(target, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return (
    <section ref={root} id="projets-42" className="border-t border-border w-full bg-paper overflow-hidden">
      {/* En-tête pleine largeur */}
      <div className="w-full flex items-center justify-between px-6 md:px-12 py-5 border-b border-border font-mono text-xs uppercase tracking-wider text-ink/60">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
          (03) Réalisations · Cursus 42
        </span>
        <span>{pad(projects42.length)} Projets Validés</span>
      </div>

      {/* Titre monumental pleine largeur */}
      <div className="w-full px-6 md:px-12 py-12 md:py-16 border-b border-border flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <h2 className="font-display font-black uppercase tracking-tight text-ink text-[11vw] sm:text-[9vw] lg:text-[7.5vw] leading-[0.88]">
          Projets <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-400 to-indigo-400">
            Systèmes & Infra
          </span>
        </h2>
        <p className="max-w-xl font-mono text-xs sm:text-sm text-ink/70 leading-relaxed lg:pb-2">
          Virtualisation conteneurisée, protocoles réseaux bas niveau, concurrence POSIX et architectures d&apos;agents validés sur le cursus 42 Mulhouse.
        </p>
      </div>

      {/* Lignes interactives de projets (bord à bord) */}
      <div className="w-full divide-y divide-border border-b border-border [perspective:1000px]">
        {projects42.map((p, i) => {
          const isOpened = activeSlug === p.slug;
          const hasImages = Boolean(p.images && p.images.length > 0);

          return (
            <div
              key={p.slug}
              data-project-row
              className={`group relative overflow-hidden transition-colors duration-500 will-change-transform ${
                isOpened ? "bg-purple-950/20" : ""
              }`}
            >
              {/* Effet d'ambiance au survol */}
              <div
                aria-hidden
                className={`pointer-events-none absolute inset-0 -z-10 transition-all duration-700 ease-out ${
                  isOpened
                    ? "opacity-60 scale-100"
                    : "opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-105"
                }`}
              >
                <div className="absolute -top-1/2 left-1/4 h-[200%] w-1/2 bg-gradient-to-r from-purple-600/30 via-fuchsia-500/35 to-indigo-600/30 blur-3xl" />
                <div className="absolute -bottom-1/2 right-10 h-[180%] w-1/3 bg-gradient-to-l from-violet-600/25 via-purple-700/20 to-transparent blur-2xl" />
              </div>

              {/* Bordure lumineuse d'accent à gauche */}
              <span className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-purple-400 via-fuchsia-400 to-indigo-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top shadow-[0_0_15px_rgba(168,85,247,0.9)]" />

              <button
                type="button"
                onClick={() => setActiveSlug(isOpened ? null : p.slug)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="w-full py-8 md:py-12 px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-6 text-left cursor-pointer transition-all relative z-10 [transform-style:preserve-3d]"
              >
                <div className="flex items-baseline gap-6 md:gap-12 transition-transform duration-300 group-hover:translate-x-3">
                  <span className="font-mono text-base md:text-xl text-purple-400 font-bold group-hover:text-fuchsia-300 transition-colors">
                    {pad(i + 1)}
                  </span>
                  <div>
                    <h3 className="font-display-wide text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-ink group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-purple-200 group-hover:to-fuchsia-300 transition-all uppercase">
                      {p.title}
                    </h3>
                    <p className="mt-2 font-mono text-xs sm:text-sm text-ink/60 group-hover:text-ink/80 transition-colors">
                      {p.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 self-start md:self-center font-mono text-xs">
                  <span className="hidden sm:inline-block px-4 py-2 rounded-full border border-border text-ink/80 bg-card/60 backdrop-blur-sm group-hover:border-purple-500/50 group-hover:text-purple-300 transition-colors">
                    {p.context}
                  </span>
                  <span
                    className={`text-purple-400 font-mono text-2xl transition-all duration-300 ${
                      isOpened ? "rotate-90 text-fuchsia-400" : "group-hover:translate-x-1.5 group-hover:text-fuchsia-300"
                    }`}
                  >
                    →
                  </span>
                </div>
              </button>

              {/* Volet dépliable : layout pleine largeur */}
              {isOpened && (
                <div className="pb-12 pt-6 px-6 md:px-12 border-t border-border/60 relative z-10 bg-paper/70 backdrop-blur-md animate-in fade-in duration-300">
                  <div className={`grid gap-12 ${hasImages ? "lg:grid-cols-12" : "grid-cols-1"}`}>
                    
                    {/* Bloc texte, highlights et liens */}
                    <div className={hasImages ? "lg:col-span-6 space-y-6" : "max-w-5xl space-y-6"}>
                      <p className="text-base sm:text-lg leading-relaxed text-ink/90">
                        {p.description}
                      </p>

                      {p.highlights && (
                        <div className="space-y-3 pt-2">
                          <p className="font-mono text-xs uppercase tracking-wider text-purple-400 font-bold">
                            Architecture & Compétences validées :
                          </p>
                          <ul className="space-y-2.5 font-mono text-xs sm:text-sm text-ink/80">
                            {p.highlights.map((h, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <span className="text-purple-400 font-bold mt-0.5">›</span>
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Stack technique */}
                      <div className="pt-2">
                        <p className="font-mono text-xs uppercase tracking-wider text-ink/50 mb-3">
                          Environnement technique
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {p.stack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3.5 py-1.5 rounded-md bg-purple-500/15 border border-purple-500/30 font-mono text-xs text-purple-300 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 flex flex-wrap items-center gap-3">
                        {p.links?.github && (
                          <a
                            href={p.links.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 font-mono text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 px-6 py-3.5 rounded-lg transition-all shadow-lg shadow-purple-600/30 active:scale-95"
                          >
                            Consulter le repository GitHub ↗
                          </a>
                        )}
                        {p.links?.site && (
                          <a
                            href={p.links.site}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 font-mono text-xs font-bold text-ink border border-border hover:border-purple-500 px-6 py-3.5 rounded-lg transition-all bg-card/40 active:scale-95"
                          >
                            Démo en ligne ↗
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Bloc Galerie d'images */}
                    {hasImages && (
                      <div className="lg:col-span-6 flex flex-col justify-start gap-4 lg:border-l lg:border-border/60 lg:pl-10">
                        <p className="font-mono text-xs uppercase tracking-wider text-ink/50">
                          Aperçu de l&apos;interface & infrastructure
                        </p>
                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border bg-black/40 shadow-2xl shadow-purple-950/40">
                          <Image
                            src={p.images![0]}
                            alt={p.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-contain sm:object-cover"
                          />
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}