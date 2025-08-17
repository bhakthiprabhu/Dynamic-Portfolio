import React from "react";
import { hero } from "../data/config";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Background Shapes */}
      <motion.div
        className="hero-bg-shape circle1"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="hero-bg-shape circle2"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      <motion.div
        className="hero-bg-shape circle3"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.06, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      />

      {/* Hero Content */}
      <div className="hero-content">
        {/* Profile Picture */}
        <motion.img
          src={hero.avatar} 
          alt="Profile"
          className="hero-avatar"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />

        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          {hero.name}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          {hero.tagline}
        </motion.p>
        <a href={hero.ctaLink} className="btn-primary" >
          {hero.ctaText}
        </a>
      </div>
    </section>
  );
}
