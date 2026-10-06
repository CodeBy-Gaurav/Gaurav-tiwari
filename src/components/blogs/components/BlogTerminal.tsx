import React, { useState } from 'react';
import { FaTerminal } from 'react-icons/fa6';
import { FiCopy, FiCheck } from 'react-icons/fi';
import './blogStyles.css';

interface BlogTerminalProps {
  commands: string[];
  title?: string;
}

export function BlogTerminal({
  commands,
  title = 'Terminal',
}: BlogTerminalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(commands.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="blog-terminal">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="terminal-title">
          <FaTerminal className="terminal-icon" />
          <span>{title}</span>
        </div>
        <button
          type="button"
          className="terminal-copy-btn"
          onClick={handleCopy}
          aria-label="Copy commands"
        >
          {copied ? <FiCheck /> : <FiCopy />}
        </button>
      </div>
      <div className="terminal-body">
        {commands.map((cmd, idx) => (
          <div key={idx} className="terminal-line">
            <span className="terminal-prompt">$</span>
            <span className="terminal-cmd">{cmd}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
