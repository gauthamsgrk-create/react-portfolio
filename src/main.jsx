import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const Projects = lazy(() => import("./components/Projects"));

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Bootstrap",
  "Git & GitHub", "Responsive Design", "REST APIs"
];

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <a className="logo" href="#home">Gautham<span>.</span></a>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-content">
            <p className="eyebrow">FRONTEND DEVELOPER</p>
            <h1>Hi, I'm <span>Gautham</span>.</h1>
            <p className="hero-text">
              I build clean, responsive and user-friendly web applications
              using modern frontend technologies.
            </p>
            <div className="actions">
              <a className="button primary" href="#projects">View Projects</a>
              <a className="button secondary" href="#contact">Contact Me</a>
            </div>
          </div>
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
            alt="Laptop displaying web development code"
            loading="lazy"
          />
        </section>

        <section id="about" className="section">
          <p className="eyebrow">ABOUT ME</p>
          <h2>Building useful digital experiences</h2>
          <p className="section-text">
            I am a Computer Science graduate and frontend development learner
            who enjoys turning ideas into responsive websites. I focus on
            reusable React components, accessible interfaces and clean code.
          </p>
        </section>

        <section id="projects" className="section">
          <p className="eyebrow">MY WORK</p>
          <h2>Featured Projects</h2>
          <Suspense fallback={<p className="loading">Loading projects...</p>}>
            <Projects />
          </Suspense>
        </section>

        <section id="skills" className="section">
          <p className="eyebrow">TECHNOLOGIES</p>
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((skill) => <span className="skill" key={skill}>{skill}</span>)}
          </div>
        </section>

        <section id="resume" className="section resume-section">
          <p className="eyebrow">MY RESUME</p>
          <h2>Ready to build and learn</h2>
          <p className="section-text">
            Download my resume to learn more about my education, skills and projects.
          </p>
          <a className="button primary" href="/resume.pdf" download>Download Resume</a>
        </section>

        <section id="contact" className="section contact-section">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>Let's work together</h2>
          <p className="section-text">
            Have a project or opportunity? Send me a message.
          </p>
          <a className="button primary" href="mailto:your-gautham.sgrk@gmail.com">
            Email Me
          </a>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Gautham. Built with React.</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);