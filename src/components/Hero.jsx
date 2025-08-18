import React from "react";
import { hero } from "../data/config";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        {/* Left Side - Text */}
        <div className="hero-text">
          <motion.span
            className="hero-role"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {hero.role}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hello, my name is <br />
            <span className="highlight">{hero.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {hero.tagline}
          </motion.p>

          <div className="hero-buttons">
            <a href={hero.ctaLink} className="btn-primary">
              {hero.ctaText}
            </a>
            {hero.secondaryCta && (
              <a href={hero.secondaryCta.link} className="btn-secondary">
                {hero.secondaryCta.text}
              </a>
            )}
          </div>
        </div>

        {/* Right Side - Image */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <img src={hero.avatar} alt="Profile" className="hero-avatar" />
        </motion.div>
      </div>
    </section>
  );
}
