"use client";

import { motion } from "framer-motion";
import { resources } from "@/data/presentation";

export default function Resources() {
  return (
    <section id="engage">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Next Steps</span>
          <h2>Engage with the Vision</h2>
          <p>
            Extend the session with assets, live walkthroughs, and expert dialogues tailored to your roadmap.
          </p>
        </div>
        <div className="resources">
          {resources.map((resource, index) => (
            <motion.article
              key={resource.name}
              className="resource-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <h3>{resource.name}</h3>
              <p>{resource.description}</p>
              <a href={resource.href} className="cta-link">
                {resource.action}
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
