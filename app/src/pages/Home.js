import React from "react";
import Logo from "../img/home_1.png";
import "../App.css";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";

function Home() {
  return (
    <div className="text-image-container">
      <div className="text-section">
        <h1>Girls Power Fund</h1>
        <p>
          A platform to empower girls and young women through STEM and
          entrepreneurship education, mentorship, and opportunities, fostering
          their skills, confidence, and leadership to thrive in a
          technology-driven world.
        </p>
        <p>Join our community!</p>
        <div className="social-buttons">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="me-2" /> Instagram
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane className="me-2" /> Telegram
          </a>
        </div>
      </div>
      <div className="image-section">
        <img src={Logo} alt="Girls Power Fund" />
      </div>
    </div>
  );
}

export default Home;
