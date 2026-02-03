import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [inkEffect, setInkEffect] = useState(false);

  useEffect(() => {
    setInkEffect(true);
    const timer = setTimeout(() => setInkEffect(false), 1000);
    return () => clearTimeout(timer);
  }, [currentPage]);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <div className="portfolio">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=JetBrains+Mono:wght@400;600&family=Space+Mono:wght@400;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --ink-black: #0a0a0a;
          --paper-white: #fafafa;
          --ink-gray: #2a2a2a;
          --soft-gray: #666;
          --border-gray: #ddd;
        }

        body {
          background: var(--paper-white);
          color: var(--ink-black);
          font-family: 'Space Mono', monospace;
          overflow-x: hidden;
          position: relative;
        }

        /* Paper texture overlay */
        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.03;
          background-image: 
            repeating-linear-gradient(0deg, transparent, transparent 2px, var(--ink-black) 3px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, var(--ink-black) 3px);
          pointer-events: none;
          z-index: 1;
        }

        .portfolio {
          position: relative;
          z-index: 2;
        }

        /* Navigation */
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 2rem 4rem;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          background: linear-gradient(to bottom, var(--paper-white) 80%, transparent);
        }

        .nav-links {
          display: flex;
          gap: 3rem;
          list-style: none;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--ink-black);
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          position: relative;
          padding: 0.5rem 0;
          transition: color 0.3s;
        }

        .nav-links a::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--ink-black);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-links a:hover::before,
        .nav-links a.active::before {
          transform: scaleX(1);
          transform-origin: left;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          position: absolute;
          right: 2rem;
        }

        /* Page container */
        .page-container {
          min-height: 100vh;
          padding: 8rem 4rem 4rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Ink effect transition */
        .ink-transition {
          animation: inkSpread 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes inkSpread {
          0% {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        /* Home Page */
        .home-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
          min-height: 60vh;
        }

        .hero-text h1 {
          font-family: 'Crimson Pro', serif;
          font-size: 5rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.03em;
        }

        .hero-text h1 span {
          display: block;
          background: linear-gradient(135deg, var(--ink-black) 0%, var(--ink-gray) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          color: var(--soft-gray);
          margin-bottom: 2rem;
          line-height: 1.6;
          font-weight: 400;
        }

        .hero-cta {
          display: flex;
          gap: 1.5rem;
          margin-top: 3rem;
        }

        .btn {
          padding: 1rem 2.5rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border: 2px solid var(--ink-black);
          background: transparent;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: var(--ink-black);
          transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: -1;
        }

        .btn:hover::before {
          left: 0;
        }

        .btn:hover {
          color: var(--paper-white);
        }

        .btn-secondary {
          background: var(--ink-black);
          color: var(--paper-white);
        }

        .btn-secondary::before {
          background: var(--paper-white);
        }

        .btn-secondary:hover {
          color: var(--ink-black);
        }

        .hero-visual {
          position: relative;
          height: 500px;
        }

        .ink-splash {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0.1;
        }

        .ink-splash svg {
          width: 100%;
          height: 100%;
        }

        /* About Page */
        .about-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 6rem;
          margin-bottom: 4rem;
        }

        .about-intro h2 {
          font-family: 'Crimson Pro', serif;
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 2rem;
          line-height: 1.2;
        }

        .about-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--ink-gray);
        }

        .about-text p {
          margin-bottom: 1.5rem;
        }

        .skills-section {
          margin-top: 6rem;
        }

        .skills-section h3 {
          font-family: 'Crimson Pro', serif;
          font-size: 2rem;
          margin-bottom: 3rem;
          text-align: center;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
        }

        .skill-category {
          border-left: 3px solid var(--ink-black);
          padding-left: 2rem;
        }

        .skill-category h4 {
          font-family: 'JetBrains Mono', monospace;
          font-size: 1.1rem;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .skill-category ul {
          list-style: none;
        }

        .skill-category li {
          padding: 0.5rem 0;
          color: var(--soft-gray);
          position: relative;
          padding-left: 1rem;
        }

        .skill-category li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: var(--ink-black);
        }

        /* Projects Page */
        .projects-header {
          text-align: center;
          margin-bottom: 6rem;
        }

        .projects-header h2 {
          font-family: 'Crimson Pro', serif;
          font-size: 4rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .projects-header p {
          font-size: 1.2rem;
          color: var(--soft-gray);
        }

        .projects-grid {
          display: grid;
          gap: 4rem;
        }

        .project-card {
          border: 2px solid var(--border-gray);
          padding: 3rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          background: var(--paper-white);
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 0;
          background: var(--ink-black);
          transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover {
          border-color: var(--ink-black);
          transform: translateX(10px);
        }

        .project-card:hover::before {
          height: 100%;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 1.5rem;
        }

        .project-card h3 {
          font-family: 'Crimson Pro', serif;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .project-meta {
          font-size: 0.9rem;
          color: var(--soft-gray);
          font-style: italic;
        }

        .project-card p {
          line-height: 1.8;
          color: var(--ink-gray);
          margin-bottom: 1rem;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1.5rem;
        }

        .tag {
          padding: 0.4rem 1rem;
          border: 1px solid var(--ink-black);
          font-size: 0.8rem;
          font-family: 'JetBrains Mono', monospace;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
          color: var(--ink-black);
          text-decoration: none;
          font-weight: 600;
          transition: gap 0.3s;
        }

        .project-link:hover {
          gap: 1rem;
        }

        /* Contact Page */
        .contact-container-centered {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 60vh;
        }

        .contact-info-centered {
          max-width: 800px;
          text-align: center;
        }

        .contact-info-centered h2 {
          font-family: 'Crimson Pro', serif;
          font-size: 4rem;
          font-weight: 700;
          margin-bottom: 2rem;
          line-height: 1.2;
        }

        .contact-info-centered p {
          font-size: 1.3rem;
          line-height: 1.8;
          color: var(--soft-gray);
          margin-bottom: 4rem;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          align-items: center;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem 2rem;
          border-left: 3px solid var(--ink-black);
          transition: all 0.3s;
          min-width: 400px;
        }

        .contact-item:hover {
          transform: translateX(10px);
          border-left-width: 6px;
        }

        .contact-item svg {
          width: 24px;
          height: 24px;
        }

        .contact-item a {
          color: var(--ink-black);
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          nav {
            padding: 2rem;
          }

          .page-container {
            padding: 6rem 2rem 2rem;
          }

          .home-hero,
          .about-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .hero-text h1 {
            font-size: 3.5rem;
          }

          .nav-links {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .contact-item {
            min-width: 300px;
          }
        }

        @media (max-width: 768px) {
          .hero-text h1 {
            font-size: 2.5rem;
          }

          .about-intro h2,
          .contact-info-centered h2 {
            font-size: 2.5rem;
          }

          .projects-header h2 {
            font-size: 3rem;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .contact-item {
            min-width: auto;
            width: 100%;
          }

          .contact-info-centered p {
            font-size: 1.1rem;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav>
        <ul className="nav-links">
          {navigation.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(item.id);
                }}
                className={currentPage === item.id ? 'active' : ''}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Page Content */}
      <div className={`page-container ${inkEffect ? 'ink-transition' : ''}`}>
        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'projects' && <ProjectsPage />}
        {currentPage === 'contact' && <ContactPage />}
      </div>
    </div>
  );
};

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="home-hero">
      <div className="hero-text">
        <h1>
          <span>Oliver</span>
          <span>Karlsson</span>
        </h1>
        <p className="hero-subtitle">
          Computer Engineer specializing in Applied AI & Embedded Systems. 
          Bridging machine learning, statistical modeling, and real-world applications.
        </p>
        <div className="hero-cta">
          <button className="btn btn-secondary" onClick={() => setCurrentPage('projects')}>
            View Projects
          </button>
          <button className="btn" onClick={() => setCurrentPage('contact')}>
            Get in Touch
          </button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="ink-splash">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="ink">
                <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" />
                <feDisplacementMap in="SourceGraphic" scale="20" />
              </filter>
            </defs>
            <circle cx="200" cy="200" r="150" fill="#0a0a0a" filter="url(#ink)" opacity="0.8">
              <animate attributeName="r" values="150;170;150" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="250" cy="180" r="80" fill="#0a0a0a" filter="url(#ink)" opacity="0.6">
              <animate attributeName="r" values="80;95;80" dur="5s" repeatCount="indefinite" />
            </circle>
            <circle cx="160" cy="220" r="60" fill="#0a0a0a" filter="url(#ink)" opacity="0.5">
              <animate attributeName="r" values="60;75;60" dur="6s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div>
      <div className="about-content">
        <div className="about-intro">
          <h2>About Me</h2>
        </div>
        <div className="about-text">
          <p>
            I'm a Computer Engineer with a Master's degree from Halmstad University, 
            specializing in Applied Artificial Intelligence and Embedded Systems. My work 
            sits at the intersection of theoretical computer science and practical applications, 
            particularly in healthcare analytics and cybersecurity.
          </p>
          <p>
            Currently working as a Software Engineering Intern at Unicus in Gothenburg, I bring 
            experience from both academic research and industry. My master's thesis combined 
            machine learning with survival analysis to predict health risks in elderly populations, 
            working with large-scale Swedish national registry data.
          </p>
          <p>
            I'm passionate about developing intelligent systems that solve real-world problems, 
            whether it's analyzing encrypted network traffic for security threats or building 
            predictive models for healthcare interventions. I thrive in multidisciplinary 
            environments where computer science meets statistics, healthcare, or embedded systems.
          </p>
        </div>
      </div>

      <div className="skills-section">
        <h3>Technical Expertise</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Programming Languages</h4>
            <ul>
              <li>Python</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>C/C++</li>
              <li>C#</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>ML & AI Frameworks</h4>
            <ul>
              <li>PyTorch</li>
              <li>TensorFlow</li>
              <li>Keras</li>
              <li>Scikit-learn</li>
              <li>Pandas & NumPy</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Cloud & Infrastructure</h4>
            <ul>
              <li>AWS</li>
              <li>Google Cloud Platform</li>
              <li>REST APIs</li>
              <li>Docker</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Embedded Systems</h4>
            <ul>
              <li>IoT Development</li>
              <li>Microcontroller Programming</li>
              <li>Real-time Systems</li>
              <li>Edge Computing</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Development Practices</h4>
            <ul>
              <li>Git Version Control</li>
              <li>Agile/Scrum</li>
              <li>Unit Testing</li>
              <li>ISTQB Certified</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Languages</h4>
            <ul>
              <li>Swedish (Native)</li>
              <li>English (Fluent)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  const projects = [
    {
      title: "Health Risk Prediction Model",
      meta: "Master's Thesis | Statistikkonsulterna Väst AB & Gothenburg University",
      description: "Developed an innovative predictive model combining computer science and statistical methods to assess health risk probability among elderly individuals. Applied survival analysis techniques to large-scale Swedish national registry data, integrating machine learning algorithms with healthcare-focused statistical methodologies.",
      tags: ["Machine Learning", "Survival Analysis", "Healthcare", "Python", "Statistical Modeling"],
      link: "https://urn.kb.se/resolve?urn=urn:nbn:se:hh:diva-54163"
    },
    {
      title: "Encrypted Traffic Classification",
      meta: "Bachelor's Thesis | HMS Networks AB",
      description: "Developed a novel approach to classify encrypted network traffic as benign or malicious by converting binary network data into image representations for analysis. Addressed critical cybersecurity challenges in analyzing encrypted traffic without decryption.",
      tags: ["Cybersecurity", "Deep Learning", "Network Analysis", "Image Processing"],
      link: "https://urn.kb.se/resolve?urn=urn:nbn:se:hh:diva-47186"
    }
  ];

  return (
    <div>
      <div className="projects-header">
        <h2>Academic Projects</h2>
        <p>Research at the intersection of AI, statistics, and real-world applications</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <div>
                <h3>{project.title}</h3>
                <p className="project-meta">{project.meta}</p>
              </div>
            </div>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Thesis <ExternalLink size={16} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="contact-container-centered">
      <div className="contact-info-centered">
        <h2>Let's Connect</h2>
        <p>
          I'm always interested in discussing new opportunities, collaborations, 
          or projects at the intersection of AI, embedded systems, and data science.
        </p>
        <div className="contact-methods">
          <div className="contact-item">
            <Mail />
            <a href="mailto:olikar99@gmail.com">olikar99@gmail.com</a>
          </div>
          <div className="contact-item">
            <Phone />
            <a href="tel:+46767909094">+46 076-7909094</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;