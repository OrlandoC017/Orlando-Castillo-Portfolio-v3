"use client";
import ProjectCard from "./ProjectCard";
import { useRef } from "react";

export default function ProjectsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

    function scrollCarousel(direction: 'next' | 'prev') {
      const scroll = scrollRef.current;
      if (!scroll) return;
      const card = scroll.querySelector('.project-card') as HTMLElement;
      if (!card) return;
      const cardWidth = card.offsetWidth + 32; // 32px gap
      scroll.scrollBy({
        left: direction === 'next' ? cardWidth : -cardWidth,
        behavior: 'smooth',
      });
    }
  
    return (
      <div className="projects-carousel">
        <button className="carousel-btn carousel-btn-prev" onClick={() => scrollCarousel('prev')}>
          ❮
        </button>
        <div className="projects-scroll" ref={scrollRef}>
          <ProjectCard
            title="T-React Website"
            description="A short description of your project goes here. Highlight the tech and your role."
            link="#"
          />
          <ProjectCard
            title="Movie Database Website"
            description="Another project description. You can add as many cards as you want!"
            link="#"
          />
          <ProjectCard
            title="Project Three"
            description="Describe your best work here. Make it shine!"
            link="#"
          />
          {/* Add more ProjectCard components here if needed */}
        </div>
        <button className="carousel-btn carousel-btn-next" onClick={() => scrollCarousel('next')}>
          ❯
        </button>
      </div>
    );
  }
