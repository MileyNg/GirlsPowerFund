import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../components/languages";
import { useTranslation } from "react-i18next";
import Grouppic from "../img/pic1.jpg";
import Educationpic from "../img/pic2.jpg";
import Representationpic from "../img/pic3.jpg";
import Experiencepic from "../img/pic4.jpg";
import { FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <div>
      <TextImage1 />
      <Quote translationKey="home2" />
      <Cards />
      <Quote translationKey="home7"/>
      <TextImage2 />
    </div>
  );
}

function TextImage1() {
  const { t } = useTranslation();
  return (
    <div className="background-gradient">
      <Container className="text-image-container">
        <Row className="content-container">
          <Col md={7} className="text-section">
            <h1>{t("company")}</h1>
            <p>{t("home1")}</p>
            <p>{t("joinus")}</p>
            <div className="social-buttons">
              <a
                href="https://www.instagram.com/girlspower.fund/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram /> Instagram
              </a>
            </div>
          </Col>
          <Col md={5} className="image-section">
            <img src={Grouppic} alt="Girls Power Fund Group" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function Cards() {
  const { t } = useTranslation();
  const cardData = [
    {
      title: <h5 className="card-title">{t("home3title")}</h5>,
      image: Educationpic,
      description: <p>{t("home3")}</p>,
    },
    {
      title: <h5 className="card-title">{t("home4title")}</h5>,
      image: Representationpic,
      description: <p>{t("home4")}</p>,
    },
    {
      title: <h5 className="card-title">{t("home5title")}</h5>,
      image: Experiencepic,
      description: <p>{t("home5")}</p>,
    },
  ];

  return (
    <Container className="cards-container background-stripes">
      <Row className="cards">
        {cardData.map((card, index) => (
          <Col className="card" md={3} key={index}>
            <img src={card.image} alt="card-images" className="card-image" />
            {card.title}
            <div className="card-description">{card.description}</div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

const Quote = ({ translationKey }) => {
  const { t } = useTranslation();

  return (
    <div className="container quote">
      <h2>{t(translationKey)}</h2>
    </div>
  );
};

function TextImage2() {
  const { t } = useTranslation();

  return (
    <div className="background-gradient">
      <Container className="text-image-container">
        <Row className="content-container">
          <Col md={7} className="text-section">
            <h1>{t("home8title")}</h1>
            <p>{t("home8")}</p>
            <div className="redirect-buttons">
              <a
                href="/progams/codingbootcamp"
                rel="noopener noreferrer"
              > {t("readmore")}
              </a>
            </div>
          </Col>
          <Col md={5} className="image-section">
            <img src={Grouppic} alt="Girls Power Fund Group" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
