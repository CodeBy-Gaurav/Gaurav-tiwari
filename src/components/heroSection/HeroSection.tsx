import React, { useState, useEffect } from 'react';
import {
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInbox,
} from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import {
  HiOutlineMapPin,
  HiOutlineQrCode,
  HiOutlineArrowDownTray,
} from 'react-icons/hi2';
import { LuTimer, LuCog } from 'react-icons/lu';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import { BsFillArrowThroughHeartFill } from 'react-icons/bs';
import { userImages } from '../../data/images';
import Tooltip from '../tooltip/Tooltip';
import './HeroSection.css';

export default function HeroSection() {
  const [showQR, setShowQR] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  // Continuous synchronized live dynamic ticking clock with seconds
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZone: 'Asia/Kolkata',
          hour12: true,
        })
      );
    };

    updateTime();
    const timerInterval = setInterval(updateTime, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-card">
        {/* Top Header: Avatar Box & Identity Info */}
        <div className="hero-profile-row">
          <div className="hero-avatar-frame">
            <img
              src={showQR ? userImages.profile.qrCode : userImages.profile.avatar}
              alt={showQR ? 'Gaurav Tiwari QR Code' : 'Gaurav Tiwari'}
              className="hero-avatar-img"
            />
            <Tooltip text={showQR ? 'Show Photo' : 'Show QR'} position="bottom">
              <button
                type="button"
                className="hero-qr-btn"
                onClick={() => setShowQR((prev) => !prev)}
                aria-label="Toggle QR Code"
              >
                <HiOutlineQrCode />
              </button>
            </Tooltip>
          </div>

          <div className="hero-identity-col">
            <div className="hero-name-row">
              <h1 className="hero-name">Gaurav Tiwari</h1>
              <span className="hero-heart-badge">
                <BsFillArrowThroughHeartFill />
              </span>
            </div>

            <a
              href="https://x.com/curious_gauravv"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-username"
            >
              @curious_gauravv
            </a>

            <div className="hero-status-line">
              <span className="hero-status-label">Building</span>
              <a
                href="https://www.opticalmanager.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-status-link"
              >
                opticalmanager.in
              </a>
              <span className="hero-status-cog">
                <LuCog />
              </span>
            </div>

            <div className="hero-meta-strip">
              <span className="meta-item">
                <HiOutlineMapPin className="meta-icon location" />
                <span>India</span>
              </span>
              <span className="meta-bullet">·</span>
              <span className="meta-item">
                <LuTimer className="meta-icon timer" />
                <span className="meta-live-time">{currentTime || '09:16:20 PM'}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bio Bullet Lines matching the exact reference */}
        <ul className="hero-bio-block">
          <li className="hero-bio-row">
            <span className="bio-bullet-dot">●</span>
            <span className="bio-text">
              Hi, I am a <strong className="bio-highlight">Full Stack Developer</strong>
            </span>
          </li>
          <li className="hero-bio-row">
            <span className="bio-bullet-dot">●</span>
            <span className="bio-text">
              Creator of <strong className="bio-highlight">Optical Manager</strong>, an enterprise retail ERP &amp; SaaS powering optical retail businesses with multi-branch inventory and clinical workflows.
            </span>
          </li>
          <li className="hero-bio-row">
            <span className="bio-bullet-dot">●</span>
            <span className="bio-text">
              Always <strong className="bio-highlight">shipping</strong>, <strong className="bio-highlight">learning</strong>, and turning ideas into <strong className="bio-highlight">products people actually use</strong>.
            </span>
          </li>
        </ul>

        {/* Dual Follow Cards: Twitter/X & LinkedIn */}
        <div className="hero-follow-cards-grid">
          {/* Twitter / X Card */}
          <div className="hero-dashed-card">
            <div className="dashed-card-left">
              <div className="social-card-avatar twitter-avatar">
                <FaXTwitter />
              </div>
              <div className="social-card-text">
                <div className="social-card-name-row">
                  <span className="social-card-name">Gaurav Tiwari</span>
                  <RiVerifiedBadgeFill className="verified-badge-icon" />
                </div>
                <span className="social-card-handle">@curious_gauravv</span>
              </div>
            </div>

            <a
              href="https://x.com/curious_gauravv"
              target="_blank"
              rel="noopener noreferrer"
              className="social-action-btn twitter-btn"
            >
              Follow
            </a>
          </div>

          {/* LinkedIn Community Card */}
          <div className="hero-dashed-card">
            <div className="dashed-card-left">
              <div className="social-card-avatar linkedin-avatar">
                <FaLinkedinIn />
              </div>
              <div className="social-card-text">
                <div className="social-card-name-row">
                  <span className="social-card-name">Gaurav Tiwari ( LinkedIn )</span>
                </div>
                <div className="social-card-status">
                  <span className="active-green-dot">●</span>
                  <span>For Opportunities</span>
                </div>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/gaurav-tiwari-663215204/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-action-btn linkedin-btn"
            >
              Connect :)
            </a>
          </div>
        </div>

        {/* Unified Bottom Action Strip / Segmented Dock */}
        <div className="hero-action-dock-row">
          <div className="hero-dock-container">
            <a
              href="mailto:gauravtiwari8178@gmail.com"
              className="dock-email-button"
            >
              <FaInbox className="dock-email-icon" />
              <span>Email Me</span>
            </a>

            <span className="dock-separator" />

            <div className="dock-icons-strip">
              <Tooltip text="LinkedIn" position="top">
                <a
                  href="https://www.linkedin.com/in/gaurav-tiwari-663215204/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dock-icon-btn"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </Tooltip>

              <Tooltip text="GitHub" position="top">
                <a
                  href="https://github.com/CodeBy-Gaurav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dock-icon-btn"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              </Tooltip>

              <Tooltip text="Twitter / X" position="top">
                <a
                  href="https://x.com/curious_gauravv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dock-icon-btn"
                  aria-label="Twitter"
                >
                  <FaXTwitter />
                </a>
              </Tooltip>

              <Tooltip text="LeetCode (300+ Solved)" position="top">
                <a
                  href="https://github.com/CodeBy-Gaurav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dock-icon-btn"
                  aria-label="LeetCode"
                >
                  <SiLeetcode />
                </a>
              </Tooltip>

              <Tooltip text="Resume PDF" position="top">
                <a
                  href="/resume"
                  className="dock-icon-btn"
                  aria-label="Download Resume"
                >
                  <HiOutlineArrowDownTray />
                </a>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
