import "./About.css";
import { motion } from "framer-motion";

const stats = [
  {
    number: "10+",
    title: "Projects Built",
  },

  {
    number: "5+",
    title: "Technologies",
  },

  {
    number: "100%",
    title: "Passion & Dedication",
  },
];

const About = () => {
  return (
    <section className="about" id="about">

      <div className="container">

        <h2 className="section-title">
          About Me
        </h2>

        <div className="about-content">

          {/* Left Side */}

          <motion.div
            className="about-text glass-card"

            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}

            transition={{ duration: 1 }}

            viewport={{ once: true }}
          >

            <div className="about-glow"></div>

            <h3>
              Passionate Frontend Developer
            </h3>

            <p>
              I am focused on building modern,
              scalable, and visually engaging
              web applications using React and
              modern frontend technologies.
            </p>

            <p>
              My goal is to create premium
              digital experiences that combine
              performance, design, and user
              interaction into a seamless product.
            </p>

          </motion.div>

          {/* Right Side Stats */}

          <div className="about-stats">

            {stats.map((item, index) => (

              <motion.div
                className="stat-card glass-card"

                key={index}

                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}

                transition={{ duration: 0.8 }}

                viewport={{ once: true }}
              >

                <h3>{item.number}</h3>

                <p>{item.title}</p>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;