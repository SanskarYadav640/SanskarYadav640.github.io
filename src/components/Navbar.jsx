// src/components/Navbar.jsx
import React, { useState } from 'react';
import ResumeModal from './ResumeModal';
import '../styles/Navbar.css';

export default function Navbar() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <ul>
          {/* ... your existing links ... */}
          <li>
            <button
              className="nav-btn"
              onClick={() => setResumeOpen(true)}
            >
              Résumé
            </button>
          </li>
        </ul>
      </nav>

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </>
  );
}
