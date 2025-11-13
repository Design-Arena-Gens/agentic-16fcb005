"use client";

import { motion } from "framer-motion";
import { principles } from "@/data/presentation";

export default function Principles() {
  return (
    <section id="responsibility">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Responsible Adoption</span>
          <h2>Operating Principles</h2>
          <p>
            A holistic framework ensuring AI systems remain aligned with human intent, resilient, and auditable
            through every lifecycle stage.
          </p>
        </div>
        <div className="principles">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.title}
              className="principle-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
