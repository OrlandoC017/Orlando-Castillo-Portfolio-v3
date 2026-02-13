"use client"
import ProjectCard from "./components/ProjectCard";
import { useState, useEffect } from "react";
import AboutModal from "./components/AboutModal";
import { Github, FileUser, Linkedin  } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="portfolio-bg">
      {/* Header */}
      <header className="header">
        <div className="header-title">Orlando Castillo</div>
        <nav className="header-nav">
          <div className="header-btn--wrapper"><button className="header-btn" onClick={e => { e.preventDefault(); setShowModal(true); }}>Let's Connect</button></div>
          
        </nav>
      </header>

      <div data-aos="fade-up">{/* Hero Section */}
      <section className="hero-section">
        <img
          src="./Headshot.jpg"
          alt="Orlando Castillo headshot"
          className="hero-img"
        />
        <h1 className="hero-title">Hi, I'm Orlando Castillo</h1>
        <p className="hero-desc">A passionate web developer crafting beautiful and functional web experiences with Next.js, React, and modern web technologies.</p>
        <div className="hero-icons">
          <a href="https://github.com/OrlandoC017" target="_blank" rel="noopener noreferrer" className="hero-icon-link">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/orlando-castillo-01/?skipRedirect=true" target="_blank" rel="noopener noreferrer" className="hero-icon-link">
            <Linkedin size={24} />
          </a>
          <a href="https://1drv.ms/w/c/d5cccfb5ca94cb8c/IQCqlUk639xQQ42x777NCHhRAezC8eIUDkD1tyiOPrsoLYw?e=v3A33i" target="_blank" className="hero-icon-link">
            <FileUser size={24} />
          </a>
        </div>
        <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="hero-btn">View My Work</button>
      </section></div>
      

      {/* Tech Stack Section */}
      <section className="tech-stack-section" data-aos="flip-left">
        <h2 className="tech-stack-title">Tech Stack</h2>
        <div className="tech-stack-list">
          {/* Add or edit your tech stack icons and names here */}
          <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="tech-icon" /> <span className="tech-text">React</span></div>
          <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="tech-icon" /> <span className="tech-text">Next.js</span></div>
          <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="tech-icon" /> <span className="tech-text">TypeScript</span></div>
          <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="tech-icon" /> <span className="tech-text">JavaScript</span></div>
          <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="tech-icon" /> <span className="tech-text">CSS3</span></div>
          <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="tech-icon" /> <span className="tech-text">HTML5</span></div>
          {/* Add more as needed */}
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="projects-section" data-aos="fade-up">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-grid">
              <ProjectCard
              title="T-React Website"
              description="Template website created from the ground up, using basic HTML and CSS. I learned the fundamentals of web development and responsive design, and put them into practice for this site."
              link="https://orlandoc017.github.io/Module-2-Final-Project/"
              git="https://github.com/OrlandoC017/Module-2-Final-Project"
              image = "/T-React Site.png"
              />
              <ProjectCard
              title="Movie Database Website"
              description="This project uses React and the TMDB API to display movie information. Users can search for movies, view details, and explore popular films."
              link="https://module-6-react-final-project.vercel.app/"
              git="https://github.com/OrlandoC017/Module-6---React-Final-Project"
              image = "/Movie Database Site.png"
              />
              <ProjectCard
              title="Library Project"
              description="E-Commerce website create with NextJS. Learned and practiced about dynamic routing on this project, so you'll be able to navigate between different pages and view product details. On top of that, users can 'add to cart' and manage their shopping experience."
              link="https://library-next-js-site.vercel.app/"
              git="https://github.com/OrlandoC017/Library-NextJs-Site"
              image = "/Library.png"
              />
              <ProjectCard
              title="NFT Marketplace"
              description="Marketplace for NFTs, built with NextJS. Users can browse, buy, and sell NFTs in a decentralized environment. This website features a sleek and modern design, making it easy for users to navigate and interact with the platform. I hit multiple APIs to fetch NFT data and display it dynamically. You'll have the ability to view profiles for every NFT, as well as the profiles of the creators, which was made possible through dynamic routing."
              link="https://orlando-castillo-nft-ultraverse-pro.vercel.app/"
              git="https://github.com/OrlandoC017/orlandoc-internship/tree/main"
              image = "/NFT Ultraverse.png"
              />
              <ProjectCard
              title="Summarist Advanced Project"
              description="An advanced project that demonstrates my skills in web development and design. This is a book website, complete with an audio player with each book. You'll have the ability to listen to the books while reading along. Website features the ability to log in and log out, as well as upgrade to a premium account. To try out a 'premium' account, use the credentials embedded on the login modal. This project was created with NextJs, Typescript, Firebase, and Redux."
              link="https://orlandoc-summarist-project.vercel.app/"
              git="https://github.com/OrlandoC017/orlandoc-advanced-project"
              image = "/Summarist.png"
              />
              <ProjectCard
              title="Skinstric Project"
              description="Internship project, using NextJS. This is a website built from the ground up, and it is where users can upload pictures of themselves, or take a picture with their webcams. Using the power of A.I, the website can analyze the image and determine characteristics such as age, race, and gender."
              link="https://orlando-castillo-skinstric-project.vercel.app/"
              git="https://github.com/OrlandoC017/Orlando-Castillo-Skinstric-Project"
              image = "/Skinstric.png"
              />
            </div>
      </section>

      {/* About Me Section */}
      <section className="about-section" data-aos="fade-up">
        <div className="about-container">
          <div className="about-left">
            <img src="/me-diver.jpg" alt="About me" className="about-img" />
          </div>
          <div className="about-right">
            <h2 className="about-title">About Me</h2>
            <p className="about-text">
              I'm a web developer with a passion for creating engaging and user-friendly web experiences. I specialize in building responsive and accessible websites using modern technologies like Next.js, React, and TypeScript. I have both an engineering and business degree from the University of Connecticut, and I enjoy combining my technical skills with my business knowledge to create impactful digital solutions. <br /> Outside of coding, I love the great outdoors, traveling, and exploring new cultures. I love to go hiking and biking when the weather gets warm.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <div className="contact-container">
        <h1 className="contact-title">Contact Me Here!</h1>
        <div className="header-btn--wrapper"><button className="header-btn" onClick={e => { e.preventDefault(); setShowModal(true); }}>Let's Connect</button></div>
      </div>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="mb-2">&copy; {new Date().getFullYear()} Orlando Castillo. All rights reserved.</div>
      </footer>

      <AboutModal show={showModal} onClose={() => setShowModal(false)} />

        
      

    </div>
  );
}
