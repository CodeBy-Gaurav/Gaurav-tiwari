import React, { ReactNode } from 'react';
import './blogStyles.css';

interface BlogTextLineProps {
  icon: ReactNode;
  children: ReactNode;
}

export function BlogTextLine({ icon, children }: BlogTextLineProps) {
  return (
    <div className="blog-text-line">
      <span className="text-line-icon">{icon}</span>
      <span className="text-line-content">{children}</span>
    </div>
  );
}
