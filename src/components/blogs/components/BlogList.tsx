import React, { ReactNode } from 'react';
import './blogStyles.css';

interface BlogListProps {
  items: ReactNode[];
}

export function BlogOrderedList({ items }: BlogListProps) {
  return (
    <ol className="blog-ordered-list">
      {items.map((item, idx) => (
        <li key={idx} className="blog-list-item">
          {item}
        </li>
      ))}
    </ol>
  );
}

export function BlogUnorderedList({ items }: BlogListProps) {
  return (
    <ul className="blog-unordered-list">
      {items.map((item, idx) => (
        <li key={idx} className="blog-list-item">
          {item}
        </li>
      ))}
    </ul>
  );
}
