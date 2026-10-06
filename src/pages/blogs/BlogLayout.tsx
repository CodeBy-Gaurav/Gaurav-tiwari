import React from 'react';
import { Link } from 'react-router';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import { FaArrowRight, FaCalendarAlt, FaClock } from 'react-icons/fa';
import './BlogLayout.css';

interface BlogPostMeta {
  title: string;
  slug: string;
  date: string;
  readTime: string;
  desc: string;
  tags: string[];
}

const blogPosts: BlogPostMeta[] = [
  {
    title: 'How to Plan, Architect, and Execute a Full-Stack SaaS Project',
    slug: 'how-to-plan-a-project',
    date: 'Jan 2026',
    readTime: '6 min read',
    desc: 'Lessons learned architecting Optical Manager from scratch: schema design with Drizzle ORM, multi-tenancy, and performance optimization.',
    tags: ['Architecture', 'SaaS', 'FullStack'],
  },
];

export default function BlogLayout() {
  return (
    <div className="blogs-page-wrapper">
      <SectionTitle>Articles & Insights</SectionTitle>
      <p className="blogs-intro">
        Thoughts, architectural case studies, and engineering breakdowns on building scalable software.
      </p>

      <div className="blog-posts-list">
        {blogPosts.map((post, idx) => (
          <article key={idx} className="blog-card-item">
            <Link to={`/blogs/${post.slug}`} className="blog-card-link">
              <div className="blog-card-header">
                <h3 className="blog-card-title">{post.title}</h3>
                <FaArrowRight className="blog-card-arrow" />
              </div>

              <p className="blog-card-desc">{post.desc}</p>

              <div className="blog-card-meta">
                <span className="blog-meta-item">
                  <FaCalendarAlt /> {post.date}
                </span>
                <span className="blog-meta-item">
                  <FaClock /> {post.readTime}
                </span>
                <div className="blog-tags-row">
                  {post.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="blog-pill-tag">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
