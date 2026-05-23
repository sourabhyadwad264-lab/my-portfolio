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
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a href="mailto:youremail@example.com">
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