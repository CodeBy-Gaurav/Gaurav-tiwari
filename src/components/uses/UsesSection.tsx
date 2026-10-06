import React from 'react';
import { Link } from 'react-router';
import { FaArrowRight } from 'react-icons/fa6';
import SectionTitle from '../sectionTitle/SectionTitle';
import './UsesSection.css';

export default function UsesSection() {
  return (
    <section className="uses-section">
      <SectionTitle>Uses & Gear</SectionTitle>

      <div className="uses-teaser-card">
        <div className="uses-teaser-content">
          <h3 className="uses-teaser-title">Development Stack & Tools</h3>
          <p className="uses-teaser-desc">
            A curated list of my daily software, hardware, terminal environment, and editor setup that powers my workflow every day.
          </p>
        </div>

        <Link to="/uses" className="uses-link-button">
          <span>Explore Uses</span>
          <FaArrowRight className="uses-arrow" />
        </Link>
      </div>
    </section>
  );
}
