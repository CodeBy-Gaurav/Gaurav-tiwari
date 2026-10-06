import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import './Calendar.css';

export default function Calendar() {
  const theme = {
    dark: ['#383838', '#606060', '#8C8C8C', '#BABABA', '#EBEBEB'],
  };

  return (
    <div className="calendar-card">
      <div className="calendar-header">
        <h4 className="calendar-title">GitHub Contributions</h4>
        <a
          href="https://github.com/CodeBy-Gaurav"
          target="_blank"
          rel="noopener noreferrer"
          className="calendar-username-link"
        >
          @CodeBy-Gaurav
        </a>
      </div>
      <div className="calendar-wrapper">
        <GitHubCalendar
          username="CodeBy-Gaurav"
          colorScheme="dark"
          theme={theme}
          fontSize={12}
          blockSize={11}
          blockMargin={3}
        />
      </div>
    </div>
  );
}
