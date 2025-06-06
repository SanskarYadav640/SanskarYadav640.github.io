// src/components/ResumeModal.jsx
import React from 'react';
import '../styles/ResumeModal.css';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="pdf-container">
          <embed
            src="/resume.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
          />
        </div>
        <a href="/resume.pdf" download className="download-link">
          ⬇ Download Résumé
        </a>
      </div>
    </div>
  );
}
