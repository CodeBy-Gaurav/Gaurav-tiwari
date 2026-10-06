import React, { ReactNode } from 'react';
import { Link } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa6';
import './BlogLayoutContainer.css';

interface BlogLayoutContainerProps {
  children: ReactNode;
}

export default function BlogLayoutContainer({ children }: BlogLayoutContainerProps) {
  return (
    <article className="blog-container">
      <div className="blog-nav-bar">
        <Link to="/blogs" className="back-to-blogs-btn">
          <FaArrowLeft />
          <span>Back to all posts</span>
        </Link>
      </div>

      <div className="blog-content-body">{children}</div>

      <div className="blog-footer-nav">
        <Link to="/blogs" className="back-to-blogs-btn bottom">
          <FaArrowLeft />
          <span>Back to blogs</span>
        </Link>
      </div>
    </article>
  );
}
