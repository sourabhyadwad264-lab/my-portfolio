import "./Projects.css";

function Projects() {
  const projectData = [
    {
      title: "Shopping Cart App",
      description:
        "A responsive shopping cart application using React, Context API, and Reducers.",
      tech: "React, Context API, CSS",
      github: "https://github.com/yourusername/shopping-cart",
    },

    {
      title: "Weather App",
      description:
        "Weather forecasting application using API integration and responsive UI.",
      tech: "React, API, CSS",
      github: "https://github.com/yourusername/weather-app",
    },

    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website to showcase projects and frontend skills.",
      tech: "React, Vite, CSS",
      github: "https://github.com/yourusername/portfolio",
    },
  ];

  return (
    <section className="projects" id="projects">

      <h2 className="projects-title">Projects</h2>

      <div className="projects-container">

        {projectData.map((project, index) => (
          <div className="project-card" key={index}>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span>{project.tech}</span>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;