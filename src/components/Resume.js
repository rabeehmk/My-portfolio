import React from 'react';
import { FaDownload, FaCalendarAlt, FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
  const handleDownload = () => {
    // Download the actual PDF resume
    const link = document.createElement('a');
    link.href = '/Rabeeh_Muhammad_Sali_CV_Updated (2) (1).pdf';
    link.download = 'Rabeeh_Muhammad_Sali_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const experience = [
    {
      title: 'Software Developer',
      company: 'Bairuhartech Pvt Ltd',
      period: '2025 - Present',
      location: 'Calicut, Kerala',
      description: 'Developing full-stack web applications using React and Next.js. Conducting manual testing to ensure application quality and stability.',
      achievements: [
        'Developed full-stack web applications using React and Next.js',
        'Conducted manual testing to ensure application quality and stability',
        'Implemented modern web development practices'
      ]
    },
    {
      title: 'Python Django Full Stack Intern',
      company: 'Luminar Technolab Pvt Ltd',
      period: '2023 - 2024',
      location: 'Kochi, Kerala',
      description: 'Created full-stack web applications with the Django framework. Built and consumed RESTful APIs to facilitate data exchange. Integrated external APIs to enhance application functionality.',
      achievements: [
        'Created full-stack web applications with Django framework',
        'Built and consumed RESTful APIs for data exchange',
        'Integrated external APIs to enhance application functionality'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      school: 'Calicut University',
      period: '2020 - 2023',
      location: 'Kerala, India',
      gpa: '3.5/4.0',
      coursework: ['Data Structures', 'Algorithms', 'Software Engineering', 'Database Systems', 'Web Development', 'Computer Networks']
    },
    {
      degree: 'Higher Secondary Education (HSE) - Computer Science',
      school: 'Kunhali Marakkar HSS Kottakkal',
      period: '2018 - 2020',
      location: 'Kottakkal, Kerala',
      gpa: '3.2/4.0',
      coursework: ['Computer Science', 'Mathematics', 'Physics', 'Chemistry', 'English']
    }
  ];

  const certifications = [
    {
      name: 'Python Django Full Stack Development',
      issuer: 'Luminar Technolab',
      date: '2023-2024',
      credential: 'LUMINAR-DJANGO-001'
    },
    {
      name: 'Software Engineer',
      issuer: 'Bairuhatech',
      date: '2025',
      credential: 'BAIRUHA-SE-001'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '2022',
      credential: 'META-REACT-001'
    }
  ];

  const projects = [
    {
      name: 'Movie Time',
      description: 'Developed a movie browsing and review application using Django, HTML, CSS, and Bootstrap. Integrated third-party REST APIs to fetch movie data and implemented user-rating features.',
      technologies: ['Django', 'HTML', 'CSS', 'Bootstrap', 'REST APIs'],
      features: [
        'Movie browsing and review functionality',
        'Third-party REST API integration for movie data',
        'User rating and review system',
        'Responsive Bootstrap design'
      ]
    },
    {
      name: 'Employee CRM',
      description: 'Engineered a CRUD-based employee management system using Django. Implemented role-based access for Admin and Employee users, and styled the interface with Bootstrap.',
      technologies: ['Django', 'Bootstrap', 'CRUD Operations', 'Role-based Access'],
      features: [
        'Complete CRUD operations for employee management',
        'Role-based access control (Admin/Employee)',
        'Bootstrap-styled interface',
        'Secure user authentication'
      ]
    },
    {
      name: 'Thai GPT RAG',
      description: 'Developed a document intelligence system for accurate text extraction from PDFs and images. Engineered an AI-powered solution to enable intelligent querying and question-answering from extracted content.',
      technologies: ['AI/ML', 'PDF Processing', 'Image Processing', 'RAG System'],
      features: [
        'Document intelligence and text extraction',
        'PDF and image processing capabilities',
        'AI-powered question-answering system',
        'Intelligent content querying'
      ]
    },
    {
      name: 'Sahari Cargo (Cargo Company)',
      description: 'Implemented new features and functionalities on live production websites. Developed and integrated client-requested modules and enhancements with minimal business disruption.',
      technologies: ['Web Development', 'Production Systems', 'Client Integration'],
      features: [
        'Live production website enhancements',
        'Client-requested module development',
        'Minimal business disruption implementation',
        'Cross-functional team collaboration'
      ]
    },
    {
      name: 'Ben Homes (Construction Company)',
      description: 'Designed and developed the front-end of the company website/system with a strong focus on UI/UX. Built intuitive layouts and interactive components using modern front-end technologies.',
      technologies: ['Frontend Development', 'UI/UX Design', 'Modern Web Technologies'],
      features: [
        'UI/UX focused frontend development',
        'Intuitive layouts and interactive components',
        'Stakeholder collaboration for design refinement',
        'Seamless user experience optimization'
      ]
    },
    {
      name: 'Travel Eye (Travels Company)',
      description: 'Conducted manual testing to ensure project quality and functionality. Identified and reported bugs with detailed documentation to improve application stability.',
      technologies: ['Manual Testing', 'Quality Assurance', 'Bug Documentation'],
      features: [
        'Comprehensive manual testing procedures',
        'Bug identification and detailed reporting',
        'Application stability improvements',
        'Developer collaboration for issue resolution'
      ]
    }
  ];

  return (
    <div className="resume">
      <div className="resume-container">
        <div className="resume-header">
          <h1 className="resume-title">Resume</h1>
          <p className="resume-subtitle">
            Download my resume or explore my professional journey below
          </p>
          <button className="download-btn" onClick={handleDownload}>
            <FaDownload />
            Download Resume
          </button>
        </div>

        <div className="resume-content">
          <div className="resume-section">
            <h2 className="section-title">
              <FaBriefcase className="section-icon" />
              Professional Experience
            </h2>
            <div className="experience-list">
              {experience.map((job, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-header">
                    <h3 className="job-title">{job.title}</h3>
                    <div className="job-meta">
                      <span className="company">{job.company}</span>
                      <span className="period">
                        <FaCalendarAlt />
                        {job.period}
                      </span>
                      <span className="location">
                        <FaMapMarkerAlt />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <p className="job-description">{job.description}</p>
                  <ul className="achievements-list">
                    {job.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="achievement-item">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-section">
            <h2 className="section-title">
              <FaGraduationCap className="section-icon" />
              Education
            </h2>
            <div className="education-list">
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <div className="education-header">
                    <h3 className="degree">{edu.degree}</h3>
                    <div className="education-meta">
                      <span className="school">{edu.school}</span>
                      <span className="period">
                        <FaCalendarAlt />
                        {edu.period}
                      </span>
                      <span className="location">
                        <FaMapMarkerAlt />
                        {edu.location}
                      </span>
                      <span className="gpa">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                  <div className="coursework">
                    <h4>Relevant Coursework:</h4>
                    <div className="coursework-tags">
                      {edu.coursework.map((course, courseIndex) => (
                        <span key={courseIndex} className="course-tag">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-section">
            <h2 className="section-title">
              <FaAward className="section-icon" />
              Certifications
            </h2>
            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-item">
                  <div className="cert-header">
                    <h3 className="cert-name">{cert.name}</h3>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                  <div className="cert-details">
                    <span className="cert-issuer">{cert.issuer}</span>
                    <span className="cert-credential">Credential ID: {cert.credential}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-section">
            <h2 className="section-title">
              <FaBriefcase className="section-icon" />
              Projects
            </h2>
            <div className="projects-list">
              {projects.map((project, index) => (
                <div key={index} className="project-item">
                  <div className="project-header">
                    <h3 className="project-name">{project.name}</h3>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    <h4>Technologies Used:</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul className="features-list">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="feature-item">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;



