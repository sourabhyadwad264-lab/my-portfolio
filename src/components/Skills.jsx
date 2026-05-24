import "./Skills.css";
import { motion } from "framer-motion";

const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: "95%" },
      { name: "CSS", level: "90%" },
      { name: "JavaScript", level: "85%" },
      { name: "React", level: "88%" },
    ],
  },

  {
    title: "Tools & Concepts",
    skills: [
      { name: "Git & GitHub", level: "85%" },
      { name: "Context API", level: "82%" },
      { name: "Responsive Design", level: "90%" },
      { name: "UI/UX", level: "80%" },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">

      <div className="container">

        <h2 className="section-title">
          Technical Skills
        </h2>

        <div className="skills-grid">

          {skillsData.map((category, index) => (

            <motion.div
              className="skill-card glass-card"

              key={index}

              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.8 }}

              viewport={{ once: true }}
            >

              <div className="skill-glow"></div>

              <h3>{category.title}</h3>

              {category.skills.map((skill, i) => (

                <div className="skill-item" key={i}>

                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>

                  <div className="skill-bar">

                    <motion.div
                      className="skill-progress"

                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}

                      transition={{ duration: 1.2 }}

                      viewport={{ once: true }}
                    ></motion.div>

                  </div>

                </div>

              ))}

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;