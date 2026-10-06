import React, { useState } from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import ExperienceCard from './ExperienceCard';
import Calendar from '../calendar/Calendar';
import './Experience.css';

interface ExperienceItem {
  company: string;
  role: string;
  dates: string;
  status: 'present' | 'past' | 'future';
  location: string;
  logoUrl?: string;
  description: string[];
  links?: { url: string }[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'Viral Nest',
    role: 'Software Developer Intern',
    dates: 'Feb 2026 - Aug 2026',
    status: 'present',
    location: 'Delhi NCR, India',
    description: [
      'Contributed to core product engineering by architecting scalable, production-ready full-stack web applications and collaborating with senior engineers.',
      'Built and deployed Optical Manager, a multi-tenant SaaS platform actively used by 5+ optical retail stores across Delhi NCR for inventory, billing, OD/OS ophthalmic clinical records, and store workflows.',
      'Delivered full-stack e-commerce and client solutions end-to-end, integrating product catalogs, payment pipelines, and high-performance React UI components.',
    ],
    links: [{ url: 'https://www.opticalmanager.in/' }],
  },
  {
    company: 'Infrasity',
    role: 'Web Developer Intern',
    dates: 'Dec 2025 - Jan 2026',
    status: 'past',
    location: 'Remote, India',
    description: [
      'Implemented an "Ask AI" RAG (Retrieval-Augmented Generation) system using Python, Flask, and Ollama to intelligently query complex product documentation.',
      'Integrated multiple LLM models to summarize and answer technical queries with high precision; adopted as a key differentiator in GTM playbooks.',
      'Engineered semantic vector search with custom embeddings to boost response relevance and retrieval quality.',
      'Authored comprehensive system architecture documentation, translating LLM retrieval concepts into clean developer guidelines.',
    ],
  },
  {
    company: 'Deloitte',
    role: 'Data Analysis Trainee',
    dates: 'Dec 2023 - Jan 2024',
    status: 'past',
    location: 'India',
    description: [
      'Analysed high-volume datasets to extract actionable business insights and support data-driven decision-making processes.',
      'Designed and built interactive Tableau dashboards to visualize key performance metrics and executive summaries.',
      'Utilized Python and SQL for rigorous data cleaning, pipeline transformation, and automated reporting.',
    ],
  },
];

export default function Experience() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="experience-section">
      <SectionTitle>Work Experience</SectionTitle>

      <div className="timeline-container">
        {experiences.map((exp, idx) => (
          <ExperienceCard
            key={idx}
            company={exp.company}
            role={exp.role}
            dates={exp.dates}
            status={exp.status}
            location={exp.location}
            logoUrl={exp.logoUrl}
            description={exp.description}
            links={exp.links}
            isExpanded={expandedIdx === idx}
            onToggle={() => toggleExpand(idx)}
          />
        ))}
      </div>

      {/* GitHub Calendar under Experience */}
      <Calendar />
    </section>
  );
}
