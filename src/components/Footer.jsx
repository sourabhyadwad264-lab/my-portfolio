import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <h3>Sourabh Portfolio</h3>

      <p>
        Built with React & Passion for Web Development 🚀
      </p>

      <div className="footer-links">

        <a
          href="https://github.com/sourabhyadwad264-lab"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="linkedin.com/in/sourabh-yadwad-93907b3b4"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a href="mailto:sourabhyadwad264@gmail.com" target= "_blank">
          Email
        </a>

      </div>

      <span>
        © 2026 Sourabh. All Rights Reserved.
      </span>

    </footer>
  );
}

export default Footer;