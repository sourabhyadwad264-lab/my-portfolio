import "./Hero.css";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Background Glow Effects */}

      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>

      <div className="particles">

  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>

</div>


      <div className="hero-content">

        {/* Left Content */}

        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="hero-subtitle">
            FRONTEND • REACT • UI ENGINEER
          </p>

          <h1>
            Hi, I'm <span>Sourabh</span>
          </h1>

          <h2>
            Building Next-Generation
            Digital Experiences
          </h2>

          <p className="hero-description">
            Passionate software developer focused on
            modern frontend engineering, futuristic UI,
            performance optimization, and creating
            premium interactive web experiences.
          </p>

          {/* Buttons */}

          <div className="hero-buttons">

            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>

          </div>

      </motion.div>

      {/* Right Side Card */}

      <motion.div
  className="hero-card glass-card"
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.2 }}
>
        <div className="card-glow"></div>

        <h3>Developer Vision</h3>

        <p>
          Transforming ideas into futuristic,
          scalable, and high-performance
          digital experiences.
        </p>
        <div className="tech-stack">

          <span>React</span>
          <span>JavaScript</span>
          <span>UI/UX</span>
          <span>Frontend</span>
          <span>Performance</span>

        </div>
      </motion.div>
    </div>
      

    </section >
  );
};

export default Hero;