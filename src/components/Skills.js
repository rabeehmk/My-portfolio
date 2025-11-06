import React, { useState, useEffect } from 'react';
import { 
  FaReact, FaJs, FaPython, FaGitAlt, FaCode, FaTools, 
  FaDatabase, FaServer, FaCloud, FaPalette, FaEye, FaTimes
} from 'react-icons/fa';
import { 
  SiDjango, SiBootstrap, SiHtml5, SiCss3, SiTailwindcss, SiGithub, 
  SiVisualstudiocode, SiMysql, SiPostgresql, SiRedis, SiDocker, SiKubernetes,
  SiNginx, SiApache, SiJenkins, SiJira, SiSlack, SiTrello, SiFigma,
  SiAdobexd, SiPhotoshop, SiIllustrator, SiSketch, SiInvision, SiZeplin
} from 'react-icons/si';
import ClickSpark from './ClickSpark';
import './Skills.css';
import './Certificates.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Enhanced Technical Skills Data
  const technicalSkillsData = [
    {
      id: 'python',
      name: 'Python',
      icon: FaPython,
      description: 'Advanced programming with Django framework',
      category: 'Backend',
      level: 90,
      color: '#3776ab',
      gradient: 'linear-gradient(135deg, #3776ab 0%, #ffd43b 100%)',
      projects: ['Web Applications', 'Data Analysis', 'Automation Scripts'],
      experience: '1 years'
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      icon: FaJs,
      description: 'Modern ES6+ and React development',
      category: 'Frontend',
      level: 88,
      color: '#f7df1e',
      gradient: 'linear-gradient(135deg, #f7df1e 0%, #000000 100%)',
      projects: ['Interactive UIs', 'SPA Development', 'API Integration'],
      experience: '1 years'
    },
    {
      id: 'react',
      name: 'React',
      icon: FaReact,
      description: 'Component-based UI development',
      category: 'Frontend',
      level: 85,
      color: '#61dafb',
      gradient: 'linear-gradient(135deg, #61dafb 0%, #21a0c4 100%)',
      projects: ['Component Libraries', 'State Management', 'Hooks & Context'],
      experience: '1 years'
    },
    {
      id: 'django',
      name: 'Django',
      icon: SiDjango,
      description: 'Full-stack web development framework',
      category: 'Backend',
      level: 92,
      color: '#092e20',
      gradient: 'linear-gradient(135deg, #092e20 0%, #44b78b 100%)',
      projects: ['REST APIs', 'Admin Panels', 'Authentication Systems'],
      experience: '1 years'
    },
    {
      id: 'html-css',
      name: 'HTML5 & CSS3',
      icon: SiHtml5,
      description: 'Modern web standards and responsive design',
      category: 'Frontend',
      level: 95,
      color: '#e34f26',
      gradient: 'linear-gradient(135deg, #e34f26 0%, #1572b6 100%)',
      projects: ['Responsive Layouts', 'CSS Animations', 'Cross-browser Compatibility'],
      experience: '1 years'
    },
    {
      id: 'git',
      name: 'Git & GitHub',
      icon: SiGithub,
      description: 'Version control and collaboration',
      category: 'Tools',
      level: 90,
      color: '#181717',
      gradient: 'linear-gradient(135deg, #181717 0%, #333333 100%)',
      projects: ['Version Control', 'CI/CD Pipelines', 'Code Reviews'],
      experience: '1 years'
    },
    {
      id: 'vscode',
      name: 'Visual Studio Code',
      icon: SiVisualstudiocode,
      description: 'Primary editor with extensions and productive workflows',
      category: 'Tools',
      level: 92,
      color: '#007ACC',
      gradient: 'linear-gradient(135deg, #007ACC 0%, #00C8FF 100%)',
      projects: ['Debugging', 'Git Integration', 'Remote Development'],
      experience: '1 years'
    },
    {
      id: 'database',
      name: 'Database Design',
      icon: FaDatabase,
      description: 'SQL and NoSQL database management',
      category: 'Backend',
      level: 85,
      color: '#336791',
      gradient: 'linear-gradient(135deg, #336791 0%, #4a90a4 100%)',
      projects: ['Schema Design', 'Query Optimization', 'Data Modeling'],
      experience: '1 years'
    },

  ];

  // Soft skills removed per request

  // Skill categories for filtering (trimmed)
  const skillCategories = [
    { id: 'all', name: 'All Skills', icon: FaCode },
    { id: 'Frontend', name: 'Frontend', icon: FaPalette },
    { id: 'Backend', name: 'Backend', icon: FaServer },
    { id: 'Tools', name: 'Tools', icon: FaTools }
  ];

  // Filter skills based on active category
  const filteredTechnicalSkills = activeCategory === 'all' 
    ? technicalSkillsData 
    : technicalSkillsData.filter(skill => skill.category === activeCategory);

  // Soft skills removed

  // Modal handlers for skill details
  const openSkillModal = (skillId) => {
    setSelectedSkill(skillId);
  };

  const closeSkillModal = () => {
    setSelectedSkill(null);
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectedSkill && e.target.classList.contains('certificate-modal-overlay')) {
        closeSkillModal();
      }
    };

    if (selectedSkill) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [selectedSkill]);

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedSkill) {
        closeSkillModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedSkill]);

  const SkillCard = ({ skill }) => {
    const IconComponent = skill.icon;
    return (
      <ClickSpark sparkColor="#3b82f6" intensity="low" size="medium">
        <div 
          className="certificate-card skill-card-pro"
          onClick={() => openSkillModal(skill.id)}
        >
          <div className="certificate-image" style={{ background: 'transparent' }}>
            <div style={{ 
              width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: skill.gradient
            }}>
              <div className="certificate-icon" style={{ transform: 'none' }}>
                <IconComponent style={{ color: '#fff', fontSize: '2rem' }} />
              </div>
            </div>
            <div className="certificate-overlay"></div>
          </div>
          <div className="certificate-content">
            <h3 className="certificate-title">{skill.name}</h3>
            <p className="certificate-issuer" style={{ color: '#334155' }}>{skill.category}</p>
            <p className="certificate-desc">{skill.description}</p>
            <button 
              className="btn btn-outline btn-sm btn-full"
              onClick={(e) => { e.stopPropagation(); openSkillModal(skill.id); }}
            >
              <FaEye /> View Details
            </button>
          </div>
        </div>
      </ClickSpark>
    );
  };

  return (
    <div className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h1 className="skills-title">Skills & Expertise</h1>
          <p className="skills-subtitle">
            A comprehensive overview of my technical skills and professional competencies
          </p>
        </div>

        {/* Category Filter */}
        <div className="skills-filter">
          <div className="filter-container">
            {skillCategories.map(category => {
              const IconComponent = category.icon;
              return (
                <ClickSpark key={category.id} sparkColor="#3b82f6" intensity="low" size="small">
                  <button
                    className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <IconComponent className="filter-icon" />
                    <span className="filter-text">{category.name}</span>
                  </button>
                </ClickSpark>
              );
            })}
          </div>
        </div>

        {/* Skills Content - like Certificates */}
        <div className="certificates-grid">
          {filteredTechnicalSkills.map(skill => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
      {selectedSkill && (
        <div 
          className="certificate-modal-overlay"
          onClick={closeSkillModal}
        >
          <div 
            className="certificate-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const skill = technicalSkillsData.find(s => s.id === selectedSkill);
              if (!skill) return null;
              const IconComponent = skill.icon;
              return (
                <>
                  <div className="certificate-modal-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <IconComponent style={{ fontSize: '1.5rem' }} />
                      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>
                        {skill.name}
                      </h2>
                    </div>
                    <button className="certificate-modal-close" onClick={closeSkillModal}>
                      <FaTimes />
                    </button>
                  </div>
                  <div className="certificate-modal-body">
                    <div style={{ marginBottom: '1.5rem' }}>
                      <div style={{ 
                        position: 'relative', height: '200px', overflow: 'hidden', borderRadius: '0.75rem', marginBottom: '1.5rem'
                      }}>
                        <div style={{ width: '100%', height: '100%', background: skill.gradient }}></div>
                        <div style={{ 
                          position: 'absolute', top: '1rem', right: '1rem', width: '72px', height: '72px',
                          borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: 'rgba(0,0,0,0.25)'
                        }}>
                          <IconComponent style={{ color: '#fff', fontSize: '1.5rem' }} />
                        </div>
                      </div>
                      <div style={{ marginBottom: '1rem' }}>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#3b82f6', marginBottom: '0.5rem' }}>
                          {skill.category}
                        </h4>
                        <p style={{ color: '#718096', lineHeight: 1.6 }}>{skill.description}</p>
                      </div>
                      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                        <span className="badge badge-outline">Level: {skill.level}%</span>
                        <span className="badge badge-outline">Experience: {skill.experience}</span>
                      </div>
                      <div>
                        <h5 style={{ fontWeight: 500, color: '#718096', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.75rem', marginBottom: '0.75rem' }}>
                          Projects & Areas
                        </h5>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                          {skill.projects.map((p, idx) => (
                            <span key={idx} className="badge badge-outline" style={{ fontSize: '0.75rem' }}>{p}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;





