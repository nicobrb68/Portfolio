"use client";

const steps = [
  {
    step: "01",
    tag: "Spécification & Architecture",
    title: "Découpage & Contrats d'Interface",
    summary:
      "Avant la moindre ligne de code : cartographie des flux de données, contraintes mémoire et choix des primitives système.",
    points: [
      "Étude des limites mémoire et modélisation des structures de données",
      "Définition stricte des protocoles et contrats d'API / sockets",
      "Identification en amont des verrous et risques de concurrence (race conditions, deadlocks)",
    ],
  },
  {
    step: "02",
    tag: "Environnement & Isolation",
    title: "Conteneurisation Reproductible",
    summary:
      "Aucune divergence entre développement et exécution : les builds sont isolés, scriptés et reproductibles à l'identique.",
    points: [
      "Images Docker minimales sans dépendances superflues",
      "Isolation réseau interne et gestion sécurisée des secrets d'environnement",
      "Automatisation des scripts de provisionnement et de démarrage Bash",
    ],
  },
  {
    step: "03",
    tag: "Qualité & Audit Bas Niveau",
    title: "Validation Mémoire & Peer-Review",
    summary:
      "La rigueur 42 appliquée au système : aucun leak toléré, zéro comportement indéfini, passage obligatoire par la relecture croisée.",
    points: [
      "Audits d'allocation systématiques (Valgrind, AddressSanitizer, -Wall -Wextra -Werror)",
      "Tests de charge, signaux d'arrêt POSIX et gestion des cas d'erreur extrêmes",
      "Validation croisée par les pairs avant intégration finale",
    ],
  },
  {
    step: "04",
    tag: "Déploiement & Exploitation",
    title: "Résilience & Mise en Production",
    summary:
      "Un service opérationnel doit pouvoir tolérer les pannes, redémarrer de manière autonome et exposer un point d'accès durci.",
    points: [
      "Passerelle inverse NGINX TLS avec certificats HTTPS et durcissement UFW",
      "Persistance garantie via volumes conteneurisés et sauvegardes",
      "Supervision des conteneurs et politique de redémarrage autonome",
    ],
  },
];

export default function Methodology() {
  return (
    <section id="methodologie" className="border-t border-border w-full bg-paper">
      {/* En-tête pleine largeur */}
      <div className="w-full flex items-center justify-between px-6 md:px-12 py-5 border-b border-border font-mono text-xs uppercase tracking-wider text-ink/60">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
          (05) Workflow d&apos;ingénierie
        </span>
        <span>Standard de production</span>
      </div>

      {/* Titre pleine largeur */}
      <div className="w-full px-6 md:px-12 py-12 md:py-16 border-b border-border flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <h2 className="font-display font-black uppercase tracking-tight text-ink text-[11vw] sm:text-[9vw] lg:text-[7.5vw] leading-[0.88]">
          Méthodologie & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-400 to-indigo-400">
            Rigueur
          </span>
        </h2>
        <p className="max-w-xl font-mono text-xs sm:text-sm text-ink/70 leading-relaxed lg:pb-2">
          Transposer la discipline du peer-learning et l&apos;exigence du développement système bas niveau dans le cycle de vie de chaque déploiement.
        </p>
      </div>

      {/* Grille : Colonne gauche STICKY + Colonne droite qui défile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-border items-start">
        
        {/* Colonne gauche ÉPINGLÉE (Sticky) */}
        <div className="lg:col-span-5 p-6 md:p-12 lg:sticky lg:top-24 border-b lg:border-b-0 lg:border-r border-border space-y-6">
          <div className="font-mono text-xs font-bold uppercase tracking-wider text-purple-400">
            [05.1] Culture de production
          </div>

          <h3 className="font-display-wide text-2xl sm:text-3xl font-bold text-ink leading-tight">
            Chaque allocation a son free, chaque service son isolation.
          </h3>

          <p className="font-mono text-xs sm:text-sm text-ink/70 leading-relaxed">
            Le développement à l&apos;École 42 apprend à ne rien déléguer au hasard : pas de bibliothèques opaques sans comprendre le code, gestion rigoureuse des erreurs système et relecture systématique par d&apos;autres développeurs.
          </p>

          <div className="border-t border-border pt-6 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-ink/70">
              <span className="text-ink/50">Tolérance aux leaks :</span>
              <span className="text-emerald-400 font-semibold">0 octet (Valgrind OK)</span>
            </div>
            <div className="flex items-center justify-between text-ink/70">
              <span className="text-ink/50">Processus de validation :</span>
              <span className="text-ink font-semibold">Peer-Evaluation 42</span>
            </div>
            <div className="flex items-center justify-between text-ink/70">
              <span className="text-ink/50">Cible de déploiement :</span>
              <span className="text-purple-400 font-semibold">Environnements isolés</span>
            </div>
          </div>
        </div>

        {/* Colonne droite QUI DÉFILE (Les 4 étapes du cycle) */}
        <div className="lg:col-span-7 divide-y divide-border">
          <div className="p-6 md:px-12 md:py-6 bg-card/20 font-mono text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center justify-between">
            <span>[05.2] Cycle de vie & validation</span>
            <span>04 Phases</span>
          </div>

          {steps.map((s) => (
            <div
              key={s.step}
              className="p-6 md:p-12 hover:bg-purple-950/10 transition-colors space-y-6"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-mono text-base md:text-lg text-purple-400 font-bold">
                  [{s.step}]
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-purple-300/80 bg-purple-500/10 px-3 py-1 rounded border border-purple-500/20">
                  {s.tag}
                </span>
              </div>

              <div>
                <h4 className="font-display-wide text-2xl sm:text-3xl font-bold text-ink uppercase tracking-tight">
                  {s.title}
                </h4>
                <p className="mt-2 font-mono text-xs sm:text-sm text-ink/70 leading-relaxed">
                  {s.summary}
                </p>
              </div>

              <ul className="space-y-2.5 font-mono text-xs text-ink/80 border-l border-purple-500/40 pl-4 pt-1">
                {s.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-purple-400 font-bold">›</span>
                    <span>{pt}</span>
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