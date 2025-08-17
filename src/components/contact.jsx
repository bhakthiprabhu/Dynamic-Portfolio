import { contact, emailConfig } from "../data/config";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        emailConfig.serviceID,
        emailConfig.templateID,
        e.target,
        emailConfig.userID
      )
      .then(
        () => alert("Message sent!"),
        () => alert("Error sending message")
      );

    e.target.reset();
  };

  const socialIcons = {
    github: <FaGithub />,
    linkedin: <FaLinkedin />,
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>

      <form className="contact-form" onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>

      <div className="socials">
        {Object.entries(contact.socials).map(([key, url]) => (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            {socialIcons[key.toLowerCase()] || key}
          </a>
        ))}
      </div>
    </section>
  );
}
