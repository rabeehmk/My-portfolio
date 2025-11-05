import React, { useState, useEffect } from 'react';
import { FaAward, FaShieldAlt, FaBrain, FaEye, FaTimes, FaCalendar, FaPython } from 'react-icons/fa';
import { SiDjango } from 'react-icons/si';
import ClickSpark from './ClickSpark';
import './Certificates.css';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificateData = {
    ccsa: {
      title: 'Python - Django',
      issuer: 'Django Software Foundation',
      year: '2024',
      image: `${process.env.PUBLIC_URL}/assets/@icons8-python-48.png`,
      images: [`${process.env.PUBLIC_URL}/assets/@icons8-python-48.png`],
      description: 'Completed comprehensive training in Python programming and Django web framework, covering full-stack web development, REST APIs, database management, and deployment.',
      skills: ['Python Programming', 'Django Framework', 'REST APIs', 'Database Management', 'Web Development'],
      icon: FaPython,
      color: 'primary',
      credentialId: 'PYTHON-DJANGO-2024-001'
    },
    ai: {
      title: 'Artificial Intelligence',
      issuer: 'UL Research & OSPF',
      year: '2025',
      image: `${process.env.PUBLIC_URL}/assets/AI.jpg`,
      images: [`${process.env.PUBLIC_URL}/assets/AI.jpg`],
      description: 'Completed a certified training in AI fundamentals, machine learning concepts, and practical applications.',
      skills: ['Machine Learning', 'AI Fundamentals', 'Data Analysis', 'Neural Networks', 'Python'],
      icon: FaBrain,
      color: 'secondary',
      credentialId: 'AI-2025-001'
    }
  };

  const openCertificateModal = (certId) => {
    setSelectedCertificate(certId);
  };

  const closeCertificateModal = () => {
    setSelectedCertificate(null);
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectedCertificate && e.target.classList.contains('certificate-modal-overlay')) {
        closeCertificateModal();
      }
    };

    if (selectedCertificate) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [selectedCertificate]);

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedCertificate) {
        closeCertificateModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedCertificate]);

  const cert = selectedCertificate ? certificateData[selectedCertificate] : null;

  return (
    <section id="certificates" className="certificates-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <FaAward className="text-primary" />
            Professional <span className="gradient-text">Certificates</span>
          </h2>
          <p className="section-subtitle">Certified expertise in cybersecurity and artificial intelligence technologies</p>
          <div className="title-divider"></div>
        </div>
        
        <div className="certificates-grid">
          <ClickSpark sparkColor="#3b82f6" intensity="low" size="medium">
            <div 
              className="certificate-card" 
              data-certificate="ccsa"
              onClick={() => openCertificateModal('ccsa')}
            >
              <div className="certificate-image">
                <img src={`${process.env.PUBLIC_URL}/assets/@icons8-python-48.png`} alt="Python - Django" />
                <div className="certificate-overlay"></div>
                <div className="certificate-icon skill-hexagon skill-hex-primary">
                  <FaPython />
                </div>
                <span className="certificate-year badge">2024</span>
              </div>
              <div className="certificate-content">
                <h3 className="certificate-title">Python - Django</h3>
                <p className="certificate-issuer text-primary">Django Software Foundation</p>
                <p className="certificate-desc">Completed comprehensive training in Python programming and Django web framework, covering full-stack web development, REST APIs, database management, and deployment.</p>
                <button 
                  className="btn btn-outline btn-sm btn-full" 
                  onClick={(e) => {
                    e.stopPropagation();
                    openCertificateModal('ccsa');
                  }}
                >
                  <FaEye /> View Details
                </button>
              </div>
            </div>
          </ClickSpark>
          
          <ClickSpark sparkColor="#3b82f6" intensity="low" size="medium">
            <div 
              className="certificate-card" 
              data-certificate="ai"
              onClick={() => openCertificateModal('ai')}
            >
              <div className="certificate-image">
                <img src={`${process.env.PUBLIC_URL}/assets/AI.jpg`} alt="Artificial Intelligence" />
                <div className="certificate-overlay"></div>
                <div className="certificate-icon skill-hexagon skill-hex-secondary">
                  <FaBrain />
                </div>
                <span className="certificate-year badge">2025</span>
              </div>
              <div className="certificate-content">
                <h3 className="certificate-title">Artificial Intelligence</h3>
                <p className="certificate-issuer text-secondary">UL Research & OSPF</p>
                <p className="certificate-desc">Completed a certified training in AI fundamentals, machine learning concepts, and practical applications.</p>
                <button 
                  className="btn btn-outline btn-sm btn-full" 
                  onClick={(e) => {
                    e.stopPropagation();
                    openCertificateModal('ai');
                  }}
                >
                  <FaEye /> View Details
                </button>
              </div>
            </div>
          </ClickSpark>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && cert && (
        <div 
          className="certificate-modal-overlay"
          onClick={closeCertificateModal}
        >
          <div 
            className="certificate-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="certificate-modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                {React.createElement(cert.icon, { style: { fontSize: '1.5rem' } })}
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>
                  {cert.title}
                </h2>
              </div>
              <button className="certificate-modal-close" onClick={closeCertificateModal}>
                <FaTimes />
              </button>
            </div>
            
            <div className="certificate-modal-body">
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ 
                  position: 'relative', 
                  height: '256px', 
                  overflow: 'hidden', 
                  borderRadius: '0.75rem', 
                  marginBottom: '1.5rem' 
                }}>
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain', 
                      background: 'rgba(0, 0, 0, 0.05)' 
                    }} 
                  />
                  <div style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent)' 
                  }}></div>
                  <div style={{ 
                    position: 'absolute', 
                    top: '1rem', 
                    right: '1rem', 
                    width: '80px', 
                    height: '80px', 
                    background: cert.color === 'primary' 
                      ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(59, 130, 246, 0.7))' 
                      : 'linear-gradient(135deg, rgba(139, 92, 246, 0.9), rgba(139, 92, 246, 0.7))', 
                    borderRadius: '16px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    boxShadow: '0 20px 25px rgba(0, 0, 0, 0.15)' 
                  }}>
                    <div style={{ color: 'white', fontSize: '1.5rem' }}>
                      {React.createElement(cert.icon)}
                    </div>
                  </div>
                  <span className="badge" style={{ 
                    position: 'absolute', 
                    bottom: '1rem', 
                    left: '1rem', 
                    background: 'rgba(0, 0, 0, 0.7)', 
                    color: 'white', 
                    backdropFilter: 'blur(4px)', 
                    border: '1px solid rgba(255, 255, 255, 0.2)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem' 
                  }}>
                    <FaCalendar style={{ marginRight: '0.5rem' }} />
                    <span style={{ fontWeight: 500 }}>{cert.year}</span>
                  </span>
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <h4 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 700, 
                    color: cert.color === 'primary' ? '#3b82f6' : '#8b5cf6', 
                    marginBottom: '0.5rem' 
                  }}>
                    {cert.issuer}
                  </h4>
                  <p style={{ color: '#718096', lineHeight: 1.6 }}>
                    {cert.description}
                  </p>
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <h5 style={{ 
                    fontWeight: 500, 
                    color: '#718096', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.05em', 
                    fontSize: '0.75rem', 
                    marginBottom: '0.75rem' 
                  }}>
                    Skills & Expertise
                  </h5>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {cert.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="badge badge-outline" 
                        style={{ 
                          background: cert.color === 'primary' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(139, 92, 246, 0.1)', 
                          borderColor: cert.color === 'primary' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(139, 92, 246, 0.3)', 
                          fontSize: '0.75rem' 
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  paddingTop: '1rem', 
                  borderTop: '1px solid rgba(0, 0, 0, 0.1)' 
                }}>
                  <div>
                    <div style={{ 
                      fontSize: '0.75rem', 
                      color: '#718096', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.05em', 
                      marginBottom: '0.25rem' 
                    }}>
                      Credential ID
                    </div>
                    <div style={{ 
                      fontSize: '0.875rem', 
                      fontFamily: 'monospace', 
                      color: cert.color === 'primary' ? '#3b82f6' : '#8b5cf6' 
                    }}>
                      {cert.credentialId}
                    </div>
                  </div>
                </div>

                {/* Certificate Images Gallery */}
                {Array.isArray(cert.images) && cert.images.length > 0 && (
                  <div className="certificate-gallery">
                    {cert.images.map((imgSrc, idx) => (
                      <div key={idx} className="certificate-thumb">
                        <img src={imgSrc} alt={`${cert.title} ${idx + 1}`} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;

