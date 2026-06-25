import "./Skills.css";
import { motion } from "framer-motion";

const skillsData = [
  {
    title: "Frontend,Backend,Databases & Frameworks",
    skills: [
      { name: "HTML", level: "85%" },
      { name: "CSS", level: "85%" },
      { name: "JavaScript", level: "75%" },
      { name: "React", level: "80%" },
      { name: "MySQL", level: "65%" },

    ],
  },

  {
    title: "Tools,Editors & AI Technologies ",
    skills: [
      { name: "Git & GitHub", level: "80%" },
      { name: "Vercel & Netlify", level: "70%" },
      { name: "Responsive Design", level: "80%" },
      { name: "Generative AI | Chatgpt", level: "70%" },
      { name: "VS Code", level: "90%" }
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

              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}

              transition={{
                duration: 0.8,
                ease: "easeOut"
              }}

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