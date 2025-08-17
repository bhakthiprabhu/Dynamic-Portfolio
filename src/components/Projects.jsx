import { projects } from "../data/config";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const techs = ["All", ...new Set(projects.flatMap(p => p.tech))];

  const filtered = filter === "All" ? projects : projects.filter(p => p.tech.includes(filter));

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {techs.map(t => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`filter-btn ${filter === t ? "active" : ""}`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="project-grid">
        {filtered.map(p => (
          <div key={p.title} className="project-card">
            <img src={p.image} alt={p.title} className="project-image" />
            <div className="project-content">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tech-stack">{p.tech.join(", ")}</div>
              <div className="project-links">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FaGithub /> GitHub
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
