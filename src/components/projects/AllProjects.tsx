import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import ProjectCard from './ProjectCard';
import { allProjects } from '../../data/projects';
import './Projects.css';

export default function AllProjects() {
  return (
    <div className="all-projects-wrapper">
      <SectionTitle>My Projects</SectionTitle>
      <div className="projects-cards-container">
        {allProjects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
}
