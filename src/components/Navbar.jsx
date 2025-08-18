import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // icons for hamburger & close

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a href="#hero" className="nav-logo">MyPortfolio</a>

      {/* Desktop / larger screens */}
      <div className={`nav-right ${isOpen ? "open" : ""}`}>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
        <a href="#education" onClick={() => setIsOpen(false)}>Education</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>
    </nav>
  );
}
