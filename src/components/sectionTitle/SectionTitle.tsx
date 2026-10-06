import React, { ReactNode } from 'react';
import './SectionTitle.css';

interface SectionTitleProps {
  children: ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="section-title-wrapper">
      <div className="section-title-inner">
        <span className="corner-accent top-left" />
        <span className="corner-accent top-right" />
        <span className="corner-accent bottom-left" />
        <span className="corner-accent bottom-right" />
        <h2 className="section-title-heading">{children}</h2>
      </div>
    </div>
  );
}
