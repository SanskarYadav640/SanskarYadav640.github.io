import React from 'react';
import '../styles/About.css';
import dunes from '../assets/background-dunes.jpg';

export default function About() {
  return (
    <section className="about" id="about" style={{ backgroundImage: `url(${dunes})` }}>
      <div className="overlay"></div>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I’m <strong>Sanskar Yadav</strong>, a Cybersecurity Enthusiast currently pursuing
          PG-DCSF (Cyber Security & Forensics) from CDAC India. I specialize in VAPT using
          tools such as Burp Suite, Nessus, Nmap, and Metasploit. My core strengths include
          risk analysis, network security, and compliance (CIS, NIST, ISO 27001).
        </p>
        <p>
          <strong>Education:</strong><br />
          B.Tech (CSE) with a specialization in Cyber Security and Forensics (2020–2024).
        </p>
        <p>
          <strong>Certifications:</strong><br />
          Java Basic, Introduction to HTML5, Introduction to Cybersecurity Tools & Cyber Attacks.
        </p>
      </div>
    </section>
  );
}