import React from 'react';
import { NavLink } from 'react-router';
import { FaGithub } from 'react-icons/fa6';
import Tooltip from '../tooltip/Tooltip';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar-container">
        <ul className="navbar-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              Resume
            </NavLink>
          </li>
        </ul>

        <Tooltip text="GitHub @CodeBy-Gaurav" position="bottom">
          <a
            href="https://github.com/CodeBy-Gaurav"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-github-btn"
            aria-label="GitHub Profile"
          >
            <FaGithub className="navbar-github-icon" />
            <span className="navbar-github-text">GitHub</span>
          </a>
        </Tooltip>
      </nav>
    </header>
  );
}
