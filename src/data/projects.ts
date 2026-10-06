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
    badgeLeft: '10+ Stores Live',
    badgeRight: 'PRODUCTION SAAS ⚡',
    isLiveStores: true,
    locked: true,
    desc: 'Production-grade retail SaaS actively powering 10+ optical stores across Delhi NCR with centralized multi-branch inventory, OD/OS clinical records, and GST billing workflows.',
    tech: ['TypeScript', 'Next.js 16', 'PostgreSQL', 'Drizzle ORM', 'Tailwind CSS', 'Supabase APIs'],
    github: 'https://github.com/CodeBy-Gaurav/optical-manager',
    live: 'https://www.opticalmanager.in/',
  },
  {
    banner: '/images/projects/project2.png',
    name: 'AI Learning Platform',
    badgeLeft: 'Gemini AI Powered',
    badgeRight: 'SAAS PLATFORM 🚀',
    locked: true,
    desc: 'Full-stack AI course generator producing structured, multi-chapter video courses from prompts using Gemini AI and YouTube API, featuring 8x lower generation latency.',
    tech: ['TypeScript', 'Next.js', 'React', 'Gemini AI', 'PostgreSQL', 'Drizzle ORM', 'Clerk Auth'],
    github: 'https://github.com/CodeBy-Gaurav/ai-course-generator',
    live: 'https://ai-course-generator-sigma-flax.vercel.app/',
  },
  {
    banner: '/images/projects/project3.png',
    name: 'Ask AI Documentation System',
    badgeLeft: 'Semantic Search',
    badgeRight: 'RAG PIPELINE ⚡',
    locked: true,
    desc: 'Production-grade RAG system engineered with Flask, Ollama, and vector embeddings for contextual semantic query resolution over developer guides and technical documentation.',
    tech: ['Python', 'Flask', 'Ollama', 'Vector DB', 'ChromaDB', 'Postman', 'Git'],
    github: 'https://github.com/CodeBy-Gaurav',
  },
  {
    banner: '/images/projects/project4.png',
    name: 'Optical Store POS & WhatsApp Terminal',
    badgeLeft: 'Store POS Terminal',
    badgeRight: 'DESKTOP CLIENT 💻',
    locked: true,
    desc: 'Desktop point-of-sale terminal and WhatsApp automation client for optical retail stores, streamlining offline billing, prescription dispatch, and customer receipts.',
    tech: ['Electron', 'TypeScript', 'Node.js', 'Tailwind CSS', 'REST APIs'],
    github: 'https://github.com/CodeBy-Gaurav',
  },
];

export const additionalProjects: ProjectData[] = [
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
