import React from 'react';
import { FaCode, FaRocket, FaLightbulb, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import LightRays from './LightRays';
import ClickSpark from './ClickSpark';
import './Home.css';

const Home = () => {
  const scrollToAbout = () => {
    // Navigate to About page
    window.location.href = '/about';
  };

  return (
    <div className="home" id="home">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-container">
          {/* Left Content */}
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <span className="badge-text">👋 Welcome to my portfolio</span>
              </div>
              
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">Rabeeh Muhammad Sali</span>
              </h1>
              
              <h2 className="hero-subtitle">
                <span className="subtitle-main">Software Engineer</span>
                <span className="subtitle-secondary">Full-Stack Developer</span>
              </h2>
              
              <p className="hero-description">
                I create innovative digital solutions that make a difference. 
                Passionate about building scalable applications with modern technologies 
                and delivering exceptional user experiences.
              </p>
              
             
              
              <div className="hero-actions">
                <ClickSpark sparkColor="#3b82f6" intensity="high" size="large">
                  <button className="btn btn-primary" onClick={scrollToAbout}>
                    <FaRocket className="btn-icon" />
                    Get Started
                  </button>
                </ClickSpark>
                <ClickSpark sparkColor="#3b82f6" intensity="high" size="large">
                  <a href="/portfolio" className="btn btn-secondary">
                    <FaCode className="btn-icon" />
                    View My Work
                  </a>
                </ClickSpark>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Section */}
        
        </div>
      </div>

      {/* Background Elements */}
      <div className="home-background">
        <div className="bg-shape bg-shape-1"></div>
        <div className="bg-shape bg-shape-2"></div>
        <div className="bg-shape bg-shape-3"></div>
      </div>

      {/* Light Rays Effect */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#3b82f6"
        raysSpeed={1.2}
        lightSpread={1.5}
        rayLength={2.5}
        pulsating={true}
        fadeDistance={1.2}
        saturation={1.0}
        followMouse={true}
        mouseInfluence={0.15}
        noiseAmount={0.1}
        distortion={0.2}
        className="home-light-rays"
      />
    </div>
  );
};

export default Home;
