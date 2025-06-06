import React, { useState } from 'react';
import '../styles/Skills.css';
import codebg from '../assets/background-code.jpg';

const skillsList = [
  { title: 'Burp Suite', desc: 'Web VAPT & Proxy-based testing' },
  { title: 'Nessus', desc: 'Automated Vulnerability Scanning' },
  { title: 'Nmap', desc: 'Network Discovery & Port Scanning' },
  { title: 'Metasploit', desc: 'Exploit Development & Testing' },
  { title: 'Wireshark', desc: 'Network Traffic Analysis' },
  { title: 'Kali Linux', desc: 'Penetration Testing Distro' },
  { title: 'Python', desc: 'Scripting & Automation' },
  { title: 'Java', desc: 'Application Development' },
  { title: 'AWS', desc: 'Cloud Security & Configuration' },
];

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="skills" id="skills" style={{ backgroundImage: `url(${codebg})` }}>
      <div className="overlay"></div>
      <div className="skills-content">
        <h2>My Skills & Tools</h2>
        <div className="skills-grid">
          {skillsList.map((skill, idx) => (
            <div
              key={idx}
              className={`skill-card ${activeIndex === idx ? 'active' : ''}`}
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <h3>{skill.title}</h3>
              {activeIndex === idx && (
                <div className="tooltip">
                  <p>{skill.desc}</p>
                  <button onClick={() => alert(`${skill.title} details coming soon!`)}>
                    Learn More
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}