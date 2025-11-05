import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaPalette, FaMobile, FaTimes, FaGlobe, FaDatabase, FaCog } from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Movie Time',
      description: 'Developed a movie browsing and review application using Django, HTML, CSS, and Bootstrap.',
      detailedDescription: 'A comprehensive movie browsing and review application that allows users to discover, rate, and review movies. The application integrates with third-party REST APIs to fetch real-time movie data, providing users with up-to-date information about movies, ratings, and reviews.',
      image: '/api/placeholder/400/300',
      technologies: ['Django', 'HTML', 'CSS', 'Bootstrap', 'REST APIs', 'Python'],
      category: 'web',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
      features: [
        'Movie browsing and search functionality',
        'User rating and review system',
        'Third-party API integration',
        'Responsive Bootstrap design',
        'User authentication and profiles'
      ]
    },
    {
      id: 2,
      title: 'Employee CRM',
      description: 'Engineered a CRUD-based employee management system using Django.',
      detailedDescription: 'A comprehensive Customer Relationship Management system specifically designed for employee management. The system provides role-based access control for Admin and Employee users, ensuring secure and organized data management.',
      image: '/api/placeholder/400/300',
      technologies: ['Django', 'Bootstrap', 'Python', 'SQLite', 'CRUD Operations'],
      category: 'web',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
      features: [
        'Role-based access control (Admin/Employee)',
        'Complete CRUD operations',
        'Employee data management',
        'Secure authentication system',
        'Bootstrap-styled interface'
      ]
    },
    {
      id: 3,
      title: 'Thai GPT RAG',
      description: 'Developed a document intelligence system for accurate text extraction from PDFs and images.',
      detailedDescription: 'An advanced AI-powered document intelligence system that enables accurate text extraction from PDFs and images. The system uses RAG (Retrieval-Augmented Generation) technology to provide intelligent querying and question-answering capabilities from extracted content.',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'AI/ML', 'RAG', 'PDF Processing', 'OCR', 'Natural Language Processing'],
      category: 'ai',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
      features: [
        'PDF and image text extraction',
        'AI-powered question answering',
        'RAG technology implementation',
        'Intelligent content querying',
        'Document processing pipeline'
      ]
    },
    {
      id: 4,
      title: 'Sahari Cargo',
      description: 'Implemented new features and functionalities on live production websites.',
      detailedDescription: 'Worked on a live production cargo company website, implementing new features and functionalities as requested by clients. Collaborated with cross-functional teams to analyze requirements and deliver user-friendly updates that improved efficiency and customer satisfaction.',
      image: '/api/placeholder/400/300',
      technologies: ['Web Development', 'Client Integration', 'Production Systems', 'Team Collaboration'],
      category: 'web',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
      features: [
        'Live production website maintenance',
        'Client-requested feature implementation',
        'Cross-functional team collaboration',
        'Minimal business disruption approach',
        'Customer satisfaction improvements'
      ]
    },
    {
      id: 5,
      title: 'Ben Homes',
      description: 'Designed and developed the front-end of the company website/system with a strong focus on UI/UX.',
      detailedDescription: 'Led the front-end development for a construction company website/system, focusing heavily on UI/UX design. Built intuitive layouts and interactive components using modern front-end technologies, partnering with stakeholders to refine design prototypes.',
      image: '/api/placeholder/400/300',
      technologies: ['Frontend Development', 'UI/UX Design', 'Modern Web Technologies', 'Stakeholder Collaboration'],
      category: 'design',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
      features: [
        'Modern UI/UX design implementation',
        'Intuitive layout development',
        'Interactive component creation',
        'Stakeholder collaboration',
        'Navigation optimization'
      ]
    },
    {
      id: 6,
      title: 'Travel Eye',
      description: 'Conducted manual testing to ensure project quality and functionality.',
      detailedDescription: 'Worked on a travel company project focusing on quality assurance through comprehensive manual testing. Identified and reported bugs with detailed documentation, collaborating with developers to resolve issues quickly and enhance overall application reliability.',
      image: '/api/placeholder/400/300',
      technologies: ['Manual Testing', 'Quality Assurance', 'Bug Documentation', 'Team Collaboration'],
      category: 'testing',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
      features: [
        'Comprehensive manual testing',
        'Bug identification and reporting',
        'Detailed documentation',
        'Developer collaboration',
        'Application reliability improvements'
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: FaCode },
    { id: 'web', label: 'Web Development', icon: FaGlobe },
    { id: 'ai', label: 'AI/ML Projects', icon: FaCog },
    { id: 'design', label: 'UI/UX Design', icon: FaPalette },
    { id: 'testing', label: 'QA & Testing', icon: FaDatabase }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h1 className="portfolio-title">My Work</h1>
          <p className="portfolio-subtitle">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="portfolio-filters">
          {categories.map(category => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
              >
                <IconComponent />
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
              onClick={() => openModal(project)}
            >
              <div className="project-image">
                <div className="image-placeholder">
                  <span>{project.title}</span>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" onClick={(e) => e.stopPropagation()}>
                      <FaGithub />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link" onClick={(e) => e.stopPropagation()}>
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <button className="modal-close" onClick={closeModal}>
                <FaTimes />
              </button>
            </div>
            
            <div className="modal-body">
              <div className="modal-image">
                <div className="image-placeholder">
                  <span>{selectedProject.title}</span>
                </div>
              </div>
              
              <div className="modal-info">
                <div className="modal-description">
                  <h3>Project Overview</h3>
                  <p>{selectedProject.detailedDescription}</p>
                </div>
                
                <div className="modal-features">
                  <h3>Key Features</h3>
                  <ul>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-technologies">
                  <h3>Technologies Used</h3>
                  <div className="tech-tags">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="modal-footer">
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="modal-btn modal-btn-secondary">
                <FaGithub />
                View Code
              </a>
              <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="modal-btn modal-btn-primary">
                <FaExternalLinkAlt />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;





