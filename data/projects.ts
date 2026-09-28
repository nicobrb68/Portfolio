// Source unique du contenu du portfolio : projets, parcours, profil.
// L'ordre des tableaux est l'ordre d'affichage.

export type ProjectTag = "web" | "backend" | "ia" | "systemes" | "mobile" | "devops";

export type Project = {
  slug: string;
  title: string;
  featured: boolean;
  period: string;
  status?: "en-cours" | "production";
  context: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  tags: ProjectTag[];
  links?: { site?: string; github?: string };
  images?: string[];
};

export type Experience = {
  period: string;
  title: string;
  place: string;
  description?: string;
  highlights?: string[];
  minor?: boolean;
};

export const profile = {
  name: "Nicolas Barbosa",
  role: "Étudiant Développeur & DevOps / Data et IA",
  titleTarget: "Expert en architecture informatique (RNCP 7 / Master Bac+5)",
  location: "Saint-Louis, France",
  phone: "06 32 50 35 56",
  birthdate: "1998-10-04",
  email: "nicolas.barbosa68210@gmail.com",
  cv: "/CV_Barbosa_Nicolas_Devops.pdf",
  github: "https://github.com/nicobrb68",
  linkedin: "https://www.linkedin.com/in/nicolas-barbosa-4b928320b/",
  alternance: {
    start: "Janvier 2027",
    duration: "24 mois",
    rhythm: "3 sem. entreprise / 1 sem. école",
  },
  skills: {
    systemAndCloud: ["Linux (Debian)", "Docker", "Docker Compose"],
    scriptingAndCode: ["Bash", "Python", "C", "SQL"],
    networkAndSecurity: ["SSH", "UFW", "Git"],
    aiAndTools: ["Intégration LLM", "APIs", "RAG"],
    devopsAndArch: ["CI/CD", "Orchestration de conteneurs", "Monitoring"],
  },
  languages: ["Français (Natif)", "Anglais (B2)"],
  interests: ["Football", "Voyage", "Padel"],
};

export const experiences: Experience[] = [
  {
    period: "Jul 2025 — Aujourd'hui",
    title: "Formation Expert en Architecture Informatique",
    place: "42 Mulhouse · RNCP 7 / Master Bac+5",
    description:
      "Formation d'ingénierie intensive basée sur la pratique, le peer-learning et la résolution de problématiques complexes sans cours magistraux.",
    highlights: [
      "Systèmes & Virtualisation : Installation et durcissement d'environnements Linux (Debian) sous machine virtuelle.",
      "Conteneurisation & Déploiement : Conception et orchestration de microservices isolés avec Docker & Docker Compose.",
      "Automatisation & Scripting : Écriture de scripts Bash et Python pour automatiser les tâches système, builds et validations de données.",
      "Développement Système & Rigueur : Implémentation d'algorithmes et gestion bas niveau de la mémoire en C.",
      "Projets IA & Automatisation : Expérimentations et intégration d'APIs de LLM / agents IA pour des pipelines d'automatisation.",
      "Architecture de données & RAG : Structuration de données textuelles, vectorisation et mise en place d'un pipeline RAG pour l'indexation contextuelle.",
      "Programmation concurrente & IPC : Gestion du multithreading, synchronisation par mutex et communication inter-processus en C.",
    ],
    minor: false,
  },
  {
    period: "Feb 2024 — Feb 2025",
    title: "Maintenance de voiliers",
    place: "Sandringham Marine · Melbourne, Australie",
    description:
      "Immersion totale en milieu anglophone technique (anglais professionnel opérationnel au quotidien).",
    highlights: [
      "Environnement international et travail en autonomie.",
      "Rigueur technique et maintenance préventive.",
    ],
    minor: false,
  },
  {
    period: "Apr 2019 — Jan 2024",
    title: "Horlogerie",
    place: "Termitech · Alle, Suisse",
    description:
      "Respect scrupuleux des cahiers des charges et des processus de fabrication haut de gamme.",
    highlights: [
      "Précision micromécanique et tolérances strictes.",
      "Rigueur méthodologique et contrôle qualité constant.",
    ],
    minor: false,
  },
  {
    period: "Sep 2016 — Mar 2019",
    title: "Boulanger",
    place: "France & Suisse",
    description: "Fabrication, suivi rigoureux des recettes et contrôle qualité.",
    minor: true,
  },
];

export const education = [
  { title: "Formation Expert en Architecture Informatique (RNCP 7 / Bac+5)", place: "42 Mulhouse", period: "2025 — En cours" },
  { title: "CAP Pâtissier", place: "France", period: "2018" },
  { title: "CAP Chocolatier-Confiseur", place: "France", period: "2017" },
  { title: "CAP Boulanger", place: "France", period: "2016" },
];

export const projects42: Project[] = [
  {
    slug: "ft-transcendence",
    title: "ft_transcendence",
    featured: true,
    period: "Sept. 2026 — en cours",
    status: "en-cours",
    context: "Projet final du tronc commun 42 — en équipe",
    tagline: "Un UNO multijoueur en temps réel, pensé comme une vraie plateforme.",
    description:
      "Projet de fin de tronc commun : une application web complète autour d'un UNO jouable en ligne à plusieurs, avec comptes, amis, chat et parties en temps réel. Architecture en microservices derrière une gateway, développée en équipe avec un workflow Git rigoureux.",
    highlights: [
      "Microservices : auth, user, game, chat, gateway",
      "Authentification JWT, schéma Prisma et migrations PostgreSQL",
      "Types partagés entre front et back (événements WebSocket, jeu, utilisateurs)",
      "Stack entièrement dockerisée, gestion sécurisée des secrets",
    ],
    stack: ["TypeScript", "Fastify", "Prisma", "PostgreSQL", "WebSocket", "Docker"],
    tags: ["web", "backend", "devops"],
    links: { github: "https://github.com/nicobrb68" },
    images: ["/projects/transcendence-app.png"],
  },
  {
    slug: "the-answer-protocol",
    title: "The Answer Protocol",
    featured: true,
    period: "Sept. 2026",
    context: "42 — en binôme",
    tagline: "Un MUD multijoueur en Rust : un monde partagé, en temps réel, sur TCP.",
    description:
      "Serveur de jeu multijoueur textuel implémentant le protocole RFC 42TAP. Les joueurs explorent un monde persistant, combattent des PNJ, accomplissent des quêtes et discutent en temps réel.",
    highlights: [
      "Serveur asynchrone tokio : état partagé et gestion concurrente",
      "Diffusion d'événements par salle, par groupe ou globale",
      "Client terminal avec coloration et autocomplétion",
      "Client web : Axum + WebSocket connecté au serveur TCP",
    ],
    stack: ["Rust", "tokio", "Axum", "WebSocket", "TCP"],
    tags: ["systemes", "backend"],
    links: { github: "https://github.com/nicobrb68/TheAnswerProtocol" },
    images: ["/projects/tap-jeu.webp", "/projects/tap-combat.webp", "/projects/tap-carte.webp", "/projects/tap-connexion.webp"],
  },
  {
    slug: "agent-smith",
    title: "Agent Smith",
    featured: true,
    period: "Juil. 2026",
    context: "42 — en binôme",
    tagline: "Un agent IA qui raisonne, écrit du code, l'exécute et corrige ses erreurs.",
    description:
      "Framework d'agent autonome résolvant des problèmes d'algorithmique et de code en boucle Thought → Code → Observation. L'agent exécute son code dans un environnement sécurisé et itère de manière autonome.",
    highlights: [
      "Outils exposés via Model Context Protocol (MCP)",
      "Exécution sandboxée du code généré",
      "Support multi-fournisseurs de modèles de langage (LLM)",
      "Benchmarks et tests automatisés",
    ],
    stack: ["Python", "MCP", "LLM", "Docker", "uv"],
    tags: ["ia", "backend"],
    links: { github: "https://github.com/nicobrb68/agent_smith" },
  },
  {
    slug: "pac-man",
    title: "Pac-Man",
    featured: true,
    period: "Mai 2026",
    context: "42 — en binôme",
    tagline: "Le classique de 1980, recodé en Python orienté objet.",
    description:
      "Recréation du jeu d'arcade avec architecture modulaire : intelligence artificielle autonome pour les fantômes, gestion de la boucle de jeu et progression par niveaux.",
    highlights: [
      "Machine à états finis pour les comportements de fantômes",
      "Génération procédurale de labyrinthes",
      "Code strictement typé avec mypy",
    ],
    stack: ["Python", "Pygame", "mypy"],
    tags: ["systemes"],
    links: { github: "https://github.com/nicobrb68/Pac-Man" },
    images: ["/projects/pacman-jeu.webp", "/projects/pacman-menu.webp", "/projects/pacman-scores.webp", "/projects/pacman-regles.webp"],
  },
  {
    slug: "rag-against-the-machine",
    title: "RAG against the machine",
    featured: true,
    period: "Mai — Juin 2026",
    context: "42",
    tagline: "Indexation sémantique et interrogation de code source.",
    description:
      "Système RAG (Retrieval-Augmented Generation) appliqué à un dépôt logiciel : vectorisation, indexation et interrogation assistée par un modèle local.",
    highlights: [
      "Découpage et indexation de documentation et code",
      "Recherche sémantique par similarité vectorielle",
      "Intégration d'un LLM local",
    ],
    stack: ["Python", "RAG", "LLM", "uv"],
    tags: ["ia"],
    links: { github: "https://github.com/nicobrb68/RAG" },
  },
  {
    slug: "call-me-maybe",
    title: "Call Me Maybe",
    featured: true,
    period: "Mars — Avr. 2026",
    context: "42",
    tagline: "Function calling contraint et structuré avec de petits modèles.",
    description:
      "Génération d'appels d'outils strictement structurés et fiables via décodage contraint guidé par schéma JSON.",
    highlights: [
      "Décodage contraint token par token",
      "Sortie garantie conforme au schéma",
    ],
    stack: ["Python", "LLM", "JSON Schema"],
    tags: ["ia"],
    links: { github: "https://github.com/nicobrb68/callmemaybe" },
  },
  {
    slug: "inception",
    title: "Inception",
    featured: true,
    period: "Juil. — Août 2026",
    context: "42",
    tagline: "Infrastructure multi-services conteneurisée sans images préfabriquées.",
    description:
      "Mise en place d'une infrastructure complète (NGINX, WordPress, MariaDB) avec Dockerfiles dédiés construits sur base Debian et orchestration Docker Compose.",
    highlights: [
      "Passerelle TLS avec certificat auto-signé",
      "Isolation réseau et gestion des volumes de persistance",
    ],
    stack: ["Docker", "Docker Compose", "NGINX", "MariaDB", "WordPress", "Debian"],
    tags: ["devops"],
    links: { github: "https://github.com/nicobrb68/Inception" },
  },
  {
    slug: "fly-in",
    title: "Fly-in",
    featured: false,
    period: "Avr. 2026",
    context: "42",
    tagline: "Routage de flux sous contraintes et visualisation graphique.",
    description: "Algorithme d'acheminement sous contraintes de capacité et simulation pas à pas.",
    highlights: ["Routage multi-chemins", "Moteur de simulation"],
    stack: ["Python", "Pygame"],
    tags: ["systemes"],
    links: { github: "https://github.com/nicobrb68/flyin" },
  },
  {
    slug: "a-maze-ing",
    title: "A-Maze-ing",
    featured: false,
    period: "Fév. 2026",
    context: "42 — en binôme",
    tagline: "Générateur et résolveur de labyrinthes en package Python.",
    description: "Algorithmes de génération procédurale et de résolution par recherche de chemin le plus court.",
    highlights: ["Génération avec seed", "Résolution A* / Dijkstra"],
    stack: ["Python", "mypy"],
    tags: ["systemes"],
    links: { github: "https://github.com/nicobrb68/a-maze-ing" },
  },
  {
    slug: "codexion",
    title: "Codexion",
    featured: false,
    period: "Fév. — Mars 2026",
    context: "42",
    tagline: "Gestion de concurrence et synchronisation multithread.",
    description: "Implémentation d'une solution au problème des philosophes avec gestion de sémaphores, mutex et threads POSIX.",
    highlights: ["POSIX threads et mutex", "Prévention des deadlocks"],
    stack: ["C", "pthreads"],
    tags: ["systemes"],
    links: { github: "https://github.com/nicobrb68/codexion" },
  },
  {
    slug: "push-swap",
    title: "push_swap",
    featured: false,
    period: "Janv. 2026",
    context: "42",
    tagline: "Tri de données sous contraintes d'opérations et de complexité.",
    description: "Développement d'un algorithme de tri efficace sur deux piles avec un set d'instructions limité.",
    highlights: ["Complexité optimisée", "Gestion rigoureuse de la mémoire"],
    stack: ["C"],
    tags: ["systemes"],
    links: { github: "https://github.com/nicobrb68/push-swap" },
  },
];

export const projectsPro: Project[] = [];