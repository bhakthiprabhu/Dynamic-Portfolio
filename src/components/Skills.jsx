import { skills } from "../data/config";
import * as SiIcons from "react-icons/si";
import * as VscIcons from "react-icons/vsc";
import { LiaLaptopCodeSolid } from "react-icons/lia"; // default fallback icon

// Merge icon sets for lookup
const Icons = { ...SiIcons, ...VscIcons };

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((s, index) => {
          // Use the skill icon if available, otherwise fallback to LiaLaptopCodeSolid
          const Icon = Icons[s.icon] || LiaLaptopCodeSolid;

          return (
            <div key={index} className="skill-card">
              <Icon size={40} />
              <h4>{s.name || "Unknown Skill"}</h4>
              <p>{s.level || "Unknown Level"}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

