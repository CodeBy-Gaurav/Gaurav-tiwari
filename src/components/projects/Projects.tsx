import React from 'react';
import { Link } from 'react-router';
import { FaArrowRight } from 'react-icons/fa6';
import SectionTitle from '../sectionTitle/SectionTitle';
import ProjectCard from './ProjectCard';
import { featuredProjects } from '../../data/projects';
import './Projects.css';

export default function Projects() {
  return (
    <section className="projects-section">
      <SectionTitle>My Projects</SectionTitle>

      <div className="projects-cards-container">
        {featuredProjects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>

      <div className="view-more-container">
        <Link to="/projects" className="view-more-button">
          <span>More Projects</span>
          <FaArrowRight className="view-more-arrow" />
        </Link>
      </div>
    </section>
  );
}
