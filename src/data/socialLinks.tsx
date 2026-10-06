import React, { ReactNode } from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa6';
import { HiOutlineDocumentText } from 'react-icons/hi2';

export interface SocialLink {
  name: string;
  url: string;
  icon: ReactNode;
  color: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/CodeBy-Gaurav',
    icon: <FaGithub />,
    color: '#ffffff',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/gaurav-tiwari-663215204/',
    icon: <FaLinkedin />,
    color: '#0077B5',
  },
  {
    name: 'Twitter',
    url: 'https://x.com/curious_gauravv',
    icon: <FaTwitter />,
    color: '#1DA1F2',
  },
  {
    name: 'Email',
    url: 'mailto:gauravtiwari8178@gmail.com',
    icon: <FaEnvelope />,
    color: '#EA4335',
  },
  {
    name: 'Resume',
    url: '/resume',
    icon: <HiOutlineDocumentText />,
    color: '#10B981',
  },
];
