import React from 'react';
import { Link } from 'react-router';
import { FaHome } from 'react-icons/fa';
import './PageNotFound.css';

export default function PageNotFound() {
  return (
    <div className="not-found-wrapper">
      <div className="not-found-container">
        <h1 className="error-code">404</h1>
        <h2 className="error-heading">Page Not Found</h2>
        <p className="error-desc">
          The page you are looking for doesn't exist or has been moved to another coordinate.
        </p>

        <Link to="/" className="home-back-btn">
          <FaHome />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
