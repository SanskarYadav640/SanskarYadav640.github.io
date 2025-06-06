// src/components/ThemeToggle.jsx
import React, { useState, useEffect } from 'react';
import '../styles/ThemeToggle.css';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'dark'
  );

  useEffect(() => {
    document.body.classList.toggle('light', theme === 'light');
    document.body.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      className="theme-toggle"
      onClick={() =>
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
      }
    >
      {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
    </button>
  );
}
