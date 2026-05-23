import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-container">

        <div className="contact-info">

          <p>
            📧 Email:
            <a href="mailto:sourabh@example.com">
              sourabhyadwad264@gmail.com
            </a>
          </p>

          <p>
            💻 GitHub:
            <a
              href="https://github.com/sourabhyadwad264-lab"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/sourabhyadwad264-lab
            </a>
          </p>

          <p>
            🔗 LinkedIn:
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/sourabh-yadwad-93907b3b4
            </a>
          </p>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Enter Your Name"
          />

          <input
            type="email"
            placeholder="Enter Your Email"
          />

          <textarea
            rows="6"
            placeholder="Enter Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;