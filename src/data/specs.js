/**
 * ==============================================================================
 * KUSHAL RUPSING MUDE - TECHNICAL SPECIFICATIONS & SYSTEM MATRIX (specs.js)
 * ==============================================================================
 */

export const personalProfile = {
  fullName: 'Kushal Rupsing Mude',
  brand: 'KUSHAL.OS',
  role: 'Full-Stack MERN Developer & ML/DL Explorer',
  subRole: 'Web Developer • Pursuing Machine Learning & Deep Learning',
  university: 'Savitribai Phule Pune University (SPPU)',
  location: 'SPPU, Pune, Maharashtra, IN',
  timezone: 'Asia/Kolkata (IST • UTC+5:30)',
  email: 'kushalmude19@gmail.com',
  github: 'https://github.com/kushalmude19-cell',
  linkedin: 'https://www.linkedin.com/in/kushal-mude-a1363a350',
  pitch:
    'Full-Stack MERN Developer specializing in high-concurrency web architectures, scaling into Next-Gen Machine Learning & Deep Learning systems.'
};

export const systemMetrics = {
  latency: '< 38ms P99',
  uptime: '99.98% SLA',
  coreStack: 'MERN + Python (AI/ML)',
  location: 'SPPU, Pune, IN',
  timezone: 'Asia/Kolkata (IST • UTC+5:30)',
  status: 'Available for Hire & Internships',
  version: 'v2.6.0 Stable'
};

export const architectureTiers = [
  {
    id: 'frontend',
    category: 'Frontend & Interactive Web',
    subtitle: 'High-Fidelity Interface Machinery & Client State',
    badge: 'Tier 1 • Client Runtime',
    status: 'PRODUCTION GRADE',
    statusColor: 'sky',
    iconName: 'Cpu',
    benchmark: '98/100 Lighthouse Performance Index',
    skills: [
      { name: 'React 19 & JavaScript (ES6+)', level: 'Production Grade', metric: 'Hooks, Virtual DOM, Component Lifecycle' },
      { name: 'HTML5 & Semantic Architecture', level: 'Strict Standard', metric: 'Accessible Tree, WCAG AA Contrast' },
      { name: 'Modern CSS3 & Tailwind CSS', level: 'Advanced Design', metric: '8pt Grid, Micro-animations & Flex/Grid' },
      { name: 'Client State & APIs', level: 'Asynchronous', metric: 'Axios, Fetch, Browser Storage APIs' }
    ]
  },
  {
    id: 'backend',
    category: 'Backend & Server Engine',
    subtitle: 'Node.js, Express & Python API Gateways',
    badge: 'Tier 2 • Network & APIs',
    status: 'HIGH CONCURRENCY',
    statusColor: 'emerald',
    iconName: 'Network',
    benchmark: 'Sub-40ms Event Loop Response',
    skills: [
      { name: 'Express.js & Node.js', level: 'MERN Backend', metric: 'RESTful API routing, Middleware & JWT' },
      { name: 'Python Backend Engine', level: 'Fast & Scripting', metric: 'API integrations & Data Pipelines' },
      { name: 'WebSockets & Socket.io', level: 'Bidirectional Stream', metric: 'Real-time room syncing & event dispatch' },
      { name: 'Authentication & Security', level: 'Hardened', metric: 'Bcrypt password hashing & Session guards' }
    ]
  },
  {
    id: 'database',
    category: 'Database & Data Layer',
    subtitle: 'Relational & NoSQL Storage Architectures',
    badge: 'Tier 3 • Storage Systems',
    status: 'OPTIMIZED THROUGHPUT',
    statusColor: 'emerald',
    iconName: 'Database',
    benchmark: 'Indexing Strategies & Normalized Schemas',
    skills: [
      { name: 'MongoDB & Mongoose', level: 'NoSQL Master', metric: 'Schema design, Aggregations & Collections' },
      { name: 'MySQL / Relational SQL', level: 'ACID Compliant', metric: 'Complex Joins, Foreign Keys & Normalization' },
      { name: 'Git & Version Control', level: 'Workflow Standard', metric: 'Branching, Merge conflict triaging, PRs' },
      { name: 'Database Caching', level: 'Throughput', metric: 'In-memory state and query indexing' }
    ]
  },
  {
    id: 'ai-ml',
    category: 'Machine Learning & Deep Learning',
    subtitle: 'Neural Networks, Transformer APIs & Predictive Inference',
    badge: 'Tier 4 • R&D Frontier',
    status: '[ IN ACTIVE TRAINING / COMPILATION ]',
    statusColor: 'purple',
    isExperimental: true,
    iconName: 'Sparkles',
    benchmark: 'Gemini Multimodal Models & Neural Weights',
    skills: [
      { name: 'Google Gemini API', level: 'AI Orchestration', metric: 'Multimodal prompt chains & Context tuning' },
      { name: 'Claude Code & AI Tooling', level: 'Agentic Workflows', metric: 'Automated synthesis & Dev acceleration' },
      { name: 'Deep Learning & Neural Nets', level: 'Actively Pursuing', metric: 'Feedforward networks, Loss optimization' },
      { name: 'C / C++ & Java Core', level: 'Systems Thinking', metric: 'OOP Principles, Memory & Data Structures' }
    ]
  }
];

export const pricingTiers = [
  {
    id: 'community',
    name: 'Collaboration Tier',
    badge: 'Hackathons & Open Source',
    tagline: 'Ideal for hackathon teaming, open source PRs, and collaborative developer research sprints.',
    price: '$0',
    frequency: '/ sprint',
    highlighted: false,
    ctaText: 'Assemble Hackathon Team',
    features: [
      'Hackathon Teaming & Sprint Velocity',
      'Open Source Git Collaboration',
      'Real-Time WebSockets & MERN Building',
      'Clean Code & Modular Component Architecture',
      'Discord / GitHub Issue Co-piloting'
    ],
    subject: 'Hackathon Teaming & Collaboration'
  },
  {
    id: 'enterprise',
    name: 'SDE Intern / Full-Time',
    badge: 'Featured • Most Popular',
    tagline: 'Software Development Engineer (SDE) Intern or Full-Time Engineering Org Deployment.',
    price: 'Value-Driven',
    frequency: 'Stipend / Offer',
    highlighted: true,
    ctaText: 'Deploy Kushal to Engineering Team',
    features: [
      'Full-Stack MERN Architecture Ownership',
      'Backend REST APIs (Express.js & Node.js)',
      'MongoDB & MySQL Database Engineering',
      'Rapidly Upskilling in ML & Deep Learning',
      '40+ hrs/week dedicated engineering throughput',
      'On-site in Pune / Hybrid / Remote Global'
    ],
    subject: 'Job / Internship Deployment Offer for Kushal Mude'
  },
  {
    id: 'advisory',
    name: 'Project Build Tier',
    badge: 'Freelance & Contract',
    tagline: 'Custom web application builds, MERN stack dashboards, and API integration sprints.',
    price: 'Custom',
    frequency: '/ milestone',
    highlighted: false,
    ctaText: 'Request Project Discussion',
    features: [
      'End-to-End MERN Web Application Build',
      'Modern Bento-Grid UI with Tailwind CSS',
      'AI API Integration (Gemini & Claude)',
      'Deployment to Vercel / Render / Netlify',
      'Full Source Code Handoff & Documentation'
    ],
    subject: 'Custom Web Development Project Inquiry'
  }
];
