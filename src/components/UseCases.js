"use client";

import { motion } from "framer-motion";
import { useCases } from "@/data/presentation";

export default function UseCases() {
  return (
    <section id="impact">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Impact Tracks</span>
          <h2>Industry Transformations</h2>
          <p>
            Curated narratives demonstrating how adaptive AI systems unlock measurable differentiation across
            core functions.
          </p>
        </div>
        <div className="use-cases">
          {useCases.map((useCase, index) => (
            <motion.article
              key={useCase.category}
              className="use-case"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <div className="use-case__header">
                <span>{useCase.category}</span>
                <h3>{useCase.headline}</h3>
              </div>
              <ul>
                {useCase.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
