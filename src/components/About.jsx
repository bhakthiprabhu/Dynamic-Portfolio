import { about } from "../data/config";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <img src={about.avatar} alt="Avatar" className="about-avatar" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>{about.bio}</p>

          <div className="about-contact">
            <p><strong>Location:</strong> {about.location}</p>
            <p><strong>Email:</strong> <a href={`mailto:${about.email}`}>{about.email}</a></p>
            <p><strong>Phone:</strong> {about.phone}</p>
          </div>

          <div className="about-social">
            {about.social.github && (
              <a href={about.social.github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
            )}
            {about.social.linkedin && (
              <a href={about.social.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
            )}
          </div>

          <div>
            <a href={about.resume} download className="btn-primary">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
