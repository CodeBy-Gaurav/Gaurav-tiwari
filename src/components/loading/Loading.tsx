import React from 'react';
import './Loading.css';

export default function Loading() {
  return (
    <div className="loading-screen" aria-label="Loading">
      <div className="loading-container">
        <svg
          className="loading-svg"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="42" stroke="#1a1b1c" strokeWidth="6" />
          <circle
            className="loading-trace"
            cx="50"
            cy="50"
            r="42"
            stroke="#ffffff"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M50 30 V50 H65"
            stroke="#b3b3b3"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <p className="loading-text">Just a second...</p>
      </div>
    </div>
  );
}
