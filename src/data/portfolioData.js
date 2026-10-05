export const personalInfo = {
  name: "Soumya Ghosh",
  role: "Full Stack Developer · AI/ML Engineer · MERN Stack",
  headline: "Architecting Scalable Systems & Intelligent Web Solutions",
  status: "Seeking Summer 2027 Internship",
  email: "soumyaraab06@gmail.com",
  phone: "+91 9641884699",
  location: "Kolkata, India",
  timezone: "Asia/Kolkata (IST, UTC+5:30)",
  github: "https://github.com/SoumyaGhosh2006",
  linkedin: "https://linkedin.com/in/soumya-ghosh-69ba77300",
  bio: "3rd-year Computer Science Engineering student at KIIT University (Batch 2024-28). I approach every technical challenge with complete focus and ownership, treating quality and efficiency as non-negotiable. Whether building enterprise platforms from scratch or optimizing complex workflows, I invest the time and effort needed to deliver solutions that scale seamlessly under real-world pressure.",
  quickStats: [
    { label: "Target Audience Scale", value: "30,000+", detail: "Students via K-Stop Campus Platform" },
    { label: "Bookkeeping Time Saved", value: "1.5-2 hrs", detail: "Daily savings with SchoolDesk Voice AI" },
    { label: "Database Sync Latency", value: "< 1s", detail: "Supabase Realtime in GLAMGO" },
    { label: "Hackathons Tackled", value: "5+", detail: "SIH25, ETHackathon, GDG, Lablab" },
  ]
};

export const skillsTrackA = [
  { name: "React.js", category: "frontend", icon: "Layers", level: "Expert", desc: "Hooks, Context, Custom Architectures, Modern Component Lifecycles" },
  { name: "Next.js", category: "frontend", icon: "Globe", level: "Advanced", desc: "SSR, SSG, App Router, Hybrid Web Solutions" },
  { name: "FastAPI", category: "backend", icon: "Zap", level: "Advanced", desc: "High-performance Python APIs, Pydantic, Async Endpoints" },
  { name: "Node.js", category: "backend", icon: "Server", level: "Advanced", desc: "Event-driven runtime, scalable backend services" },
  { name: "Express.js", category: "backend", icon: "Cpu", level: "Advanced", desc: "RESTful routing, middleware orchestration, microservices" },
  { name: "Socket.io", category: "realtime", icon: "Radio", level: "Advanced", desc: "Bidirectional WebSocket communication, live pub/sub feeds" },
  { name: "JavaScript (ES6+)", category: "language", icon: "Code", level: "Expert", desc: "Modern syntax, async/await, closures, functional programming" },
  { name: "Python", category: "language", icon: "Terminal", level: "Advanced", desc: "Scripting, ML pipelines, data processing, backend logic" },
  { name: "Java", category: "language", icon: "Coffee", level: "Intermediate", desc: "OOP, JavaFX financial visualization, algorithms" },
  { name: "C", category: "language", icon: "FileCode", level: "Intermediate", desc: "Systems programming, memory management, pointers" },
  { name: "REST APIs", category: "architecture", icon: "Share2", level: "Expert", desc: "Stateless architecture, secure tokens, structured schemas" },
];

export const skillsTrackB = [
  { name: "PostgreSQL", category: "database", icon: "Database", level: "Advanced", desc: "Relational modeling, indexing, foreign keys, ACID compliance" },
  { name: "Prisma ORM", category: "database", icon: "Workflow", level: "Advanced", desc: "Type-safe database client, schema migrations, relations" },
  { name: "MongoDB", category: "database", icon: "Boxes", level: "Advanced", desc: "NoSQL document store, aggregation pipelines, flexible schemas" },
  { name: "Redis", category: "database", icon: "ZapFast", level: "Intermediate", desc: "In-memory caching, pub/sub message brokers, session states" },
  { name: "Supabase Realtime", category: "database", icon: "RefreshCw", level: "Advanced", desc: "Instant Postgres row change streaming, live sync" },
  { name: "NumPy & Pandas", category: "ai", icon: "LineChart", level: "Advanced", desc: "Vectorized computation, matrix ops, data cleaning" },
  { name: "Matplotlib & Seaborn", category: "ai", icon: "BarChart3", level: "Advanced", desc: "Exploratory statistical visualization, feature plots" },
  { name: "Feature Engineering", category: "ai", icon: "Sparkles", level: "Advanced", desc: "Data preprocessing, normalizations, model preparation" },
  { name: "Vercel & Render", category: "devops", icon: "Cloud", level: "Advanced", desc: "Edge deployment, environment config, continuous delivery" },
  { name: "Cloudinary", category: "devops", icon: "Image", level: "Intermediate", desc: "Media transformation, CDN optimization, asset management" },
  { name: "High Performance Computing", category: "core", icon: "Activity", level: "Core", desc: "Parallel processing paradigms, algorithmic efficiency" },
  { name: "DSA & System Design", category: "core", icon: "GitCommit", level: "Core", desc: "Data structures, time complexity optimization, patterns" },
];

export const allSkillCategories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend & UI" },
  { id: "backend", label: "Backend & APIs" },
  { id: "database", label: "Databases & Caching" },
  { id: "ai", label: "AI, ML & Data" },
  { id: "devops", label: "Cloud & DevOps" },
  { id: "core", label: "Core CS" },
];

export const projects = [
  {
    id: "schooldesk",
    title: "SchoolDesk",
    subtitle: "Dual-Purpose School Administrative Ledger & AI Assistant",
    tagline: "Voice-driven Mid-Day Meal accounting & structured LLM study-aid generator",
    category: "AI / Full Stack",
    featured: true,
    status: "Live & Deployed",
    impact: "Cuts 1.5–2 hours of tedious manual bookkeeping daily",
    stack: ["React.js", "FastAPI", "Groq (Llama 3 70B)", "Whisper", "SQLAlchemy", "KaTeX", "Python"],
    github: "https://github.com/SoumyaGhosh2006/SchoolDesk",
    description: "Built for government school staff to eliminate manual paperwork. Staff simply speak daily expenses and student counts into their microphone. Whisper transcribes the audio, and an LLM pipeline structures it into an audit-ready CSV alongside a traditional handwritten-style register.",
    keyPoints: [
      "Voice-Driven Ledger: Eliminates manual daily entries, saving 1.5 to 2 hours of accounting per day.",
      "Dual Output Format: Generates audit-ready digital CSV records and classic register print formats.",
      "Teaching-Aid LLM Pipeline: Ingests textbook PDFs to produce master formula cheat sheets, HOTS questions, and SVG whiteboard diagrams.",
      "Constrained LLM Architecture: Leverages JSON-schema validation and KaTeX LaTeX rendering to eliminate hallucinations.",
    ],
    architectureDetails: {
      client: "React.js with audio recording API and KaTeX math render engine",
      server: "FastAPI with streaming audio processing & SQLAlchemy ORM",
      aiEngine: "Groq hardware acceleration powering Llama 3 70B & OpenAI Whisper",
      output: "CSV Exports, Handwritten styled SVG whiteboard outputs, formatted PDF summaries"
    }
  },
  {
    id: "k-stop",
    title: "K-Stop",
    subtitle: "KIIT Campus Management & Student Lifecycle Platform",
    tagline: "High-concurrency ERP replacement for 30,000+ university students",
    category: "Enterprise System",
    featured: true,
    status: "Under Active Evolution",
    impact: "Zero manual handoff, real-time alerts across 30k+ campus community",
    stack: ["React.js", "PostgreSQL", "Prisma ORM", "Redis", "Socket.io", "JWT", "Render", "Vercel"],
    github: "https://github.com/SoumyaGhosh2006/KSTOP",
    description: "An enterprise-grade campus management system engineered to replace outdated, manual-heavy legacy systems (SAP Portal & Fretbox). Connects 30,000+ students, faculty mentors, hostel wardens, and parents in a seamless, zero-paper ecosystem.",
    keyPoints: [
      "Dynamic QR Gate Passes: Generated automatically upon mentor digital approval; scanned at campus gates with zero physical paperwork.",
      "Real-Time Redis Pub/Sub: Dispatches live attendance alerts, emergency notices, and mess menus via Socket.io.",
      "Role-Based Architecture: 4 distinct dashboards (Student, Mentor, Hostel Warden, Parent) with JWT + bcrypt role guards.",
      "Evolutionary SDLC: Engineered with Prisma ORM and PostgreSQL migrations, deployed across Vercel and Render."
    ],
    architectureDetails: {
      client: "Modular React.js with role-specific views & real-time notification listener",
      server: "Node.js & Express.js with Prisma ORM connecting to PostgreSQL",
      caching: "Redis Pub/Sub handling high-frequency websocket event distribution",
      security: "JWT stateless auth, bcrypt password hashing, scoped RBAC middleware"
    }
  },
  {
    id: "glamgo",
    title: "GLAMGO",
    subtitle: "Real-Time Product Catalogue & E-Commerce Storefront for Maftimpex",
    tagline: "Sub-second database sync & conversion-oriented modern storefront",
    category: "Full Stack Web",
    featured: true,
    status: "Live & Deployed",
    impact: "Propagates price & catalogue changes live in < 1 second",
    stack: ["React.js", "Supabase Realtime", "JavaScript", "HTML5 Semantic", "Tailwind CSS"],
    github: "https://github.com/SoumyaGhosh2006/GLAMGO",
    description: "Replaced a static, visually outdated catalogue that failed to meet modern digital marketing standards. Redesigned the entire storefront from scratch with high responsiveness, lightning load times, and instantaneous Supabase Realtime synchronization.",
    keyPoints: [
      "Instant Database Propagation: Price and stock updates sync across all connected clients in under 1 second without page refresh.",
      "Technical SEO Optimization: Semantic HTML5, dynamic Open Graph metadata, and structured JSON-LD schema markup.",
      "Conversion-Driven UX: Mobile-optimized product gallery, instant filter drawers, and zero layout shift (CLS = 0).",
      "Zero Maintenance Overhead: Automated content refresh workflows eliminate manual site updates."
    ],
    architectureDetails: {
      client: "React.js SPA with responsive grid, glassmorphic filters, and image lazy loading",
      backend: "Supabase PostgreSQL with WebSocket Realtime subscriptions",
      seo: "Pre-rendered metadata, Open Graph cards, Google Rich Snippets markup"
    }
  }
];

export const experience = [
  {
    role: "Web Developer",
    organization: "Cyber Security Corps Society, KIIT",
    period: "Aug 2024 – Present",
    location: "Bhubaneswar, India",
    type: "Leadership & Club Engineering",
    responsibilities: [
      "Contributing to core club web infrastructure and student-led technical initiatives.",
      "Collaborating with cybersecurity peers to maintain secure web applications and portals.",
      "Organizing technical workshops, CTFs, and tech sprints for undergraduate students."
    ]
  },
  {
    role: "Active Hackathon Competitor",
    organization: "Collegiate & International Hackathons",
    period: "2024 – Present",
    location: "Remote & On-site",
    type: "Competitive Innovation",
    responsibilities: [
      "Competed in 5+ premier hackathons including Smart India Hackathon 2025 (SIH25) and ETHackathon.",
      "Participated in GDG-organized hackathons, Lablab.ai international AI hackathons, and Unstop challenges.",
      "Rapidly prototyped AI-integrated tools, Web3 concepts, and full-stack solutions under 24–48 hour deadlines."
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
    "Software Engineering",
    "Computer Networks",
    "High Performance Computing",
    "Database Management Systems",
    "Object-Oriented Programming (Java/C++)"
  ]
};

export const certifications = [
  {
    title: "Citi Technology Software Development Job Simulation",
    issuer: "Citi & Forage",
    date: "Completed",
    skills: ["Credit Risk Modeling", "Java", "Yahoo Finance API", "JavaFX Charting", "Financial Software Simulation"],
    description: "Built a credit risk modeling pipeline and an automated stock tracking application in Java using Yahoo Finance API with a live JavaFX interactive chart, simulating the workflow of a real Citi enterprise engineering team."
  }
];

// Tree architecture data representing Soumya's end-to-end full stack & AI data flow
export const architectureTreeNodes = [
  {
    id: "client-layer",
    title: "1. Client & Interface Tier",
    type: "client",
    color: "from-sky-500 to-indigo-500",
    nodes: [
      { id: "c1", name: "React.js / Next.js SPA", desc: "Modular reactive UI with glassmorphic layout" },
      { id: "c2", name: "Audio & Voice Input", desc: "Browser Web Audio API for Whisper transcription" },
      { id: "c3", name: "QR Scanner & Mobile", desc: "K-Stop gate pass scanning & attendance" },
    ]
  },
  {
    id: "gateway-layer",
    title: "2. Gateway & Transport Tier",
    type: "gateway",
    color: "from-indigo-500 to-purple-500",
    nodes: [
      { id: "g1", name: "FastAPI Async Gateway", desc: "Python high-throughput endpoints & schemas" },
      { id: "g2", name: "Node / Express Router", desc: "RESTful endpoints & RBAC middlewares" },
      { id: "g3", name: "Socket.io WebSocket", desc: "Bidirectional live event push channels" },
    ]
  },
  {
    id: "intelligence-layer",
    title: "3. Intelligence & Compute Tier",
    type: "intelligence",
    color: "from-purple-500 to-pink-500",
    nodes: [
      { id: "i1", name: "Groq Llama 3 70B Engine", desc: "Constrained LLM JSON-schema generation" },
      { id: "i2", name: "Whisper Speech-to-Text", desc: "Fast speech audio structuring" },
      { id: "i3", name: "NumPy / Pandas Pipeline", desc: "Data cleaning, feature transformation, statistics" },
      { id: "i4", name: "KaTeX & SVG Renderer", desc: "Formulas and whiteboard study diagrams" },
    ]
  },
  {
    id: "persistence-layer",
    title: "4. Persistence & Caching Tier",
    type: "persistence",
    color: "from-pink-500 to-emerald-500",
    nodes: [
      { id: "p1", name: "PostgreSQL & Prisma ORM", desc: "Relational data store with ACID guarantees" },
      { id: "p2", name: "Redis Pub/Sub & Cache", desc: "In-memory message broker & sub-millisecond cache" },
      { id: "p3", name: "Supabase Realtime Stream", desc: "<1s live database row change propagation" },
      { id: "p4", name: "MongoDB Collections", desc: "Document storage for semi-structured payloads" },
    ]
  },
  {
    id: "cloud-layer",
    title: "5. Edge & Cloud Infrastructure",
    type: "cloud",
    color: "from-emerald-500 to-teal-500",
    nodes: [
      { id: "e1", name: "Vercel Edge Network", desc: "Frontend global CDN & asset distribution" },
      { id: "e2", name: "Render Cloud Services", desc: "Containerized backend services & workers" },
      { id: "e3", name: "GitHub CI/CD Pipelines", desc: "Automated testing, versioning, deployment" },
    ]
  }
];
