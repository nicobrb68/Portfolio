// Source unique du contenu du portfolio : projets, parcours, profil.
// L'ordre des tableaux est l'ordre d'affichage.

export type ProjectTag = "web" | "backend" | "ia" | "systemes" | "mobile" | "devops";

export type Project = {
  slug: string;
  title: string;
  /** Mis en avant (grande carte avec détails) ou carte compacte */
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
  /** Captures d'écran dans /public/projects (la première est l'image principale) */
  images?: string[];
};

export type Experience = {
  period: string;
  title: string;
  place: string;
  description?: string;
  highlights?: string[];
  /** Ligne discrète, sans détails */
  minor?: boolean;
};

export const profile = {
  name: "Nicolas Barbosa",
  role: "Développeur logiciel",
  focus: ["DevOps", "Backend", "Systèmes & IA"],
  status: "En recherche d'alternance / stage",
  alternance: {
    start: "2027",
    rhythm: "3 semaines en entreprise / 1 semaine à l'école",
    duration: "2 ans",
  },
  location: "Grand-Est",
  email: "nicolas.barbosa68210@gmail.com",
  phone: "",
  linkedin: "https://www.linkedin.com/in/nicolas-barbosa68",
  github: "https://github.com/nicobrb68",
  cv: "/CV_Barbosa_Nicolas_Devops.pdf",
  birthDate: "1998-10-04",
  languages: ["Français (natif)", "Anglais (technique)"],
  interests: ["Développement logiciel", "Nouvelles technologies", "Open source"],
};

export const skills = {
  Langages: ["C", "Rust", "Python", "TypeScript", "JavaScript", "SQL", "Bash"],
  Frameworks: ["React", "Next.js", "Fastify", "Node.js"],
  Architecture: ["Microservices", "Clean Architecture", "TDD", "REST / WebSocket"],
  "IA & LLM": ["Agents", "RAG", "Function calling", "MCP"],
  "Outils & infra": ["Docker", "Docker Compose", "Linux", "PostgreSQL", "Git"],
};

export const experiences: Experience[] = [
  {
    period: "2025 — aujourd'hui",
    title: "Étudiant — 42 Next",
    place: "École 42 Mulhouse",
    description:
      "Tronc commun en peer learning et peer evaluation, sans cours ni professeurs. Algorithmique en C, Rust et Python, concurrence, systèmes d'IA, conteneurisation Docker, réseaux TCP/IP. En tête d'avancement de promotion.",
  },
  {
    period: "2024 — 2025",
    title: "Parcours informatique & développement",
    place: "En autodidacte & formation",
    minor: true,
  },
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
    links: { github: "" },
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
  {
    slug: "netpractice",
    title: "NetPractice",
    featured: false,
    period: "Juin 2026",
    context: "42",
    tagline: "Configuration et routage réseau IPv4.",
    description: "Résolution de problématiques d'adressage IP, calcul de masques et tables de routage.",
    highlights: ["Subnetting IPv4", "Routage statique"],
    stack: ["TCP/IP"],
    tags: ["systemes"],
    links: { github: "https://github.com" },
  },
];

// Projets personnels ou externes (optionnel)
export const projectsPro: Project[] = [];