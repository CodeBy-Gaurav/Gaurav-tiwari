import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaHtml5,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaLinux,
  FaDocker,
  FaFigma,
  FaNetworkWired,
} from 'react-icons/fa6';
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiSupabase,
  SiTailwindcss,
  SiPostman,
  SiRender,
  SiGooglecloud,
  SiClerk,
  SiVite,
  SiLeetcode,
  SiVercel,
} from 'react-icons/si';
import './SkillSection.css';

interface SkillItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const technologies: SkillItem[] = [
  { name: 'React', icon: <FaReact />, color: '#61dafb' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e' },
  { name: 'Python', icon: <SiPython />, color: '#3776ab' },
  { name: 'Java', icon: <FaJava />, color: '#ea2d2e' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#539e43' },
  { name: 'Express', icon: <SiExpress />, color: '#ffffff' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169e1' },
  { name: 'MySQL', icon: <SiMysql />, color: '#4479a1' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
  { name: 'Supabase', icon: <SiSupabase />, color: '#3ecf8e' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06b6d4' },
  { name: 'REST APIs', icon: <FaNetworkWired />, color: '#f59e0b' },
  { name: 'HTML & CSS', icon: <FaHtml5 />, color: '#e34f26' },
];

const tools: SkillItem[] = [
  { name: 'Git', icon: <FaGitAlt />, color: '#f05032' },
  { name: 'GitHub', icon: <FaGithub />, color: '#ffffff' },
  { name: 'Postman', icon: <SiPostman />, color: '#ff6c37' },
  { name: 'Render', icon: <SiRender />, color: '#46e3b7' },
  { name: 'AWS', icon: <FaAws />, color: '#ff9900' },
  { name: 'Google Cloud', icon: <SiGooglecloud />, color: '#4285f4' },
  { name: 'Clerk Auth', icon: <SiClerk />, color: '#6c47ff' },
  { name: 'Vite', icon: <SiVite />, color: '#646cff' },
  { name: 'Linux', icon: <FaLinux />, color: '#fcc624' },
  { name: 'Docker', icon: <FaDocker />, color: '#2496ed' },
  { name: 'LeetCode (300+)', icon: <SiLeetcode />, color: '#ffa116' },
  { name: 'Vercel', icon: <SiVercel />, color: '#ffffff' },
  { name: 'Figma', icon: <FaFigma />, color: '#f24e1e' },
  { name: 'Next.js Dev', icon: <SiNextdotjs />, color: '#ffffff' },
  { name: 'React Ecosystem', icon: <FaReact />, color: '#61dafb' },
];

export default function SkillSection() {
  return (
    <section className="skills-section">
      <SectionTitle>Skills & Tech Stack</SectionTitle>

      <div className="marquee-container">
        {/* Technologies Marquee Row */}
        <div className="marquee-row marquee-left">
          <div className="marquee-track">
            {technologies.concat(technologies).map((tech, idx) => (
              <div key={`tech-${idx}`} className="skill-pill">
                <span className="skill-icon" style={{ color: tech.color }}>
                  {tech.icon}
                </span>
                <span className="skill-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Marquee Row */}
        <div className="marquee-row marquee-right">
          <div className="marquee-track">
            {tools.concat(tools).map((tool, idx) => (
              <div key={`tool-${idx}`} className="skill-pill">
                <span className="skill-icon" style={{ color: tool.color }}>
                  {tool.icon}
                </span>
                <span className="skill-name">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
