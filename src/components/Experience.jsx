import { experience } from "../data/config";

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Work Experience</h2>
      <div className="timeline">
        {experience.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <span className="exp-year">{exp.year}</span>
              <ul className="exp-list">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
