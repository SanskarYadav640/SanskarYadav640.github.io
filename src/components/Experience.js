import React, { useState } from 'react';
import '../styles/Experience.css';
import keyboard from '../assets/background-keyboard.jpg';

const expData = [
  {
    title: 'Vulnerability & Penetration Tester – Snet Labs',
    period: 'Jul 2024 – Dec 2024',
    bullets: [
      'Conducted VAPT on AWS environments: 60+ security controls, 42 critical vulnerabilities identified.',
      'Partnered with teams to implement remediation, reducing risk by 40% in 3 months.',
      'Resolved 55+ high-priority issues, improved compliance with CIS, NIST, ISO 27001.',
      'Enhanced detection accuracy by 25% using manual & automated tools.',
      'Tools: Burp Suite, Nessus, Nmap, Metasploit, Nikto, OWASP ZAP, Wireshark, Kali Linux, AWS Inspector, OpenVAS.',
    ],
  },
  {
    title: 'Web Developer – Potterstech',
    period: 'May 2021 – Jul 2021',
    bullets: [
      'Replicated LinkedIn core functionalities, advancing web dev skills in 60 days.',
      'Improved performance by 25% via optimized coding & security measures.',
      'Deepened understanding of web architecture, user authentication, data security.',
    ],
  },
  {
    title: 'Android Security Analyst – Intellect Design',
    period: 'May 2020 – Aug 2020',
    bullets: [
      'Built Android app with OWASP Top 10 vulnerabilities for systematic testing.',
      'Reduced device vulnerabilities by 50%, lowering risk from 80% to 40%.',
      'Implemented remediation strategies to enhance security posture & resilience.',
    ],
  },
  {
    title: 'Cybersecurity Specialist – Hindalco',
    period: 'Jan 2020 – Apr 2020',
    bullets: [
      'Developed Python keylogger (Py2exe) for 45+ users to monitor potential breaches.',
      'Improved threat detection & mitigation capabilities, boosting security by 20%.',
      'Integrated advanced logging tools to strengthen data protection strategies.',
    ],
  },
];

export default function Experience() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="experience" id="experience" style={{ backgroundImage: `url(${keyboard})` }}>
      <div className="overlay"></div>
      <div className="exp-content">
        <h2>Experience</h2>
        <div className="timeline">
          {expData.map((exp, idx) => (
            <div
              key={idx}
              className={`exp-card ${openIdx === idx ? 'open' : ''}`}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <div className="exp-header">
                <h3>{exp.title}</h3>
                <span>{exp.period}</span>
              </div>
              {openIdx === idx && (
                <ul className="exp-bullets">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}