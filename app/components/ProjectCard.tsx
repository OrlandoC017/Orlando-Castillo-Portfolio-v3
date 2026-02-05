

export default function ProjectCard({ title, description, link, image }: { title: string; description: string; link: string; image?: string }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-card">
      <div className="project-card-img-wrapper">
        {image ? (
          <img src={image} alt={title + ' preview'} className="project-card-img-full" />
        ) : (
          <div className="project-card-img"></div>
        )}
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-desc">{description}</p>
        <div className="project-card-footer">
          <div className="project-card-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
}

