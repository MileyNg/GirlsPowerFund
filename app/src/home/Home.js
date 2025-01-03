import React from "react";
import Logo from "../img/home_1.png";
import "../App.css";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import "../components/languages";
import { useTranslation } from "react-i18next";

function Home() {
  return (
    <div>
      <TextImage1 />
      <Quote1 />
      <Cards />
      <Quote2 />
      <TextImage2 />
    </div>
  );
}

function TextImage1() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div className="text-image-container">
      <div className="content-container">
        <div className="text-section">
          <h1>Girls Power Fund</h1>
          <p>{t("home1")}</p>
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
    </div>
  );
}

function Cards() {
  const cardData = [
    {
      title: "Education",
      image: require("../img/Logo.png"), // Replace with actual image path or URL
      description:
        "Our approach fosters creativity, critical thinking, and collaboration. Learners leave with confidence and the tools needed to succeed in dynamic environments.",
    },
    {
      title: "Representation",
      image: require("../img/Logo.png"), // Replace with actual image path or URL
      description:
        "We bring inspirational female speakers and leaders to share their journeys, encouraging ambition and inclusivity. Empowers individuals to envision and achieve their goals.",
    },
    {
      title: "Education",
      image: require("../img/Logo.png"), // Replace with actual image path or URL
      description:
        "Our approach fosters creativity, critical thinking, and collaboration. Learners leave with confidence and the tools needed to succeed in dynamic environments.",
    },
  ];

  return (
    <div className="cards-container">
      <div className="cards">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.title} className="card-image" />
            <h2 className="card-title">{card.title}</h2>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const Quote1 = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div>
      <h2>{t("homequote1")}</h2>
    </div>
  );
};

const Quote2 = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div>
      <h2>{t("homequote2")}</h2>
    </div>
  );
};

function TextImage2() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div className="text-image-container">
      <div className="content-container">
        <div className="text-section">
          <h2>Girls in STEM!</h2>
          <p>
            This 2-8 week program is for young woman ages 15-18 that want to
            learn UI/UX design and how to code websites and apps. Participants
            undergo training in one of the tech disciplines and present a
            project based on what they learned.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
