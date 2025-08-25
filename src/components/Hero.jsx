import React, { useState, useEffect } from "react";
import { hero } from "../data/config";
import { motion } from "framer-motion";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [forward, setForward] = useState(true);
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = hero.roles || [hero.tagline]; 

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (forward) {
        if (index < currentRole.length) {
          setTypedText(currentRole.slice(0, index + 1));
          setIndex(index + 1);
        } else {
          setForward(false);
        }
      } else {
        if (index > 0) {
          setTypedText(currentRole.slice(0, index - 1));
          setIndex(index - 1);
        } else {
          setForward(true);
          setRoleIndex((prev) => (prev + 1) % roles.length); // go to next role
        }
      }
    }, 150);

    return () => clearTimeout(timeout);
  }, [index, forward, roleIndex, roles]);

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
            <span className="hero-name">{hero.name}</span>
          </motion.h1>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {typedText || "\u00A0"}
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
            {/* Updated button to Download Resume */}
             <a href={hero.resume} download className="btn-primary">
              Download Resume
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
