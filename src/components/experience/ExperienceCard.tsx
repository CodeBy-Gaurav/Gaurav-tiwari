import React, { ReactNode } from 'react';
import { FaChevronDown, FaExternalLinkAlt } from 'react-icons/fa';
import { HiOutlineMapPin } from 'react-icons/hi2';

export interface ExperienceCardProps {
  logo?: ReactNode;
  logoUrl?: string;
  company: string;
  links?: { url: string; icon?: ReactNode }[];
  status: 'present' | 'past' | 'future' | string;
  role: string;
  dates: string;
  location?: string;
  description: string[];
  isExpanded: boolean;
  onToggle: () => void;
}

export default function ExperienceCard({
  logoUrl,
  company,
  links,
  status,
  role,
  dates,
  location,
  description,
  isExpanded,
  onToggle,
}: ExperienceCardProps) {
  return (
    <div className={`experience-card-container status-${status}`}>
      {/* Timeline connector and status dot */}
      <div className="timeline-marker">
        <span className={`timeline-dot dot-${status}`} />
      </div>

      <div className="experience-card-content">
        <div className="experience-card-header" onClick={onToggle}>
          <div className="company-info-area">
            {logoUrl && (
              <img
                src={logoUrl}
                alt={`${company} logo`}
                className="company-logo"
              />
            )}
            <div>
              <div className="company-title-row">
                <h3 className="company-name">{company}</h3>
                <span className={`experience-status-badge badge-${status}`}>
                  {status}
                </span>
                {links &&
                  links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="company-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {link.icon || <FaExternalLinkAlt />}
                    </a>
                  ))}
              </div>
              <p className="experience-role">{role}</p>
            </div>
          </div>

          <div className="experience-meta-right">
            <span className="experience-dates">{dates}</span>
            {location && (
              <span className="experience-location">
                <HiOutlineMapPin /> {location}
              </span>
            )}
            <button
              type="button"
              className={`expand-toggle-btn ${isExpanded ? 'rotated' : ''}`}
              aria-label="Toggle details"
            >
              <FaChevronDown />
            </button>
          </div>
        </div>

        {/* Expandable Description */}
        <div className={`experience-details ${isExpanded ? 'expanded' : ''}`}>
          <ul className="experience-bullets">
            {description.map((bullet, idx) => (
              <li key={idx} className="experience-bullet-item">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
