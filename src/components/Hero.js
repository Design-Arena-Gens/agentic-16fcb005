"use client";

import { motion } from "framer-motion";

const headline = "Intelligent Horizons";
const subheadline = "An immersive exploration of AI's trajectory, capabilities, and responsible adoption.";

export default function Hero() {
  return (
    <section id="vision" style={{ paddingBottom: "8rem" }}>
      <div className="container">
        <div className="hero">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="hero-text"
          >
            <div className="badge">AI STRATEGY KEYNOTE</div>
            <h1>{headline}</h1>
            <p>{subheadline}</p>
            <div className="cta-group">
              <a className="cta primary" href="#journey">
                Explore the Journey
              </a>
              <a className="cta ghost" href="#demo">
                Watch Live Demo
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="orbital"
          >
            <div className="orbital__core" />
            <div className="orbital__ring orbital__ring--primary" />
            <div className="orbital__ring orbital__ring--secondary" />
            <div className="orbital__ring orbital__ring--tertiary" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
