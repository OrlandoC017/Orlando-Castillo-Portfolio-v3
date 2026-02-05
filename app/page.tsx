"use client"
import ProjectCard from "./components/ProjectCard";
import { useState } from "react";
import AboutModal from "./components/AboutModal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="portfolio-bg">
      {/* Header */}
      <header className="header">
        <div className="header-title">Orlando Castillo</div>
        <nav className="header-nav">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#" onClick={e => { e.preventDefault(); setShowModal(true); }}>About</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <img
          src="/headshot.jpg"
          alt="Orlando Castillo headshot"
          className="hero-img"
        />
        <h1 className="hero-title">Hi, I'm Orlando Castillo</h1>
        <p className="hero-desc">A passionate web developer crafting beautiful and functional web experiences with Next.js, React, and modern web technologies.</p>
        <a href="#projects" className="hero-btn">View My Work</a>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack-section">
        <h2 className="tech-stack-title">Tech Stack</h2>
        <div className="tech-stack-list">
          {/* Add or edit your tech stack icons and names here */}
          <div className="tech-item"><img src="/react.svg" alt="React" className="tech-icon" /> <span className="tech-text">React</span></div>
          <div className="tech-item"><img src="/next-js.svg" alt="Next.js" className="tech-icon" /> <span className="tech-text">Next.js</span></div>
          <div className="tech-item"><img src="/typescript.svg" alt="TypeScript" className="tech-icon" /> <span className="tech-text">TypeScript</span></div>
          <div className="tech-item"><img src="/javascript.svg" alt="JavaScript" className="tech-icon" /> <span className="tech-text">JavaScript</span></div>
          <div className="tech-item"><img src="/css3.svg" alt="CSS3" className="tech-icon" /> <span className="tech-text">CSS3</span></div>
          <div className="tech-item"><img src="/HTML.svg" alt="HTML5" className="tech-icon" /> <span className="tech-text">HTML5</span></div>
          {/* Add more as needed */}
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="projects-section">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
              <ProjectCard
              title="T-React Website"
              description="Template website created from the ground up, using basic HTML and CSS. I learned the fundamentals of web development and responsive design, and put them into practice for this site."
              link="https://orlandoc017.github.io/Module-2-Final-Project/"
              image = "/T-React Site.png"
              />
              <ProjectCard
              title="Movie Database Website"
              description="This project uses React and the TMDB API to display movie information. Users can search for movies, view details, and explore popular films."
              link="https://module-6-react-final-project.vercel.app/"
              image = "/Movie Database Site.png"
              />
              <ProjectCard
              title="Skinstric Project"
              description="Internship project, using NextJS. This is a website built from the ground up, and it is where users can upload pictures of themselves, or take a picture with their webcams. Using the power of A.I, the website can analyze the image and determine characteristics such as age, race, and gender."
              link="https://orlando-castillo-skinstric-project.vercel.app/"
              image = "/Skinstric.png"
              />
            </div>
      </section>



      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="mb-2">&copy; {new Date().getFullYear()} Orlando Castillo. All rights reserved.</div>
        <div>
          <a href="mailto:your.email@example.com">your.email@example.com</a>
        </div>
      </footer>

      <AboutModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
