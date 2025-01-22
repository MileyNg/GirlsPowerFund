import React from "react";
import Logo from "../img/home_1.png";
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
  const { t } = useTranslation();
  return (
    <div className="text-image-container">
      <div className="content-container">
        <div className="text-section">
          <h1>{t("company")}</h1>
          <p>{t("home1")}</p>
          <p>{t("joinus")}</p>
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
  const { t } = useTranslation();

  const cardData = [
    {
      title: <h2>{t("home3title")}</h2>,
      image: require("../img/Logo.png"), // Replace with actual image path or URL
      description: <p>{t("home3")}</p>,
    },
    {
      title: <h2>{t("home4title")}</h2>,
      image: require("../img/Logo.png"), // Replace with actual image path or URL
      description: <p>{t("home4")}</p>,
    },
    {
      title: <h2>{t("home5title")}</h2>,
      image: require("../img/Logo.png"), // Replace with actual image path or URL
      description: <p>{t("home5")}</p>,
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
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t("home2")}</h2>
    </div>
  );
};

const Quote2 = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t("home7")}</h2>
    </div>
  );
};

function TextImage2() {
  const { t } = useTranslation();

  return (
    <div className="text-image-container">
      <div className="content-container">
        <div className="text-section">
          <h2>{t("home8title")}</h2>
          <p>{t("home8")}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
