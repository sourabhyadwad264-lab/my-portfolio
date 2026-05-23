import "./Skills.css";

function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Context API",
    "Git",
    "GitHub",
    "Responsive Design",
    "Vite",
    "Bootstrap",
    "Figma",
    "Gamma",
  ];

  return (
    <section className="skills" id="skills">

      <h2 className="skills-title">My Skills</h2>

      <div className="skills-container">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}

      </div>
    </section>
  );
}

export default Skills;