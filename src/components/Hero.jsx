import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Hello, I'm Sourabh 👋</h1>

        <h2>Frontend React Developer</h2>

        <p>
          Passionate about building responsive and modern web
          applications using React and JavaScript.
        </p>

        <a href="#projects" className="hero-btn">
          View Projects
        </a>
      </div>
    </section>
  );
}

export default Hero;