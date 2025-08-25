import { footer } from "../data/config";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialIcons = {
    github: <FaGithub />,
    linkedin: <FaLinkedin />,
  };

  return (
    <footer className="footer">
       {/* Social Icons */}
      <div className="footer-socials">
        {Object.entries(footer.socials).map(([key, url]) => (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            {socialIcons[key]}
          </a>
        ))}
      </div>

      {/* Navigation */}
      <nav className="footer-nav">
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
      </nav>

     

      {/* Copyright */}
      <p className="footer-text">© {year} {footer.text}</p>
    </footer>
  );
}
