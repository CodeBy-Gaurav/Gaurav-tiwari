import React from 'react';
import HeroSection from '../../components/heroSection/HeroSection';
import SkillSection from '../../components/skillSection/SkillSection';
import Experience from '../../components/experience/Experience';
import Projects from '../../components/projects/Projects';
import UsesSection from '../../components/uses/UsesSection';
import ContactMe from '../../components/contactMe/ContactMe';

export default function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <SkillSection />
      <Experience />
      <Projects />
      <UsesSection />
      <ContactMe />
    </div>
  );
}
