import React from 'react';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import { usesData } from '../../data/uses';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './UsesLayout.css';

export default function UsesLayout() {
  return (
    <div className="uses-page-wrapper">
      <SectionTitle>Uses & Daily Setup</SectionTitle>
      <p className="uses-intro">
        A breakdown of the hardware, software, tooling, and environment I rely on every day for engineering web apps, AI systems, and SaaS platforms.
      </p>

      <div className="uses-categories">
        {usesData.map((category, catIdx) => (
          <div key={catIdx} className="uses-category-block">
            <h3 className="category-title">{category.category}</h3>

            <div className="uses-items-list">
              {category.items.map((item, itemIdx) => (
                <div key={itemIdx} className="uses-item-row">
                  <span className="uses-item-label">{item.label}</span>
                  <div className="uses-item-name-group">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="uses-item-link"
                      >
                        <span>{item.name}</span>
                        <FaExternalLinkAlt className="external-icon" />
                      </a>
                    ) : (
                      <span className="uses-item-plain">{item.name}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
