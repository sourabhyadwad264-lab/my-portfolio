import "./Resume.css";

function Resume() {
  return (
    <section className="resume" id="resume">

      <h2 className="resume-title">Resume</h2>

      <div className="resume-container">

        <p>
          Download my resume to know more about my
          skills, projects, education, and experience.
        </p>

        <a
          href="/resume.pdf"
          download="SUY.pdf"
          className="resume-btn"
        >
          Download Resume
        </a>

      </div>
    </section>
  );
}

export default Resume;