import React from 'react';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import { HiOutlineArrowDownTray, HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';
import './ResumeLayout.css';

export default function ResumeLayout() {
  const resumeUrl = '/resume/resume.pdf';

  return (
    <div className="resume-page-wrapper">
      <SectionTitle>Resume / Curriculum Vitae</SectionTitle>

      <div className="resume-actions-bar">
        <a
          href={resumeUrl}
          download="Gaurav_Tiwari_Resume.pdf"
          className="resume-btn download"
        >
          <HiOutlineArrowDownTray className="resume-icon" />
          <span>Download PDF</span>
        </a>

        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn preview"
        >
          <HiOutlineArrowTopRightOnSquare className="resume-icon" />
          <span>Open Fullscreen</span>
        </a>
      </div>

      <div className="resume-viewer-container">
        <iframe
          src={`${resumeUrl}#toolbar=0`}
          title="Gaurav Tiwari Resume"
          className="resume-iframe"
        />
      </div>
    </div>
  );
}
