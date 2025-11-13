"use client";

import { motion } from "framer-motion";
import { agenda } from "@/data/presentation";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } }
};

export default function Agenda() {
  return (
    <section id="agenda">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Run of Show</span>
          <h2>Session Architecture</h2>
          <p>
            A narrative arc designed to translate breakthrough research into actionable momentum for
            leadership teams.
          </p>
        </div>
        <motion.ul
          className="agenda"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {agenda.map((item) => (
            <motion.li key={item.title} className="agenda-item" variants={itemVariants}>
              <div className="agenda-time">{item.time}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
