import React, { ReactNode } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './blogStyles.css';

export function BlogLink({
  href,
  children,
  external = true,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="blog-link"
    >
      <span>{children}</span>
      {external && <FaExternalLinkAlt className="blog-link-external-icon" />}
    </a>
  );
}

export function BlogButton({
  href,
  onClick,
  children,
  icon,
}: {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  icon?: ReactNode;
}) {
  if (href) {
    return (
      <a href={href} className="blog-btn" onClick={onClick}>
        {icon && <span className="blog-btn-icon">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button type="button" className="blog-btn" onClick={onClick}>
      {icon && <span className="blog-btn-icon">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}

export function BlogButtonsContainer({
  children,
  direction = 'row',
}: {
  children: ReactNode;
  direction?: 'row' | 'column';
}) {
  return (
    <div className={`blog-buttons-container dir-${direction}`}>{children}</div>
  );
}
