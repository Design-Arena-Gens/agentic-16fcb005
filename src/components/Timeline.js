"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/presentation";

export default function Timeline() {
  return (
    <section id="journey">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Evolution</span>
          <h2>The AI Trajectory</h2>
          <p>
            Milestones that shaped the modern intelligence landscape and set the stage for agentic systems.
          </p>
        </div>
        <div className="timeline">
          {timeline.map((event, index) => (
            <motion.article
              key={event.year}
              className="timeline-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="timeline-year">{event.year}</div>
              <h3>{event.title}</h3>
              <p>{event.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
