"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { profile } from "@/data/projects";
import photo from "@/public/nicolas.jpg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const marqueeItems = [
  "Linux (Debian)",
  "Docker & Compose",
  "Bash Scripting",
  "Python",
  "C (Bas Niveau)",
  "Réseaux TCP/IP & SSH",
  "CI/CD & DevOps",
  "Architecture RAG & LLM",
  "Multithreading & IPC",
  "Sécurisation UFW",
];

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const name1Ref = useRef<HTMLSpanElement>(null);
  const name2Ref = useRef<HTMLSpanElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-fade]", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.to(name1Ref.current, {
        x: -35,
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(name2Ref.current, {
        x: 40,
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(photoRef.current, {
        y: 45,
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="top" className="relative min-h-[95vh] flex flex-col justify-between px-6 pb-8 pt-28 md:px-12 md:pt-36 overflow-hidden">
      {/* Halo violet profond */}
      <div 
        aria-hidden 
        className="pointer-events-none absolute -top-32 left-1/3 w-[650px] h-[380px] bg-gradient-to-tr from-purple-700/25 via-violet-600/20 to-fuchsia-600/10 blur-[130px] rounded-full"
      />

      {/* Barre de statut avec la pastille dispo */}
      <div data-fade className="relative z-10 max-w-7xl w-full mx-auto flex flex-wrap items-center justify-between gap-4 font-mono text-xs md:text-sm text-ink/70 border-b border-border/80 pb-5">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="font-semibold text-emerald-600 dark:text-emerald-400">
            Disponible pour alternance dès {profile.alternance.start}
          </span>
        </div>
        <span className="font-medium text-ink/80">
          École 42 Mulhouse · {profile.location}
        </span>
      </div>

      {/* Titre déstructuré */}
      <div className="relative z-10 max-w-7xl w-full mx-auto my-10 md:my-14">
        <div data-fade className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-10">
          <div className="flex-1 select-none">
            {/* Ton tag personnalisé avec padding élargi */}
            <div className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-300 font-mono text-xs md:text-sm font-semibold mb-6 shadow-sm shadow-purple-500/10">
              <span>(01) {profile.role}</span>
            </div>

            <div className="space-y-1 md:space-y-2">
              <span
                ref={name1Ref}
                className="block font-display text-6xl sm:text-8xl lg:text-[7.5rem] tracking-tight text-ink uppercase leading-none"
              >
                Nicolas
              </span>
              <span
                ref={name2Ref}
                className="block font-display-wide text-5xl sm:text-7xl lg:text-[6.5rem] tracking-wide uppercase leading-none pl-6 sm:pl-16 md:pl-24 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-400 to-fuchsia-400"
              >
                Barbosa
              </span>
            </div>

            <p className="mt-8 text-lg sm:text-2xl font-light text-ink/80 max-w-2xl leading-relaxed">
              Conception d&apos;infrastructures fiables, automatisation conteneurisée et programmation système au cœur du cursus 42.
            </p>
          </div>

          <div ref={photoRef} className="relative group shrink-0 self-start lg:self-center">
            <div 
              aria-hidden 
              className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-purple-600 to-fuchsia-500 opacity-25 blur-2xl transition duration-700 group-hover:opacity-60"
            />
            <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden border-2 border-border bg-card shadow-2xl">
              <Image
                src={photo}
                alt={profile.name}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Section Alternance & Actions */}
        <div data-fade className="mt-12 pt-8 border-t border-border/80 grid gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6 space-y-3">
            <div className="inline-block px-3 py-1 rounded bg-purple-500/10 text-purple-600 dark:text-purple-300 font-mono text-xs font-bold uppercase tracking-wider">
              Alternance 24 mois
            </div>
            <p className="text-xl font-semibold text-ink">
              Titre Expert en architecture informatique (RNCP 7 / Bac+5)
            </p>
            <p className="text-sm font-mono text-ink/60">
              Rythme 3 sem. entreprise / 1 sem. école · Dès {profile.alternance.start}
            </p>
          </div>

          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-3 font-mono text-xs uppercase tracking-wider font-bold">
            <a
              href="#projets-42"
              className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3.5 rounded-lg transition-all shadow-md shadow-purple-600/20 active:scale-95"
            >
              Projets & Réalisations ↓
            </a>
            <a
              href={profile.cv}
              target="_blank"
              rel="noreferrer"
              className="border border-border hover:border-purple-500 hover:text-purple-400 px-5 py-3.5 rounded-lg transition-all text-ink active:scale-95 bg-paper/60"
            >
              CV (PDF) ↗
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="border border-border hover:border-purple-500 hover:text-purple-400 px-5 py-3.5 rounded-lg transition-all text-ink active:scale-95 bg-paper/60"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>

      {/* BANDEAU DÉFILANT CONTINU (FLUX TECHNIQUE) */}
      <div data-fade className="relative z-10 max-w-7xl w-full mx-auto pt-6 border-t border-border/80 pointer-events-none select-none">
        <div className="relative overflow-hidden py-3 rounded-xl border border-purple-500/20 bg-purple-950/10 backdrop-blur-sm [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee gap-8 items-center">
            {[...marqueeItems, ...marqueeItems].map((item, idx) => (
              <div key={idx} className="flex items-center gap-6 font-mono text-xs sm:text-sm uppercase tracking-wider text-ink/75 shrink-0">
                <span className="font-medium">
                  {item}
                </span>
                <span className="h-1.5 w-1.5 rotate-45 bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}