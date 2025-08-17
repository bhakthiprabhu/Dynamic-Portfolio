import { skills } from "../data/config";
import * as Icons from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>
       <div className="skills-grid">
        {skills.map(s => {
          const Icon = Icons[s.icon];
          if (!Icon) return null; // skip if icon not found
          return (
            <div key={s.name} className="skill-card">
              <Icon size={40} />
              <h4>{s.name}</h4>
              <p>{s.level}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
