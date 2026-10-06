import React, { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';
import './blogStyles.css';

interface BlogCodeBlockProps {
  code: string;
  filename?: string;
  language?: string;
}

export function BlogCodeBlock({
  code,
  filename,
  language = 'typescript',
}: BlogCodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="blog-code-block">
      <div className="code-header">
        <span className="code-filename">{filename || language}</span>
        <button
          type="button"
          className="code-copy-btn"
          onClick={handleCopy}
          aria-label="Copy code"
        >
          {copied ? <FiCheck /> : <FiCopy />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      <pre className="code-pre">
        <code>{code}</code>
      </pre>
    </div>
  );
}
