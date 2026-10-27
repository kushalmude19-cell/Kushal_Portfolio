# PRODUCT SPECIFICATION: Kushal v2.6 ("Me, The Product")
> Track 03: SASC PixelRush UI/UX Build Challenge
> Target: Top 1% SaaS-Grade Developer Portfolio

---

## 1. AGENT INSTRUCTIONS & ACTIVE SKILLS
When generating code, layouts, and components, you MUST adhere to:
- **`ui-ux-pro-max`**: Implement strict 8pt grid spacing, accessible color contrast (WCAG AA), micro-interactions (hover, active, focus-visible), and fluid responsive layout.
- **`design-skill`**: Apply a cohesive Linear/Raycast-inspired dark theme, crisp typography hierarchy, subtle border glows, and tactile button states.

---

## 2. THEME & DESIGN TOKENS
- **Base Mode**: Ultra-dark developer dashboard / hardware spec sheet.
- **Palette**:
  - Background (Canvas): `#0B0F17` (Deep Obsidian)
  - Card Surface: `#111827` with 1px border `rgba(255, 255, 255, 0.08)`
  - Primary Accent: `#38BDF8` (Electric Sky Blue) or `#10B981` (Emerald Glow)
  - Text: Primary `#F9FAFB`, Secondary `#9CA3AF`, Code/Mono `#6EE7B7`
- **Typography**: Inter or Geist Sans for headings/body; JetBrains Mono or Fira Code for metrics and labels.
- **Spacing**: Strict 8-point system (Tailwind `p-2`, `p-4`, `p-6`, `p-8`, `gap-4`, `gap-6`).
- **Tactile Micro-Interactions**:
  - Cards: `hover:border-sky-500/40 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)] transition-all duration-300`
  - Buttons: `active:scale-[0.98]` with subtle ripple or highlight shift.

---

## 3. PAGE ARCHITECTURE (SaaS PRODUCT PARADIGM)

### A. Floating Navigation ("The Control Bar")
- **Brand**: `KUSHAL.OS` with a glowing green status indicator (`● v2.6.0 Stable`).
- **Links**: Specs (Skills), Modules (Projects), SLA (Testimonials), Licensing (Contact).
- **CTA**: "Download Spec Sheet" (Resume download with byte-size tag `PDF • 140KB`).

### B. Hero Section ("Flagship Product Showcase")
- **Badge**: `[ NEW RELEASE: FULL-STACK & AI ENGINE ]`
- **Hero Title**: High-contrast, tight letter-spacing (`tracking-tight text-5xl md:text-7xl font-extrabold`).
  - Example: "Engineered for Scalable Systems. Deployed to Production."
- **Tagline**: Bridging resilient full-stack MERN engineering with next-generation machine learning interfaces.
- **Action Buttons**:
  - Primary: `Deploy to Team` (Smooth scroll to contact/licensing modal).
  - Secondary: `Inspect Architecture` (Scrolls to projects).
- **System Metrics Ticker (Twist)**:
  - `Latency: <45ms` | `Uptime: 99.9%` | `Core Stack: MERN + Python` | `Base: Pune, IN`

### C. Technical Specifications Section ("Hardware & System Architecture")
Instead of plain skill badges, present skills as an enterprise SLA / capability matrix:
- **Core Processing Unit (Frontend)**: React, Next.js, Tailwind CSS, TypeScript, Micro-interactions.
- **Database & Storage Layer**: MongoDB, Mongoose, Redis caching, indexing strategies.
- **Network & Realtime Engine**: Node.js, Express, Socket.io, RESTful APIs, WebSockets.
- **Experimental v3.0 Pipeline (Machine Learning)**:
  - Status: `[ IN ACTIVE TRAINING / COMPILATION ]`
  - Focus: PyTorch, LLM Orchestration, Vector DBs, LangChain.

### D. Shipped Modules / Releases Section ("Projects")
- All project data must be dynamically imported from `src/data/projects.js`.
- Each card must include:
  - Module Version Tag (e.g., `v1.2 Release`)
  - Project Title & High-impact 1-sentence value proposition
  - Architecture breakdown (Tech badges)
  - Key Performance Metric (e.g., `"Reduced sync latency by 40%"`)
  - Live Demo Link + Source Code Link
- *Placeholder slots are provided in `src/data/projects.js` for on-the-fly customization.*

### E. Licensing & Deployment Plans ("Contact & Hire Me")
Formatted as a 3-tier SaaS pricing table (100% free / open to hire):
1. **Community Tier**: Open Source Collaboration & Hackathon Teaming (`$0 / hobby`).
2. **Enterprise Tier (Featured / Most Popular)**: Full-Time / SDE Intern Deployment (`Competitive Stipend / Value-driven`).
3. **Advisory Tier**: Code Reviews & Architecture Consultation.
- Clicking "Select Tier" opens a sleek quick-contact modal with pre-filled subject tags.

### F. System Health Footer
- Live local time in Pune, India (`IST`).
- Social handles: GitHub, LinkedIn, Twitter/X, Email.
- Hackathon compliance badge: `Built for SASC PixelRush UI/UX Build Challenge`.

---

## 4. CODEBASE STRUCTURE (Vite + React + Tailwind CSS)
```text
portfolio/
├── references/           # User design screenshots from Instagram/Web
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── TechSpecs.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── LicensingModal.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── projects.js    # Easy on-the-fly editing of project content
│   │   └── specs.js       # Technical skill parameters
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── PROJECT_SPEC.md
└── package.json