import "./Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="contact" id="contact">

      <div className="container">

        <h2 className="section-title">
          Contact Me
        </h2>

        <div className="contact-content">

          {/* Left Side */}

          <motion.div
            className="contact-info glass-card"

            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}

            transition={{ duration: 1 }}

            viewport={{ once: true }}
          >

            <div className="contact-glow"></div>

            <h3>
              Let's Build Something Amazing
            </h3>

            <p>
              I'm always interested in
              frontend development,
              innovative projects,
              and modern web experiences.
            </p>

            <div className="contact-details">

              <p>Email: sourabhyadwad264@gmail.com</p>

              <p>Location:Pune,India</p>

            </div>

          </motion.div>

          {/* Right Side Form */}

          <motion.form
            className="contact-form glass-card"

            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}

            transition={{ duration: 1 }}

            viewport={{ once: true }}
          >
            <h3>🚀 Note:Contact message box that holds name, email , description box & last send messsage button option will be coming soon....</h3>
            {/* <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button className="btn btn-primary">
              Send Message
            </button> */}

          </motion.form>

        </div>

      </div>

    </section>
  );
};

export default Contact;