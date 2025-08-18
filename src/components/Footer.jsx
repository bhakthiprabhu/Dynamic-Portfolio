import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { contact, footer } from "../data/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-socials">
        {Object.entries(contact.socials).map(([key, url]) => {
          const icons = {
            github: <FaGithub />,
            linkedin: <FaLinkedin />,
            twitter: <FaTwitter />,
            facebook: <FaFacebook />,
          };
          return (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              {icons[key.toLowerCase()] || key}
            </a>
          );
        })}
      </div>
      <p className="footer-text">© {year} {footer.text}</p>
    </footer>
  );
}
