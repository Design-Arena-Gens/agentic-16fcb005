"use client";

import { motion } from "framer-motion";
import { highlights } from "@/data/presentation";

export default function Highlights() {
  return (
    <section id="platform" className="section-dark">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Platform Stack</span>
          <h2>Capability Highlights</h2>
          <p>
            Integrated solutions spanning inference, orchestration, and governance to operationalize AI at
            scale.
          </p>
        </div>
        <div className="highlights">
          {highlights.map((item, index) => (
            <motion.article
              key={item.title}
              className="highlight-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
