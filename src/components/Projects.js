import React, { useState } from 'react';
import '../styles/Projects.css';
import wood from '../assets/background-wood.jpg';

const projList = [
  {
    title: 'WARAS – Drone-based Reconnaissance',
    tagline: 'VAPT & Real-time Wi-Fi Mapping via Python, Linux, IoT',
    bullets: [
      'Scanned & mapped 100+ Wi-Fi devices within 1 km using a drone.',
      'Generated heatmaps, improving wireless security auditing by 30%.',
      'Budget → $11 total. Deployed scripts on Raspberry Pi + GPS module.',
    ],
    link: 'https://github.com/SanskarYadav/WARAS',
  },
  {
    title: 'Statistical Visualizer Library',
    tagline: 'Java Library for Data Visualization',
    bullets: [
      'Built a Java library to graph complex data sets with minimal code.',
      'Increased user engagement by 30% via intuitive API & examples.',
      'Reduced data interpretation time by 40% through prebuilt chart modules.',
    ],
    link: 'https://github.com/SanskarYadav/StatVisLibrary',
  },
  {
    title: 'AWS VAPT Automation Tool',
    tagline: 'Python script automating AWS security checks',
    bullets: [
      'Automates CIS and NIST benchmark checks across multiple AWS accounts.',
      'Generates a consolidated report (HTML + CSV) with remediation steps.',
      'Integrates AWS Boto3, Nessus API, and custom heuristics for drift detection.',
    ],
    link: 'https://github.com/SanskarYadav/AWSVAPTTool',
  },
  {
    title: 'Web Vulnerability Visualizer',
    tagline: 'React + D3.js App to visualize site vulnerabilities',
    bullets: [
      'Scans a chosen URL for OWASP Top 10 issues (using OWASP ZAP API).',
      'Displays interactive graphs (bar, pie, network) via D3.js.',
      'Helps developers quickly pinpoint high-risk endpoints & severity.',
    ],
    link: 'https://github.com/SanskarYadav/WebVizRL',
  },
];

export default function Projects() {
  const [activeProj, setActiveProj] = useState(null);

  return (
    <section className="projects" id="projects" style={{ backgroundImage: `url(${wood})` }}>
      <div className="overlay"></div>
      <div className="projects-content">
        <h2>My Projects</h2>
        <div className="proj-grid">
          {projList.map((p, idx) => (
            <div
              key={idx}
              className={`proj-card ${activeProj === idx ? 'open' : ''}`}
              onClick={() => setActiveProj(activeProj === idx ? null : idx)}
            >
              <h3>{p.title}</h3>
              <p className="tagline">{p.tagline}</p>
              {activeProj === idx && (
                <div className="proj-details">
                  <ul>
                    {p.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-link"
                  >
                    View on GitHub
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}