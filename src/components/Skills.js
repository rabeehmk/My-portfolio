import React, { useState, useEffect } from 'react';
import { 
  FaReact, FaJs, FaPython, FaGitAlt, FaCode, FaLanguage, FaTools, FaUsers, 
  FaBrain, FaClock, FaComments, FaJava, FaDatabase, FaServer, FaMobile, 
  FaCloud, FaShieldAlt, FaRocket, FaLightbulb, FaHandshake, FaChartLine,
  FaCogs, FaPalette, FaTerminal, FaGlobe, FaLaptopCode, FaProjectDiagram
} from 'react-icons/fa';
import { 
  SiDjango, SiBootstrap, SiHtml5, SiCss3, SiTailwindcss, SiGithub, 
  SiVisualstudiocode, SiMysql, SiPostgresql, SiRedis, SiDocker, SiKubernetes,
  SiNginx, SiApache, SiJenkins, SiJira, SiSlack, SiTrello, SiFigma,
  SiAdobexd, SiPhotoshop, SiIllustrator, SiSketch, SiInvision, SiZeplin
} from 'react-icons/si';
import ClickSpark from './ClickSpark';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [animatedSkills, setAnimatedSkills] = useState({});

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

  // Enhanced Soft Skills Data
  const softSkillsData = [
    {
      id: 'teamwork',
      name: 'Teamwork',
      icon: FaHandshake,
      description: 'Collaborative problem solving and project management',
      category: 'Collaboration',
      level: 92,
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      examples: ['Agile Development', 'Cross-functional Teams', 'Mentoring'],
      strength: 'Strong'
    },
    {
      id: 'critical-thinking',
      name: 'Critical Thinking',
      icon: FaBrain,
      description: 'Analytical problem solving and decision making',
      category: 'Analysis',
      level: 88,
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      examples: ['Code Reviews', 'Architecture Decisions', 'Debugging'],
      strength: 'Strong'
    },
    {
      id: 'time-management',
      name: 'Time Management',
      icon: FaClock,
      description: 'Efficient project delivery and deadline management',
      category: 'Productivity',
      level: 90,
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      examples: ['Sprint Planning', 'Task Prioritization', 'Milestone Tracking'],
      strength: 'Strong'
    },
    {
      id: 'communication',
      name: 'Communication',
      icon: FaComments,
      description: 'Clear technical communication and documentation',
      category: 'Soft Skills',
      level: 85,
      color: '#ef4444',
      gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
      examples: ['Technical Writing', 'Client Presentations', 'Team Meetings'],
      strength: 'Good'
    },
    {
      id: 'leadership',
      name: 'Leadership',
      icon: FaRocket,
      description: 'Leading projects and mentoring team members',
      category: 'Leadership',
      level: 82,
      color: '#06b6d4',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
      examples: ['Project Leadership', 'Team Mentoring', 'Strategic Planning'],
      strength: 'Good'
    },
    {
      id: 'adaptability',
      name: 'Adaptability',
      icon: FaCogs,
      description: 'Quick learning and adapting to new technologies',
      category: 'Learning',
      level: 88,
      color: '#84cc16',
      gradient: 'linear-gradient(135deg, #84cc16 0%, #65a30d 100%)',
      examples: ['New Frameworks', 'Technology Shifts', 'Problem Solving'],
      strength: 'Strong'
    }
  ];

  // Skill categories for filtering
  const skillCategories = [
    { id: 'all', name: 'All Skills', icon: FaCode },
    { id: 'Frontend', name: 'Frontend', icon: FaPalette },
    { id: 'Backend', name: 'Backend', icon: FaServer },
    { id: 'Tools', name: 'Tools', icon: FaTools },
    { id: 'DevOps', name: 'DevOps', icon: FaCloud },
    { id: 'Collaboration', name: 'Collaboration', icon: FaUsers },
    { id: 'Analysis', name: 'Analysis', icon: FaChartLine },
    { id: 'Productivity', name: 'Productivity', icon: FaClock },
    { id: 'Soft Skills', name: 'Soft Skills', icon: FaComments },
    { id: 'Leadership', name: 'Leadership', icon: FaRocket },
    { id: 'Learning', name: 'Learning', icon: FaLightbulb }
  ];

  // Filter skills based on active category
  const filteredTechnicalSkills = activeCategory === 'all' 
    ? technicalSkillsData 
    : technicalSkillsData.filter(skill => skill.category === activeCategory);

  const filteredSoftSkills = activeCategory === 'all' 
    ? softSkillsData 
    : softSkillsData.filter(skill => skill.category === activeCategory);

  // Animation trigger for skill bars
  useEffect(() => {
    const timer = setTimeout(() => {
      const skills = [...filteredTechnicalSkills, ...filteredSoftSkills];
      skills.forEach(skill => {
        setAnimatedSkills(prev => ({
          ...prev,
          [skill.id]: true
        }));
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  const SkillCard = ({ skill, isSoftSkill = false }) => {
    const IconComponent = skill.icon;
    
    return (
      <ClickSpark sparkColor="#3b82f6" intensity="low" size="small">
        <div className={`skill-card ${isSoftSkill ? 'soft-skill' : 'technical-skill'}`}>
          <div className="skill-card-header">
          <div className="skill-icon-wrapper" style={{ background: skill.gradient }}>
            <IconComponent className="skill-icon" />
          </div>
          <div className="skill-info">
            <h3 className="skill-name">{skill.name}</h3>
            <span className="skill-category">{skill.category}</span>
          </div>
          <div className="skill-level">
            <span className="level-percentage">{skill.level}%</span>
          </div>
        </div>
        
        <div className="skill-card-body">
          <p className="skill-description">{skill.description}</p>
          
          <div className="skill-details">
            {isSoftSkill ? (
              <>
                <div className="skill-detail">
                  <span className="detail-label">Strength:</span>
                  <span className="detail-value">{skill.strength}</span>
                </div>
                <div className="skill-examples">
                  <span className="examples-label">Examples:</span>
                  <div className="examples-tags">
                    {skill.examples.map((example, index) => (
                      <span key={index} className="example-tag">{example}</span>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="skill-detail">
                  <span className="detail-label">Experience:</span>
                  <span className="detail-value">{skill.experience}</span>
                </div>
                <div className="skill-projects">
                  <span className="projects-label">Projects:</span>
                  <div className="projects-tags">
                    {skill.projects.map((project, index) => (
                      <span key={index} className="project-tag">{project}</span>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
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

        {/* Skills Content */}
        <div className="skills-content">
          {/* Technical Skills Section */}
          {filteredTechnicalSkills.length > 0 && (
            <div className="skills-section technical-skills-section">
              <div className="section-header">
                <h2 className="section-title">
                  <FaCode className="section-icon" />
                  Technical Skills
                </h2>
                <p className="section-description">
                  Programming languages, frameworks, and development tools
                </p>
              </div>
              <div className="skills-grid">
                {filteredTechnicalSkills.map(skill => (
                  <SkillCard key={skill.id} skill={skill} isSoftSkill={false} />
                ))}
              </div>
            </div>
          )}

          {/* Soft Skills Section */}
          {filteredSoftSkills.length > 0 && (
            <div className="skills-section soft-skills-section">
              <div className="section-header">
                <h2 className="section-title">
                  <FaUsers className="section-icon" />
                  Soft Skills
                </h2>
                <p className="section-description">
                  Professional competencies and interpersonal abilities
                </p>
              </div>
              <div className="skills-grid">
                {filteredSoftSkills.map(skill => (
                  <SkillCard key={skill.id} skill={skill} isSoftSkill={true} />
                ))}
              </div>
          </div>
          )}

          {/* No Skills Found */}
          {filteredTechnicalSkills.length === 0 && filteredSoftSkills.length === 0 && (
            <div className="no-skills-found">
              <FaCode className="no-skills-icon" />
              <h3>No skills found</h3>
              <p>Try selecting a different category to view skills.</p>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;





