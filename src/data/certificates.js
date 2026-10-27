/**
 * ==============================================================================
 * CERTIFICATIONS, AWARDS & HACKATHONS REGISTRY (certificates.js)
 * Featuring Kushal Rupsing Mude's Verified Credentials
 * ==============================================================================
 */

export const CERTIFICATE_CATEGORIES = [
  { id: 'hackathons', label: 'Hackathons & Competitions' },
  { id: 'volunteering', label: 'Technical Volunteering & Leadership' }
];

export const certificates = [
  {
    id: 'pict-techfiesta-2026',
    title: 'TechFiesta 2026 International Hackathon',
    issuer: 'Pune Institute of Computer Technology (PICT)',
    partner: 'In Association with Agribid & InC 2026',
    category: 'hackathons',
    date: '2026',
    credentialId: 'PICT-TF-2026-KM',
    recipient: 'Kushal Mude',
    institution: 'Sinhgad College of Engineering, Pune',
    signatories: ['Dr. G. P. Potdar (InC 2026 Convenor)', 'Dr. S. T. Gandhe (Principal, PICT)'],
    accreditation: 'Autonomous Institute • NBA [Eligible UG Programs] & NAAC A+',
    description:
      'Certificate of Participation awarded to Kushal Mude of Sinhgad College of Engineering for competing in TechFiesta 2026, a prestigious International Hackathon organized by PICT in association with Agribid.',
    badgeColor: 'sky',
    image: '/certificates/pict-techfiesta-2026.png',
    pdfUrl: '/certificates/pict-techfiesta-2026.pdf',
    verificationUrl: '/certificates/pict-techfiesta-2026.pdf'
  },
  {
    id: 'mit-velora-2026',
    title: 'VELORA-1.0 Hackathon 2026',
    issuer: 'MIT Academy of Engineering (MIT AOE)',
    partner: 'CIPHER (IT Students\' Executive Council) × IEEE',
    category: 'hackathons',
    date: '2026',
    credentialId: 'MIT-AOE-VELORA-2026',
    recipient: 'Kushal Mude',
    institution: 'Sinhgad College of Engineering, Pune',
    signatories: [
      'President, CIPHER (IT Council)',
      'Head of Department, Information Technology',
      'Director, MIT Academy of Engineering'
    ],
    accreditation: 'Department of Information Technology, MIT AOE (Autonomous Institute)',
    description:
      'Certificate of Participation awarded to Kushal Mude for active involvement, dedication to innovation, collaborative problem-solving, and technical execution in VELORA-1.0 Hackathon 2026.',
    badgeColor: 'cyan',
    image: '/certificates/mit-velora-2026.png',
    pdfUrl: '/certificates/mit-velora-2026.pdf',
    verificationUrl: '/certificates/mit-velora-2026.pdf'
  },
  {
    id: 'sinhgad-ai-agon-2026',
    title: 'Sinhgad Techtonic • AI AGON - 2026',
    issuer: 'Sinhgad Technical Education Society (STES)',
    partner: 'Sinhgad Spring Fest \'26',
    category: 'volunteering',
    date: '2026',
    credentialId: 'STES-AIAGON-2026-VOL',
    recipient: 'Kushal Rupsing Mude',
    institution: 'Sinhgad College of Engineering, Pune',
    signatories: [
      'Dr. Rrohit Navale (Vice-President HR)',
      'Dr. (Ms.) Rachana Navale-Ashtekar (Vice-President Admin)',
      'Dr. (Mrs.) Sunanda M. Navale (Founder-Secretary)',
      'M. N. Navale (Founder-President)'
    ],
    accreditation: 'Sinhgad Institute & Sinhgad Techtonic Flagship Technical Festival',
    description:
      'Certificate of Volunteer awarded to Kushal Rupsing Mude from Sinhgad College Of Engineering for being an active volunteer and technical organizer in the flagship AI AGON - 2026 event.',
    badgeColor: 'purple',
    image: '/certificates/sinhgad-ai-agon-2026.png',
    pdfUrl: '/certificates/sinhgad-ai-agon-2026.pdf',
    verificationUrl: '/certificates/sinhgad-ai-agon-2026.pdf'
  }
];

export const CERTIFICATE_TEMPLATE = {
  id: 'your-cert-id',
  title: 'Certificate / Award Title',
  issuer: 'Issuing Organization / Hackathon',
  category: 'hackathons', // 'hackathons' | 'volunteering'
  date: '2026',
  credentialId: 'CERT-123456',
  description: '1-2 sentence description of what was mastered or achieved.',
  badgeColor: 'sky',
  image: '/certificates/your-cert.png',
  pdfUrl: '/certificates/your-cert.pdf',
  verificationUrl: '#'
};
