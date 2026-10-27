/**
 * ==============================================================================
 * SHIPPED MODULES & RELEASES REGISTRY (projects.js)
 * Featuring Kushal Rupsing Mude's 3 Real Projects
 * ==============================================================================
 */

export const PROJECT_CATEGORIES = [
  'All Modules',
  'GovTech & Enterprise',
  'AI & Gemini API',
  'Multiplayer & Real-Time'
];

export const projects = [
  {
    id: 'metrica-govtech',
    title: 'Metrica – Digital Instrument Trust Platform',
    version: 'v1.0 Hackathon Release',
    category: 'GovTech & Enterprise',
    status: 'Production',
    featured: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tagline: 'Online verification & intelligent lifecycle management platform for legal metrology instruments.',
    description:
      'Engineered for the Ministry of Consumer Affairs (DoCA, Problem Statement 26036) by Team Kushal-Mangal. Built a tamper-proof digital identity architecture for weighing instruments with automated scheduling, GIS inspection mapping, cryptographic verification certificates, and QR auditing.',
    techStack: ['Next.js 15', 'React 19', 'TypeScript', 'Prisma ORM', 'Supabase / PostgreSQL', 'Tailwind CSS', 'Leaflet GIS', 'Zod'],
    metric: {
      label: 'Compliance Tracking',
      value: '100% Lifecycle Auditability',
      highlight: 'End-to-end digital paperless verification for Department of Consumer Affairs'
    },
    architectureSpecs: [
      { key: 'Framework', val: 'Next.js 15 App Router & Server Actions' },
      { key: 'Database ORM', val: 'Prisma + Supabase PostgreSQL' },
      { key: 'Security & Auth', val: 'Bcrypt + Jose JWT & Role Guards' },
      { key: 'Mapping & GIS', val: 'Leaflet Interactive Field Inspection' }
    ],
    demoUrl: 'https://metrica-team-kushal-mangal.vercel.app',
    githubUrl: 'https://github.com/LuckyJadhav2808/Metrica-Team-Kushal-Mangal',
    releaseDate: '2026'
  },
  {
    id: 'antarctic-ai',
    title: 'Antarctic AI (POLARIS-X)',
    version: 'v2.1 Release',
    category: 'AI & Gemini API',
    status: 'Production',
    featured: true,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    tagline: 'Intelligent multimodal AI assistant & automated analytics engine powered by Google Gemini API.',
    description:
      'Engineered an intelligent multimodal reasoning platform integrating Google Gemini API with custom data pipelines for contextual query processing, document parsing, and automated analytical workflows with low-latency streaming.',
    techStack: ['Google Gemini API', 'React 19', 'Python', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    metric: {
      label: 'Streaming Response',
      value: '< 80ms First Token',
      highlight: 'Zero token degradation across long-context prompt chains'
    },
    architectureSpecs: [
      { key: 'Inference Engine', val: 'Google Gemini Pro Multimodal' },
      { key: 'API Gateway', val: 'Express.js + Python Pipeline' },
      { key: 'Context Window', val: 'Adaptive Memory Buffer' },
      { key: 'Database', val: 'MongoDB Atlas' }
    ],
    demoUrl: 'https://polaris-x.vercel.app',
    githubUrl: 'https://github.com/LuckyJadhav2808/POLARIS-X',
    releaseDate: '2026'
  },
  {
    id: 'code-among-us',
    title: 'Code Among Us (CodeMongUs)',
    version: 'v1.4 Stable',
    category: 'Multiplayer & Real-Time',
    status: 'Production',
    featured: true,
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    tagline: 'Real-time multiplayer coding arena and developer challenge platform inspired by Among Us.',
    description:
      'Architected a real-time collaborative coding arena with interactive room lobbies, live syntax execution, and game logic synchronization using WebSockets, Node.js, and a responsive React frontend.',
    techStack: ['React', 'Node.js', 'Express.js', 'Socket.io', 'MongoDB', 'JavaScript (ES6+)', 'Tailwind CSS'],
    metric: {
      label: 'Multiplayer Sync',
      value: '< 20ms State Latency',
      highlight: 'Synchronous room-based matchmaking and real-time keystroke broadcasting'
    },
    architectureSpecs: [
      { key: 'Realtime Protocol', val: 'Socket.io WebSockets' },
      { key: 'Room Engine', val: 'In-Memory Lobby State' },
      { key: 'Code Execution', val: 'Sandboxed Client Runtime' },
      { key: 'Persistence', val: 'MongoDB Match History' }
    ],
    demoUrl: 'https://codemongus.netlify.app',
    githubUrl: 'https://github.com/LuckyJadhav2808/CodeMongUs',
    releaseDate: '2025'
  }
];

export const PROJECT_TEMPLATE = {
  id: 'your-project-id',
  title: 'Your Project Name',
  version: 'v1.0 Release',
  category: 'GovTech & Enterprise',
  status: 'Production',
  featured: false,
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  tagline: 'A sharp, 1-sentence value proposition describing the problem solved.',
  description:
    'Two to three sentences detailing the architectural approach, technical hurdles overcome, and real-world utility.',
  techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
  metric: {
    label: 'Key Metric',
    value: '40% Latency Reduction',
    highlight: 'Quantifiable benchmark proof'
  },
  architectureSpecs: [
    { key: 'Core Protocol', val: 'RESTful API / WebSockets' },
    { key: 'Database', val: 'MongoDB / PostgreSQL' },
    { key: 'Deployment', val: 'Vercel / Render' }
  ],
  demoUrl: null,
  githubUrl: 'https://github.com/your-username/your-repo',
  releaseDate: '2026'
};
