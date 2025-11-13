"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const scenarios = [
  {
    id: "research",
    title: "Autonomous Research Analyst",
    prompt: "Investigate emerging AI governance frameworks and produce an executive-ready brief.",
    output:
      "Synthesizes regulatory updates, benchmarks corporate policies, and surfaces risk mitigation steps with citations.",
    steps: ["Ingest policy feeds", "Rank source credibility", "Draft summary", "Flag open questions"]
  },
  {
    id: "product",
    title: "Product Copilot",
    prompt: "Design onboarding flow for a new AI-first productivity app tailored to hybrid teams.",
    output:
      "Generates persona-specific journeys, UI wireframe descriptions, and analytics instrumentation roadmap.",
    steps: ["Assess personas", "Map friction points", "Generate flows", "Attach instrumentation"]
  },
  {
    id: "ops",
    title: "Operational Guardian",
    prompt: "Monitor global supply chain signals and recommend interventions before SLA breaches.",
    output:
      "Predicts risk windows, orchestrates mitigation playbooks, and alerts stakeholders with escalation tiers.",
    steps: ["Stream signals", "Score anomalies", "Simulate interventions", "Alert stakeholders"]
  }
];

export default function DemoShowcase() {
  const [selected, setSelected] = useState(scenarios[0]);

  return (
    <section id="demo" className="demo-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Live Demo</span>
          <h2>Agentic Workflow Explorer</h2>
          <p>
            Choose a scenario to preview how autonomous agents plan, orchestrate tools, and deliver verified
            outcomes.
          </p>
        </div>
        <div className="demo-grid">
          <div className="demo-selector">
            {scenarios.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => setSelected(scenario)}
                className={`demo-pill ${selected.id === scenario.id ? "demo-pill--active" : ""}`}
              >
                {scenario.title}
              </button>
            ))}
          </div>
          <motion.div
            key={selected.id}
            className="demo-panel"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="demo-panel__prompt">
              <span>Goal</span>
              <p>{selected.prompt}</p>
            </div>
            <div className="demo-panel__steps">
              <span>Agent Playbook</span>
              <ul>
                {selected.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>
            <div className="demo-panel__output">
              <span>Outcome</span>
              <p>{selected.output}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
