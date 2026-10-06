import React from 'react';
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { RiLockLine } from 'react-icons/ri';
import { ProjectData } from '../../data/projects';
import './Projects.css';

export default function ProjectCard({
  banner,
  name,
  desc,
  tech,
  github,
  live,
  badgeLeft,
  badgeRight,
  isLiveStores,
  stats,
}: ProjectData) {
  const leftLabel = badgeLeft || stats;
  const rightLabel = badgeRight || 'FEATURED ⚡';

  return (
    <div className="project-dashed-card">
      {/* Left side: Balanced Browser-Style Banner with Zero Bottom Gap */}
      <div className="project-banner-box">
        <div className="banner-inner-frame">
          {leftLabel && (
            <div className={`banner-badge-left ${isLiveStores ? 'live-stores-pill' : ''}`}>
              {isLiveStores && <span className="pulse-green-dot" />}
              <span>{leftLabel}</span>
            </div>
          )}
          {rightLabel && (
            <div className="banner-badge-right">
              <span>{rightLabel}</span>
            </div>
          )}
          <img src={banner} alt={name} className="project-banner-img" loading="lazy" />
        </div>
      </div>

      {/* Right side: Compact, Balanced Details */}
      <div className="project-details-box">
        {/* Header: Title + Lock and Action Buttons */}
        <div className="project-header-row">
          <div className="project-title-area">
            <h3 className="project-title-name">{name}</h3>
            <span className="project-lock-icon" title="Verified SaaS Project">
              <RiLockLine />
            </span>
          </div>

          <div className="project-buttons-area">
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-pill live-action"
                aria-label={`${name} Live Demo`}
              >
                <FaArrowUpRightFromSquare className="pill-icon" />
                <span>Live</span>
              </a>
            )}

            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-pill github-action"
                aria-label={`${name} GitHub Repository`}
              >
                <FaGithub className="pill-icon" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="project-description-text">{desc}</p>

        {/* Technologies Used Section */}
        <div className="project-tech-section">
          <h4 className="tech-used-label">Technologies Used:</h4>
          <div className="tech-tags-grid">
            {tech.map((item, idx) => (
              <span key={idx} className="tech-tag-pill">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
