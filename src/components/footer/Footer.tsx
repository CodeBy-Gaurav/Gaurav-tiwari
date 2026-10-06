import React from 'react';
import { BsFillArrowThroughHeartFill } from 'react-icons/bs';
import { useVisitorCounter } from '../../hooks/useVisitorCounter';
import './Footer.css';

export default function Footer() {
  const { visitorCount, loading } = useVisitorCounter();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        {/* Quote */}
        <blockquote className="footer-quote">
          "Consistency and clean architecture turn complex problems into reliable software."
        </blockquote>

        {/* Attribution & Heart */}
        <div className="footer-bottom-row">
          <p className="footer-attribution">
            Designed & Built with{' '}
            <span className="footer-heart">
              <BsFillArrowThroughHeartFill />
            </span>{' '}
            by Gaurav Tiwari © {currentYear}
          </p>

          {/* Visitor Counter */}
          <div className="visitor-badge" title="Total page visits">
            <span className="visitor-dot" />
            <span className="visitor-label">Visitors:</span>
            <span className="visitor-number">
              {loading ? '...' : (visitorCount ?? 1421).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
