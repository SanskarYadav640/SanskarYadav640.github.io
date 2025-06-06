// src/components/Contact.js

import React, { useState } from 'react';
import '../styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/yourFormID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('ERROR');
      }
    } catch (err) {
      setStatus('ERROR');
    }
  };

  return (
    <section
      className="contact"
      id="contact"
      style={{
        backgroundImage: 'url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F5651999.jpg&f=1&nofb=1")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="overlay"></div>
      <div className="contact-content">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send Message</button>
          {status === 'SUCCESS' && (
            <p className="success-msg">Thanks! I’ll be in touch soon.</p>
          )}
          {status === 'ERROR' && (
            <p className="error-msg">Oops! Something went wrong. Try again.</p>
          )}
        </form>
        <div className="social-links">
          <a href="mailto:sanskaryadav640@gmail.com">✉️ Email Me</a>
          <a
            href="https://www.linkedin.com/in/yadavsanskar640"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 LinkedIn
          </a>
          <a
            href="https://github.com/SanskarYadav"
            target="_blank"
            rel="noopener noreferrer"
          >
            💻 GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
