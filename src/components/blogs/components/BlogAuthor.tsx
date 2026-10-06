import React, { ReactNode } from 'react';
import './blogStyles.css';

interface BlogAuthorProps {
  name?: string;
  avatar?: string;
  children?: ReactNode;
}

export function BlogAuthor({
  name = 'Gaurav Tiwari',
  avatar = '/images/profile/pfp-latest.jpg',
  children,
}: BlogAuthorProps) {
  return (
    <div className="blog-author-card">
      <img src={avatar} alt={name} className="blog-author-avatar" />
      <div className="blog-author-content">
        <h4 className="blog-author-name">{name}</h4>
        {children && <div className="blog-author-bio">{children}</div>}
      </div>
    </div>
  );
}
