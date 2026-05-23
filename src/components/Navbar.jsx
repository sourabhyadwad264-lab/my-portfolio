import "./Navbar.css";
import { FaLaptopCode } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
       <a href="#home" className="logo">
        <FaLaptopCode className="logo-icon" />
        <span>Sourabh</span>
      </a>

      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;