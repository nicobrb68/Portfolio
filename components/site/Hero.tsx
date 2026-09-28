"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { profile } from "@/data/projects";
import photo from "@/public/nicolas.jpg";
import LightPillar from "@/components/ui/light-pillar";

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
        x: -45,
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(name2Ref.current, {
        x: 55,
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(photoRef.current, {
        y: 40,
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
    <section
      ref={root}
      id="top"
      className="relative min-h-screen w-full flex flex-col justify-between pt-20 pb-8 overflow-hidden bg-paper"
    >
      {/* Faisceau lumineux diagonal en arrière-plan */}
      <div 
        aria-hidden 
        className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden"
      >
           
        <LightPillar
          topColor="#c084fc"
          bottomColor="#4c1d95"
          intensity={0.17}
          rotationSpeed={0.4}
          pillarWidth={4.5}
          pillarRotation={25}
          interactive={true}
        />
      </div>

      <div className="w-full flex-1 flex flex-col justify-between relative z-10">
        
        {/* Bandeau statut haut */}
        <div data-fade className="w-full flex items-center justify-between px-6 md:px-12 py-4 font-mono text-xs uppercase tracking-wider text-ink/70 border-b border-border bg-paper/40 backdrop-blur-[2px]">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
              Disponible pour alternance dès {profile.alternance.start}
            </span>
          </div>
          <span className="font-medium text-ink/80 hidden sm:inline">
            École 42 Mulhouse · {profile.location}
          </span>
          <span className="text-purple-400 font-bold">
            (01) Portfolio
          </span>
        </div>

        {/* Cœur du Hero */}
        <div data-fade className="w-full px-6 md:px-12 my-8 md:my-12">
          
          {/* Titre de rôle valorisé en grand format */}
          <div className="mb-6 flex items-center gap-3 font-mono">
            <span className="text-purple-400 font-bold text-sm sm:text-base">[01.0]</span>
            <h1 className="text-sm sm:text-base md:text-xl font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">
              {profile.role}
            </h1>
          </div>

          <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-10">
            <div className="flex-1 select-none">
              <div className="space-y-1">
                <span
                  ref={name1Ref}
                  className="block font-display text-[13.5vw] lg:text-[10.5vw] tracking-tight text-ink uppercase leading-[0.82]"
                >
                  Nicolas
                </span>
                <span
                  ref={name2Ref}
                  className="block font-display-wide text-[12vw] lg:text-[9.5vw] tracking-wide uppercase leading-[0.85] pl-4 sm:pl-16 md:pl-28 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-400 to-fuchsia-400"
                >
                  Barbosa
                </span>
              </div>

              {/* Accroche technique */}
              <div className="mt-8 border-l-2 border-purple-500/60 pl-6 py-2 max-w-4xl">
                <p className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-ink/80 leading-snug">
                  Du <span className="text-ink font-semibold">bas niveau en C</span> aux{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 font-bold">
                    microservices Docker
                  </span>{" "}
                  : conteneurisation, automatisation système, intégration LLM et architectures fiables.
                </p>
              </div>
            </div>

            {/* Photo grand format */}
            <div ref={photoRef} className="relative group shrink-0 self-start lg:self-center">
              <div 
                aria-hidden 
                className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-purple-600 to-fuchsia-500 opacity-25 blur-3xl transition duration-700 group-hover:opacity-50"
              />
              <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-3xl overflow-hidden border-2 border-border bg-card shadow-2xl">
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
        </div>

        {/* Bandeau d'alternance & actions */}
        <div data-fade className="w-full border-t border-border grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border bg-paper/60 backdrop-blur-[2px]">
          <div className="lg:col-span-6 px-6 md:px-12 py-6 flex flex-col justify-center gap-1">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-400">
              Alternance 24 mois · Dès {profile.alternance.start}
            </span>
            <p className="text-lg md:text-xl font-semibold text-ink">
              Titre Expert en architecture informatique (RNCP 7 / Master Bac+5)
            </p>
            <p className="text-xs font-mono text-ink/50">
              Rythme 3 sem. entreprise / 1 sem. école
            </p>
          </div>

          <div className="lg:col-span-6 px-6 md:px-12 py-6 flex flex-wrap items-center justify-start lg:justify-end gap-3 font-mono text-xs uppercase tracking-wider font-bold">
            <a
              href="#projets-42"
              className="bg-purple-600 hover:bg-purple-500 text-white px-7 py-4 rounded-lg transition-all shadow-md shadow-purple-600/20 active:scale-95"
            >
              Projets & Réalisations ↓
            </a>
            <a
              href={profile.cv}
              target="_blank"
              rel="noreferrer"
              className="border border-border hover:border-purple-500 hover:text-purple-400 px-6 py-4 rounded-lg transition-all text-ink active:scale-95 bg-card/40"
            >
              CV (PDF) ↗
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="border border-border hover:border-purple-500 hover:text-purple-400 px-6 py-4 rounded-lg transition-all text-ink active:scale-95 bg-card/40"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>

      {/* Marquee défilant */}
      <div data-fade className="w-full pt-6 border-t border-border select-none pointer-events-none relative z-10">
        <div className="w-full overflow-hidden py-3 bg-purple-950/10 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="animate-marquee gap-8 items-center">
            {[...marqueeItems, ...marqueeItems].map((item, idx) => (
              <div key={idx} className="flex items-center gap-6 font-mono text-xs sm:text-sm uppercase tracking-wider text-ink/75 shrink-0">
                <span className="font-medium">{item}</span>
                <span className="h-1.5 w-1.5 rotate-45 bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}