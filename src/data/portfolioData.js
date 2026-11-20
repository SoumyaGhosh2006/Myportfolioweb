export const personalInfo = {
  name: "Soumya Ghosh",
  title: "Full Stack Developer | Software Engineer | Scalable Backend & AI Systems",
  headline: "Building secure backend services, CI/CD pipelines & AI-integrated workflows with a relentless focus on reliability and monitoring.",
  status: "Seeking Technology / Infrastructure Engineering Internship",
  email: "soumyaraab06@gmail.com",
  phone: "+91 9641884699",
  location: "Kolkata, India",
  timezone: "Asia/Kolkata (IST, UTC+5:30)",
  github: "https://github.com/SoumyaGhosh2006",
  linkedin: "https://linkedin.com/in/soumya-ghosh-69ba77300",
  leetcode: "https://leetcode.com/u/SoumyaGhosh06",
  bio: "3rd-year Computer Science Engineering student at KIIT University (2024–28). I build secure backend services, CI/CD pipelines and AI-integrated workflows, with focus on reliability and monitoring. Hands-on with Python, Docker, GitHub Actions, Sentry, Linux and AWS basics. Know Agile, Scrum and XP. Use AI tools securely: validate LLM output, rate-limit usage, protect keys. Seeking a Technology / Infrastructure Engineering Internship in cloud, automation and reliability.",
  quickStats: [
    { label: "API Response Latency", value: "<100ms", detail: "FastAPI + async MongoDB pooling (InkFlow)" },
    { label: "Campus Workflow Personas", value: "4 Roles", detail: "Student, Parent, Mentor, Staff (K-Stop)" },
    { label: "Offline Quest Space", value: "2,250", detail: "IndexedDB matrix + Vision AI (Goblin Bingo)" },
    { label: "Open Source Milestone", value: "Hacktoberfest '26", detail: "Official Completionist & Contributor" },
  ]
};

export const technicalSkills = {
  languages: [
    { name: "Python", level: "Advanced", desc: "FastAPI, async Motor, Pydantic, ML scripts, reliability tooling" },
    { name: "JavaScript (ES6+)", level: "Advanced", desc: "Modern syntax, event loop, async/await, DOM APIs, Node.js" },
    { name: "TypeScript", level: "Advanced", desc: "Type safety, generics, interfaces, strict compiler configs" },
    { name: "Java", level: "Intermediate", desc: "OOP, financial risk modeling, JavaFX visualization, collections" },
    { name: "C", level: "Intermediate", desc: "Systems programming, memory management, pointer arithmetic" },
    { name: "SQL", level: "Advanced", desc: "Relational queries, index optimization, constraints, transactions" }
  ],
  backend: [
    { name: "FastAPI", level: "Advanced", desc: "Async route handlers, Pydantic schemas, dependency injection" },
    { name: "Node.js", level: "Advanced", desc: "Event-driven runtime, streams, non-blocking I/O architectures" },
    { name: "Express.js", level: "Advanced", desc: "REST routing, custom middleware orchestration, auth guards" },
    { name: "RESTful APIs", level: "Expert", desc: "Stateless architecture, HTTP semantic status codes, API versioning" },
    { name: "Socket.IO", level: "Advanced", desc: "Bidirectional WebSocket channels, real-time pub/sub event dispatch" },
    { name: "React.js", level: "Advanced", desc: "Component architecture, hooks, state management, route lazy loading" },
    { name: "Next.js", level: "Intermediate", desc: "SSR, SSG, App Router patterns, server-side data fetching" }
  ],
  databases: [
    { name: "PostgreSQL", level: "Advanced", desc: "Relational modeling, ACID compliance, foreign keys, indexing" },
    { name: "Prisma ORM", level: "Advanced", desc: "Type-safe query generation, schema migrations, relation modeling" },
    { name: "MongoDB", level: "Advanced", desc: "Motor async connection pooling, aggregation pipelines, flexible schemas" },
    { name: "Supabase Realtime", level: "Advanced", desc: "Postgres replication listeners, instant row-level event streams" }
  ],
  security: [
    { name: "HMAC-SHA256 Verification", level: "Advanced", desc: "Cryptographic webhook signature verification, timing-safe checks" },
    { name: "Razorpay API Integration", level: "Advanced", desc: "Server-side order generation, payment webhooks, tier provisioning" },
    { name: "JWT Authentication", level: "Advanced", desc: "Stateless bearer tokens, payload signing, token refresh strategies" },
    { name: "Role-Based Access Control", level: "Advanced", desc: "Granular permission middleware across multi-tenant user personas" },
    { name: "Rate Limiting & Throttling", level: "Advanced", desc: "Tiered quota enforcement, HTTP 429 backoff, DDoS mitigation" }
  ],
  devops: [
    { name: "Docker", level: "Intermediate", desc: "Containerization, multi-stage Dockerfiles, compose environments" },
    { name: "GitHub Actions (CI/CD)", level: "Advanced", desc: "Automated test runs, linting pipelines, continuous deployment" },
    { name: "Sentry Monitoring", level: "Advanced", desc: "Distributed error tracing, performance profiling, alert triggers" },
    { name: "Linux", level: "Intermediate", desc: "Bash scripting, process monitoring, systemd, SSH key management" },
    { name: "AWS (Basics)", level: "Foundational", desc: "EC2 instances, S3 storage buckets, IAM security policies" },
    { name: "Vercel & Render", level: "Advanced", desc: "Zero-config edge CDN routing, containerized service hosting" }
  ],
  coreCs: [
    { name: "Data Structures & Algorithms", level: "Core", desc: "Trees, graphs, dynamic programming, algorithmic complexity" },
    { name: "Object-Oriented Programming", level: "Core", desc: "Encapsulation, inheritance, polymorphism, SOLID principles" },
    { name: "Computer Networks", level: "Core", desc: "TCP/IP stack, DNS resolution, TLS handshakes, HTTP/1.1 & HTTP/2" },
    { name: "Operating Systems", level: "Core", desc: "Concurrency, mutexes, virtual memory, scheduling algorithms" },
    { name: "High Performance Computing", level: "Core", desc: "Parallel processing paradigms, vectorization, thread pools" }
  ],
  aiData: [
    { name: "LLM APIs & Prompting", level: "Advanced", desc: "Groq, OpenAI, structured JSON outputs, constrained decoding" },
    { name: "Secure AI Guardrails", level: "Advanced", desc: "Pydantic schema validation, regex parsing, token rate limiting" },
    { name: "Vision AI Pipelines", level: "Intermediate", desc: "Llama-3.2-Vision integration, client downscaling, JPEG compression" },
    { name: "NumPy & Pandas", level: "Advanced", desc: "Vectorized numerical transformations, tabular data wrangling" },
    { name: "Matplotlib & Seaborn", level: "Intermediate", desc: "Exploratory data analysis, statistical metric visualization" }
  ]
};

// Flattened skills for the 60fps marquee conveyor belt
export const marqueeSkills = [
  { name: "Python", tag: "Backend / Async", category: "lang" },
  { name: "FastAPI", tag: "Sub-100ms APIs", category: "backend" },
  { name: "PostgreSQL", tag: "ACID Relational", category: "db" },
  { name: "Docker", tag: "Containerization", category: "devops" },
  { name: "Sentry", tag: "Distributed Tracing", category: "devops" },
  { name: "Prisma ORM", tag: "Type-Safe Client", category: "db" },
  { name: "HMAC-SHA256", tag: "Crypto Security", category: "security" },
  { name: "TypeScript", tag: "Strict Types", category: "lang" },
  { name: "React.js", tag: "Modular UI", category: "frontend" },
  { name: "Razorpay API", tag: "Payment Gateway", category: "security" },
  { name: "MongoDB (Motor)", tag: "Async Pooling", category: "db" },
  { name: "Socket.IO", tag: "Real-time Pub/Sub", category: "backend" },
  { name: "GitHub Actions", tag: "CI/CD Automation", category: "devops" },
  { name: "Linux", tag: "Environment Ops", category: "devops" },
  { name: "Vision AI (Groq)", tag: "Llama-3.2 Vision", category: "ai" },
  { name: "Pydantic", tag: "Schema Validation", category: "backend" },
  { name: "Java", tag: "OOP Systems", category: "lang" },
  { name: "Supabase Realtime", tag: "Live DB Streams", category: "db" }
];

export const projects = [
  {
    id: "inkflow",
    title: "InkFlow",
    subtitle: "AI Transformation Engine & Secure Subscription Gateway",
    badge: "Hacktoberfest '26 Featured",
    category: "Backend & Systems",
    status: "Production Ready",
    impact: "Sub-100ms Latency · HMAC-SHA256 Security · Tiered Quotas · Sentry Tracing",
    stack: ["FastAPI", "Python", "MongoDB (Motor)", "Razorpay API", "Sentry", "Pydantic", "Docker"],
    github: "https://github.com/SoumyaGhosh2006/InkFlow",
    description: "Architected an asynchronous, production-grade backend service using FastAPI and Motor (async MongoDB), implementing startup connection pooling and collection indexing to deliver sub-100ms API response latencies.",
    keyPoints: [
      "Engineered a secure payment & monetization pipeline with Razorpay API, generating server-side checkout orders and cryptographically validating webhook transactions via HMAC-SHA256 signature verification before provisioning user tiers.",
      "Architected async MongoDB connection pooling and compound indexing using Motor, achieving sub-100ms API response latency on high-throughput transformation requests.",
      "Built multi-layer reliability controls: tiered quota throttling (HTTP 429), upstream inference fallback handling (HTTP 503), and end-to-end Sentry tracing for distributed monitoring and debugging."
    ],
    architectureDetails: {
      framework: "FastAPI with async event loop and dependency injection",
      database: "MongoDB with Motor async driver and startup connection pooling",
      paymentSecurity: "HMAC-SHA256 cryptographic signature validation on Razorpay webhooks",
      reliability: "Tiered rate limiting (HTTP 429), upstream fallback (HTTP 503), Sentry APM tracing"
    },
    metrics: [
      { label: "API Latency", value: "<100ms", note: "p95 under pooled load" },
      { label: "Webhook Auth", value: "HMAC-SHA256", note: "Zero forged tier escalations" },
      { label: "Observability", value: "Sentry APM", note: "Distributed error & latency tracing" },
      { label: "Rate Limiting", value: "HTTP 429", note: "Strict tier-based quota throttling" }
    ]
  },
  {
    id: "k-stop",
    title: "K-Stop",
    subtitle: "Multi-Role Hostel & Campus Management Platform",
    badge: "Enterprise Scale",
    category: "Full Stack & Distributed",
    status: "Production Ready",
    impact: "4 User Roles · 4-Stage Leave Lifecycle · 5-Attempt OTP Defense · Realtime Socket.IO",
    stack: ["React.js", "PostgreSQL", "Prisma ORM", "Socket.IO", "JWT", "NLP Triage"],
    github: "https://github.com/SoumyaGhosh2006/KSTOP",
    description: "Engineered a multi-role campus management platform spanning 4 user personas (Student, Parent, Mentor, Staff) with automated leave authorization, grievance dispatching, and parent-mentor communications.",
    keyPoints: [
      "Designed an automated 4-stage leave workflow with cryptographic QR code gate verification, replacing fragmented manual coordination with a verifiable digital gate-pass system.",
      "Implemented hardened OTP authentication using hashed 6-digit codes, 10-minute expiry windows, and 5-attempt brute-force throttling alongside parent-registry validation.",
      "Developed NLP-driven severity-scoring algorithms for grievance triage to prioritize urgent campus issues automatically.",
      "Built real-time bidirectional parent-mentor chat over Socket.IO and role-based dashboards backed by Prisma and PostgreSQL."
    ],
    architectureDetails: {
      personas: "4 Granular Roles: Student, Parent, Mentor, Hostel Staff",
      leaveWorkflow: "4-Stage: Student Request ➔ Parent Approval ➔ Mentor Approval ➔ QR Gate Verification",
      security: "Hashed 6-digit OTP, 10-minute TTL, 5-attempt brute-force protection, JWT RBAC",
      realtime: "Socket.IO WebSocket channels with room isolation over Prisma/PostgreSQL"
    },
    metrics: [
      { label: "User Personas", value: "4 Roles", note: "Student, Parent, Mentor, Staff" },
      { label: "Leave Lifecycle", value: "4 Stages", note: "End-to-end QR gate verification" },
      { label: "Brute-Force Guard", value: "5-Attempt Max", note: "Hashed OTP with 10-min TTL" },
      { label: "Realtime Chat", value: "Socket.IO", note: "Instant parent-mentor channels" }
    ]
  },
  {
    id: "glamgo",
    title: "GLAMGO",
    subtitle: "Resilient E-Commerce Web Storefront",
    badge: "Production Web",
    category: "Full Stack & Reliability",
    status: "Production Ready",
    impact: "Dual-Source Resilient Catalog · Real-time CRUD Sync · Zero-Downtime Offline Fallback",
    stack: ["React.js", "Supabase Realtime", "JavaScript", "REST APIs", "Error Boundaries"],
    github: "https://github.com/SoumyaGhosh2006/GLAMGO",
    description: "Built a dual-source resilient e-commerce storefront featuring real-time Supabase product synchronization alongside offline local fallback caches to guarantee catalog availability during backend downtime.",
    keyPoints: [
      "Engineered a dual-source resilient catalog architecture with local fallback caching, maintaining continuous product availability and zero downtime during network or data-source interruptions.",
      "Implemented real-time INSERT/UPDATE/DELETE subscription listeners via Supabase Realtime for instant multi-client inventory sync.",
      "Optimized frontend performance with route-level code splitting, lazy loading, centralized SEO metadata, canonical URLs, and application-level defensive error boundaries."
    ],
    architectureDetails: {
      catalogResilience: "Dual-source architecture: Supabase Realtime primary + local fallback cache",
      syncEngine: "PostgreSQL row-level replication stream with real-time CRUD subscriptions",
      frontendPerformance: "Route-level lazy loading, dynamic chunk splitting, centralized SEO tags",
      faultIsolation: "Defensive React Error Boundaries preventing cascading UI crashes"
    },
    metrics: [
      { label: "Catalog Availability", value: "Dual-Source", note: "Local fallback on network loss" },
      { label: "Inventory Sync", value: "Realtime", note: "Instant INSERT/UPDATE/DELETE" },
      { label: "Architecture", value: "Fault-Isolated", note: "Application-level error boundaries" },
      { label: "SEO Routing", value: "Canonical", note: "Optimized route chunking & metadata" }
    ]
  },
  {
    id: "goblin-bingo",
    title: "Goblin Nature Bingo",
    subtitle: "Offline-First PWA & Vision AI Scavenger Engine",
    badge: "Touch Grass Hacktoberfest",
    category: "AI & Offline Systems",
    status: "Live & Deployed",
    impact: "Touch Grass Hacktoberfest · Offline-First IndexedDB · Vision AI Pipeline",
    stack: ["React", "TypeScript", "FastAPI", "Groq (Vision LPUs)", "IndexedDB", "Tailwind CSS"],
    github: "https://github.com/SoumyaGhosh2006/Goblin_Nature_Bingo",
    description: "Architected an offline-first Progressive Web App (PWA) with Vision AI (Llama-3.2-Vision via Groq), implementing client-side HTML5 Canvas downscaling (1024px, <300KB JPEG compression) to minimize upload bandwidth on mobile networks.",
    keyPoints: [
      "Architected an offline-first PWA with Vision AI (Llama-3.2-Vision via Groq), implementing client-side HTML5 Canvas downscaling (1024px, <300KB JPEG) to slash upload bandwidth in low-connectivity outdoor zones.",
      "Engineered a dynamic quest engine with an offline 2,250-combination matrix and persistent IndexedDB local storage ('Foraging Bag') ensuring zero gameplay interruption in zero-connectivity trail environments.",
      "Secured the LLM vision pipeline with strict Pydantic validation and regex extraction of unstructured model output; integrated Sentry to monitor latency and token utilization."
    ],
    architectureDetails: {
      pwaArchitecture: "Offline-first PWA with Service Workers and IndexedDB persistent storage",
      visionPipeline: "Groq LPU acceleration running Llama-3.2-Vision with client Canvas downscaling",
      outputSanitization: "Strict Pydantic schema validation + regex guardrails on model inferences",
      observability: "Sentry integration tracking inference latency and API token usage"
    },
    metrics: [
      { label: "Quest Matrix", value: "2,250 Combi", note: "Dynamic offline tile generation" },
      { label: "Bandwidth Cut", value: "<300KB JPEG", note: "Client HTML5 Canvas downscaling" },
      { label: "Storage Engine", value: "IndexedDB", note: "Zero-connectivity 'Foraging Bag'" },
      { label: "Vision Inference", value: "Groq LPUs", note: "Llama-3.2-Vision with strict schema" }
    ]
  }
];

export const experience = [
  {
    role: "Web Developer",
    organization: "Cyber Security Corps Society, KIIT",
    period: "Aug 2024 – Present",
    location: "Bhubaneswar, India",
    type: "Club Engineering & Leadership",
    highlights: [
      "Contributing to club web infrastructure and student-led technical initiatives.",
      "Maintaining reliable access controls, responsive interfaces, and secure deployment pipelines across university events.",
      "Collaborating with cybersecurity peers to audit web portals, organize technical workshops, and coordinate capture-the-flag (CTF) sprints."
    ]
  },
  {
    role: "Open Source Contributor & Completionist",
    organization: "Hacktoberfest 2026",
    period: "Oct 2026",
    location: "Global Open Source",
    type: "Open Source Distinction",
    highlights: [
      "Earned official Hacktoberfest 2026 Completionist distinction by resolving issues across open-source repositories.",
      "Collaborated via structured Git branches, rigorous code reviews, automated CI/CD checks, and merged pull requests across distributed developer teams.",
      "Contributed production-grade bug fixes, documentation, and feature enhancements under open-source governance guidelines."
    ]
  },
  {
    role: "Competitive Hackathon Participant",
    organization: "National & Global Hackathon Arenas",
    period: "2024 – Present",
    location: "On-site & Remote",
    type: "Competitive Prototyping",
    highlights: [
      "Competed in 5+ premier hackathons including Smart India Hackathon (SIH25), ETHackathon, GDG hackathons, and international challenges (lablab.ai, Unstop).",
      "Engineered rapid full-stack prototypes, designed RESTful APIs, and pitched scalable solutions to technical jury panels within intense 24–48 hour sprints."
    ]
  }
];

export const education = {
  degree: "B.Tech in Computer Science and Engineering",
  institution: "KIIT University, Bhubaneswar",
  period: "2024 – 2028",
  status: "5th Semester (3rd Year Undergraduate)",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Java/C++)",
    "Database Management Systems (DBMS)",
    "Computer Networks",
    "Operating Systems",
    "High Performance Computing"
  ]
};

export const certifications = [
  {
    title: "Citi Technology Software Development Job Simulation",
    issuer: "Citi & Forage",
    date: "Completed",
    skills: ["Credit Risk Modeling", "Java", "Yahoo Finance API", "JavaFX Charting", "Financial Software Simulation"],
    description: "Completed virtual engineering simulation modeling real-world financial systems: implemented credit risk calculation engines, integrated Java Yahoo Finance market APIs, and rendered interactive JavaFX stock analytics."
  }
];
