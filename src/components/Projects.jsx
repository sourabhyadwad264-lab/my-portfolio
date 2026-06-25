import "./Projects.css";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "Next-Gen Portfolio",
    description:
      "Modern futuristic portfolio with cinematic UI, animations, glassmorphism, and premium frontend interactions.",
    tech: ["React", "CSS", "Performance Optimization", "github", "Vercel"],
    demoLink: "https://your-portfolio-demo.com",
    githubLink: "https://github.com/sourabhyadwad264-lab",
  },

  {
    title: "Shopping Cart App",
    description:
      "Advanced shopping cart application using Context API and useReducer with dynamic UI interactions.",
    tech: ["React", "CSS3", "Context API", "Reducer", "Github", "Vercel"],
    demoLink: "https://my-shopcart-app-chsn.vercel.app/",
    githubLink: "https://github.com/sourabhyadwad264-lab",
  },

  {
    title: "Multidomain Inventory Control App",
    description:
      "Built strictly using a modern frontend architecture (**HTML5, BS5,& Vanilla JS**),it manages physical assets without requiring heavy server-side overhead.",
    tech: ["HTML5", "Bootstrap5", "JS", "Github", "Netlify"],
    demoLink: "https://inventorymanagementcontrol.netlify.app/",
    githubLink: "https://github.com/sourabhyadwad264-lab"
  },

  {
    title: "Theme Toggle System",
    description:
      "Dynamic dark/light theme system built using React Context API with smooth transitions.",
    tech: ["React", "Context API"],
    demoLink: "https://mytheme-toggle-system-app.vercel.app/",
    githubLink: "https://github.com/sourabhyadwad264-lab",
  }
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
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    className="btn btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;