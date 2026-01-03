import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaCopy, FaCheck } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [copiedKey, setCopiedKey] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'rabeehmk485@gmail.com',
      link: 'mailto:rabeehmk485@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 7736512105',
      link: 'tel:+917736512105'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Calicut - Kerala',
      link: null
    }
  ];

  const handleCopy = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 1500);
    } catch (err) {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      try { document.execCommand('copy'); setCopiedKey(key); setTimeout(() => setCopiedKey(null), 1500); } catch (_) {}
      document.body.removeChild(textarea);
    }
  };

  const socialLinks = [
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/rabeeh-muhammed-sali-8319602b9', label: 'LinkedIn' },
    { icon: FaGithub, url: 'https://github.com/', label: 'GitHub' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: FaInstagram, url: 'https://www.instagram.com/_rabeeh_mk?igsh=Mm5tbTczM3Rka3Uz', label: 'Instagram' }
  ];

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2 className="info-title">Contact Information</h2>
            <p className="info-description">
              Feel free to reach out through any of these channels. 
              I typically respond within 24 hours.
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="contact-item">
                    <div className="contact-icon">
                      <IconComponent />
                    </div>
                    <div className="contact-text">
                      <h3>{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} className="contact-link">
                          {info.value}
                        </a>
                      ) : (
                        <span>{info.value}</span>
                      )}
                    </div>
                    <button
                      type="button"
                      className="copy-btn"
                      aria-label={`Copy ${info.title}`}
                      onClick={() => handleCopy(info.value, info.title)}
                      title={copiedKey === info.title ? 'Copied!' : 'Copy'}
                    >
                      {copiedKey === info.title ? <FaCheck aria-hidden /> : <FaCopy aria-hidden />}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="social-section">
              <h3 className="social-title">Follow Me</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label={social.label}
                    >
                      <IconComponent />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2 className="form-title">Send Me a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
