import React, { forwardRef, useState } from 'react';
import './Tooltip.css';

export interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  className?: string;
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ text, position = 'top', children, className = '' }, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <div
        ref={ref}
        className={`tooltip-container ${className}`}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
      >
        {children}
        {isVisible && text && (
          <div className={`tooltip-bubble tooltip-${position}`} role="tooltip">
            {text}
            <span className="tooltip-arrow" />
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip';

export default Tooltip;
