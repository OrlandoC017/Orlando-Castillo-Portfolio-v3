import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

// EmailJS Configuration
const PUBLIC_KEY = "KfAVSU5w044ssnoP8";
const SERVICE_ID = "service_689tqjo";
const TEMPLATE_ID = "template_xit9e4v";

export default function AboutModal({ show, onClose }: { show: boolean; onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isClosing, setIsClosing] = useState(false);
  const isFormValid = email.trim() && name.trim() && message.trim();

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init({
      publicKey: PUBLIC_KEY,
    });
  }, []);

  // Reset form when modal opens
  useEffect(() => {
    if (show) {
      setIsClosing(false);
      setEmail("");
      setName("");
      setMessage("");
      setIsLoading(false);
      setIsSuccess(false);
      setError("");
    }
  }, [show]);

  // Handle close with transition
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // Match the CSS transition duration
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsLoading(true);
    setError("");

    try {
      // Send email via EmailJS
      const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        user_name: name,
        user_email: email,
        message: message,
        to_email: "orlando.castillo7123@gmail.com",
      });

      console.log("Email sent successfully:", response);
      setIsSuccess(true);

      // Reset after 2 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setEmail("");
        setName("");
        setMessage("");
        onClose();
      }, 2000);
    } catch (err: any) {
      console.error("Failed to send email:", err);
      console.error("Error text:", err.text);
      setError("Failed to send message. Please try again.");
      setIsLoading(false);
    }
  };

  if (!show) return null;
  return (
    <div className={`modal-overlay ${isClosing ? "modal-closing" : "modal-opening"}`} onClick={handleClose}>
      <div className={`modal-content ${isClosing ? "modal-closing" : "modal-opening"}`} onClick={e => e.stopPropagation()}>
        <div className="modal-left">
          <div className="modal-left-center">
            <div className="modal-about-text">
              <p>
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
        </div>
        <div className="modal-right">
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
              {error && <div style={{ color: "red", marginBottom: "1rem", fontSize: "0.9rem" }}>{error}</div>}
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
        <button className="modal-close" onClick={handleClose}>&times;</button>
      </div>
    </div>
  );
}
