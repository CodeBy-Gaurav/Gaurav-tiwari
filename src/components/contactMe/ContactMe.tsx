import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import { socialLinks } from '../../data/socialLinks';
import './ContactMe.css';

export default function ContactMe() {
  return (
    <section className="contact-section">
      <SectionTitle>Let's Connect</SectionTitle>

      <div className="contact-card">
        <p className="contact-subtitle">
          Have an interesting project, job opportunity, or just want to chat about tech & SaaS? Feel free to reach out anytime!
        </p>

        <div className="contact-links-grid">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target={link.url.startsWith('mailto:') || link.url.startsWith('/') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="contact-pill"
              style={{ '--brand-color': link.color } as React.CSSProperties}
            >
              <span className="contact-pill-icon">{link.icon}</span>
              <span className="contact-pill-name">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
