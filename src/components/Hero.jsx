import React, { useState, useEffect } from "react";
import { hero } from "../data/config";
import { motion } from "framer-motion";

export default function Hero() {
  const [typedName, setTypedName] = useState("");
  const [index, setIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (forward) {
        if (index < hero.name.length) {
          setTypedName(hero.name.slice(0, index + 1));
          setIndex(index + 1);
        } else {
          setForward(false);
        }
      } else {
        if (index > 0) {
          setTypedName(hero.name.slice(0, index - 1));
          setIndex(index - 1);
        } else {
          setForward(true);
        }
      }
    }, 200);

    return () => clearTimeout(timeout);
  }, [index, forward]); // dependencies are fine here

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="hero-hello">Hey there, I'm</span> <br />
            <span className="hero-name">{typedName || "\u00A0"}</span>
          </motion.h1>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {hero.tagline}
          </motion.p>

          {hero.bio && (
            <motion.p
              className="hero-bio"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {hero.bio}
            </motion.p>
          )}

          <div className="hero-buttons">
            <a href={hero.ctaLink} className="btn-primary">
              {hero.ctaText}
            </a>
          </div>
        </div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <img src={hero.avatar} alt="Profile" className="hero-avatar" />
        </motion.div>
      </div>
    </section>
  );
}
