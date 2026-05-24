import "./Projects.css";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "Next-Gen Portfolio",
    description:
      "Modern futuristic portfolio with cinematic UI, animations, glassmorphism, and premium frontend interactions.",
    tech: ["React", "CSS", "Framer Motion"],
  },

  {
    title: "Shopping Cart App",
    description:
      "Advanced shopping cart application using Context API and useReducer with dynamic UI interactions.",
    tech: ["React", "Context API", "Reducer"],
  },

  {
    title: "Theme Toggle System",
    description:
      "Dynamic dark/light theme system built using React Context API with smooth transitions.",
    tech: ["React", "Context API"],
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">

      <div className="container">

        <h2 className="section-title">
          Featured Projects
        </h2>

        <div className="projects-grid">

          {projectData.map((project, index) => (

            <motion.div
              className="project-card glass-card"

              key={index}

              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.8 }}

              viewport={{ once: true }}
            >

              <div className="project-glow"></div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              {/* Tech Stack */}

              <div className="project-tech">

                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}

              </div>

              {/* Buttons */}

              <div className="project-buttons">

                <a href="#" className="btn btn-primary">
                  Live Demo
                </a>

                <a href="#" className="btn btn-outline">
                  GitHub
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;