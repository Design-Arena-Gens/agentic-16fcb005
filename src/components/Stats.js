"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/presentation";

export default function Stats() {
  return (
    <section id="momentum">
      <div className="container">
        <div className="stats">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              className="stat-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <div className="stat-value">{item.value}</div>
              <div className="stat-label">{item.label}</div>
              <div className="stat-change">{item.change}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
