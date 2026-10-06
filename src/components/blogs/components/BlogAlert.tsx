import React, { ReactNode } from 'react';
import { FaCircleCheck, FaTriangleExclamation, FaCircleXmark } from 'react-icons/fa6';
import './blogStyles.css';

interface AlertProps {
  title?: string;
  children: ReactNode;
}

export function BlogTip({ title = 'Tip', children }: AlertProps) {
  return (
    <div className="blog-alert alert-tip">
      <div className="alert-header">
        <FaCircleCheck className="alert-icon" />
        <span className="alert-title">{title}</span>
      </div>
      <div className="alert-body">{children}</div>
    </div>
  );
}

export function BlogWarn({ title = 'Warning', children }: AlertProps) {
  return (
    <div className="blog-alert alert-warn">
      <div className="alert-header">
        <FaTriangleExclamation className="alert-icon" />
        <span className="alert-title">{title}</span>
      </div>
      <div className="alert-body">{children}</div>
    </div>
  );
}

export function BlogDontDo({ title = "Don't Do This", children }: AlertProps) {
  return (
    <div className="blog-alert alert-dont">
      <div className="alert-header">
        <FaCircleXmark className="alert-icon" />
        <span className="alert-title">{title}</span>
      </div>
      <div className="alert-body">{children}</div>
    </div>
  );
}
