import { IconType } from 'react-icons';

export interface ProjectData {
  banner: string;
  name: string;
  desc: string;
  tech: string[];
  github: string;
  live?: string;
  badgeLeft?: string;
  badgeRight?: string;
  isLiveStores?: boolean;
  locked?: boolean;
  demoWarning?: boolean;
  isUnderDevelopment?: boolean;
  isPrivate?: boolean;
  sponsor?: { icon: IconType };
  stats?: string;
}

export const featuredProjects: ProjectData[] = [
  {
    banner: '/images/projects/project1.png',
    name: 'Optical Manager',
    badgeLeft: 'Enterprise Retail ERP',
    badgeRight: 'PRODUCTION SAAS ⚡',
    locked: true,
    desc: 'Full-scale cloud retail ERP & SaaS engineered for optical businesses. Features real-time multi-branch inventory synchronization, ophthalmic clinical examination records (OD/OS, prism, axis), automated GST-compliant invoicing, barcoding, and customer prescription tracking with end-to-end audit trails.',
    tech: ['TypeScript', 'Next.js 16', 'PostgreSQL', 'Drizzle ORM', 'Tailwind CSS', 'Supabase APIs'],
    github: 'https://github.com/CodeBy-Gaurav/optical-manager',
    live: 'https://www.opticalmanager.in/',
  },
  {
    banner: '/images/projects/ai-course-generator.png',
    name: 'LearnGen AI — Video Courses',
    badgeLeft: 'Gemini AI Powered',
    badgeRight: 'SAAS PLATFORM 🚀',
    locked: true,
    desc: 'Turn any topic into a complete AI video course in seconds with structured curriculums, lesson notes, and curated YouTube video masterclasses powered by Gemini AI.',
    tech: ['TypeScript', 'Next.js', 'React', 'Gemini AI', 'PostgreSQL', 'Drizzle ORM', 'Clerk Auth'],
    github: 'https://github.com/CodeBy-Gaurav/ai-course-generator',
    live: 'https://ai-course-generator-sigma-flax.vercel.app/',
  },
  {
    banner: '/images/projects/broadcast-manager.png',
    name: 'Broadcast Manager',
    badgeLeft: 'Meta Cloud API',
    badgeRight: 'MARKETING & CRM SAAS ⚡',
    locked: true,
    desc: 'Enterprise-grade WhatsApp CRM & marketing automation platform built on official Meta Cloud APIs. Features a real-time multi-agent shared inbox, visual drag-and-drop workflow builder, high-throughput template broadcasts with delivery analytics, 24h care window intelligence, and AI-assisted reply generation via pgvector RAG.',
    tech: ['TypeScript', 'Next.js 16', 'React 19', 'Supabase (PostgreSQL)', 'Meta Cloud API', 'WebSockets', 'pgvector RAG', 'Tailwind CSS'],
    github: 'https://github.com/opticalmanager/broadcast-manager',
    live: 'https://broadcast.opticalmanager.in/',
  },
  {
    banner: '/images/projects/ai-documentation-assistant.jpg',
    name: 'AI Documentation Assistant',
    badgeLeft: 'Semantic Vector RAG',
    badgeRight: 'INFRASITY INTERNSHIP ⚡',
    locked: true,
    desc: 'Production-grade RAG assistant built with Llama 3.2, Flask, and vector embeddings to answer queries over complex technical docs. Contributed as part of my internship at Infrasity.',
    tech: ['Python', 'Flask', 'Llama 3.2', 'Ollama', 'Vector DB', 'ChromaDB', 'Postman'],
    github: 'https://github.com/Infrasity-Labs/growth-marketing-playbooks/tree/main/ai-documentation-assistant',
  },
];

export const additionalProjects: ProjectData[] = [
  {
    banner: '/images/projects/project4.png',
    name: 'Optical POS & Store Terminal',
    badgeLeft: 'Store POS Terminal',
    badgeRight: 'DESKTOP CLIENT 💻',
    locked: true,
    desc: 'Desktop point-of-sale terminal and WhatsApp automation client for optical retail stores, streamlining offline billing, prescription dispatch, and customer receipts.',
    tech: ['Electron', 'TypeScript', 'Node.js', 'Tailwind CSS', 'REST APIs'],
    github: 'https://github.com/CodeBy-Gaurav',
  },
  {
    banner: '/images/projects/project1.png',
    name: 'E-Commerce Storefront & Engine',
    badgeLeft: 'Full-Stack',
    badgeRight: 'CLIENT ENGINE 🛒',
    locked: true,
    desc: 'End-to-end full-stack e-commerce architecture with product catalogs, dynamic cart state, checkout, and payment gateway integrations.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    github: 'https://github.com/CodeBy-Gaurav',
  },
  {
    banner: '/images/projects/project2.png',
    name: 'High-Dimensional Vector Search',
    badgeLeft: 'Vector DB',
    badgeRight: 'SEARCH ENGINE 🔍',
    locked: true,
    desc: 'Vector embedding search pipeline for document similarity querying, context retrieval, and low-latency embeddings indexing.',
    tech: ['Python', 'ChromaDB', 'FastAPI', 'HuggingFace'],
    github: 'https://github.com/CodeBy-Gaurav',
  },
];

export const allProjects: ProjectData[] = [...featuredProjects, ...additionalProjects];
