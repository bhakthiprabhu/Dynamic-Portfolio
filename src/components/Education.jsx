import { education } from "../data/config";

export default function Education() {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {education.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <span className="edu-year">{edu.year}</span>
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
