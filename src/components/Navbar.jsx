import "./Navbar.css";
import { FaLaptopCode } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Logo */}

        <a href="#home" className="logo">
  <FaLaptopCode className="logo-icon" />
  Sourabh
</a>

        {/* Navigation */}

        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;