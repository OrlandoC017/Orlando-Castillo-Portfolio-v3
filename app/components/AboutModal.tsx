import React, { useState } from "react";

export default function AboutModal({ show, onClose }: { show: boolean; onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const isFormValid = email.trim() && name.trim() && message.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    
    setIsLoading(true);
    // Simulate API call (replace with your actual submission logic)
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setIsSuccess(true);
    
    // Reset after 2 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setEmail("");
      setName("");
      setMessage("");
      onClose();
    }, 2000);
  };

  if (!show) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-left">
          <h2>About Me</h2>
          <div className="modal-about-text">
            <p>
              Hi! I'm Orlando Castillo, a web developer passionate about building beautiful and functional web experiences.<br /><br />
              If you're looking for a developer who combines technical expertise with creativity and a drive for results, let's connect! I'm eager to bring my skills and energy to a forward-thinking team. <b>Recruiters and hiring managers:</b> feel free to reach out—I'd love to discuss how I can contribute to your organization and help build something amazing together.
            </p>
          </div>
          <div className="modal-tech-stack">
            <div className="modal-tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" title="React" />
            </div>
            <div className="modal-tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" title="Next.js" />
            </div>
            <div className="modal-tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" title="TypeScript" />
            </div>
            <div className="modal-tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" />
            </div>
            <div className="modal-tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" title="CSS3" />
            </div>
            <div className="modal-tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" title="HTML5" />
            </div>
          </div>
        </div>
        <div className="modal-right">
          <h2>Contact Me</h2>
          {isSuccess ? (
            <div className="modal-success">
              <div className="success-checkmark">✓</div>
              <p>Successfully sent!</p>
            </div>
          ) : isLoading ? (
            <div className="modal-loading">
              <div className="loading-spinner"></div>
              <p>Sending...</p>
            </div>
          ) : (
            <form className="modal-form" onSubmit={handleSubmit}>
              <label htmlFor="modal-email">Email Address</label>
              <input type="email" id="modal-email" name="email" value={email} onChange={e => setEmail(e.target.value)} required />
              <label htmlFor="modal-name">Name</label>
              <input type="text" id="modal-name" name="name" value={name} onChange={e => setName(e.target.value)} required />
              <label htmlFor="modal-message">Message</label>
              <textarea id="modal-message" name="message" rows={4} value={message} onChange={e => setMessage(e.target.value)} required />
              <button type="submit" className="modal-submit" disabled={!isFormValid}>Submit</button>
            </form>
          )}
        </div>
        <button className="modal-close" onClick={onClose}>&times;</button>
      </div>
    </div>
  );
}
