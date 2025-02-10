import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../components/languages";
import Cards from "../components/Cards";
import Quote from "../components/Quote";
import QuoteLink from "../components/QuoteLink";
import TextImage from "../components/TextImage";
import ImageText from "../components/ImageText";
import { useTranslation } from "react-i18next";
import Homepic from "../img/home_1.png";
import Grouppic from "../img/pic1.jpg";
import Workpic from "../img/pic2.jpg";
import TechGirlsImage from "../img/techgirls.png";
import RiseImage from "../img/rise.png";
import TechnovationGirlsImage from "../img/technovationgirls.png";
import { FaInstagram } from "react-icons/fa";

function Home() {
  const { t } = useTranslation();

  const girlsInSTEM = {
    background: "background-purple",
    title: t("home8title"),
    text: t("home8"),
    href: "/programs/codingbootcamp",
    buttonText: t("readmore"),
    image: Workpic,
    alt: "Working picture",
    borderImage: "image-border-gradient",
  };

  const accelerate = {
    background: "background-purple",
    title: t("home9title"),
    text: t("home9"),
    href: "/programs/entrepreneurship",
    buttonText: t("readmore"),
    image: Grouppic,
    alt: "Entrepreneurship",
    borderImage: "image-border-gradient",
  };

  const alumni = {
    text: t("home11"),
    href: "/impact",
    linkText: t("home12"),
  };

  return (
    <div>
      <TextImage1 />
      <Quote text={t("home2")} />
      <Cards />
      <Quote text={t("home7")} background="background-purple" />
      <TextImage data={girlsInSTEM} />
      <ImageText data={accelerate} />
      <QuoteLink data={alumni} />
      <TechImages />
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
            <img src={Homepic} alt="Girls Power Fund Group" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function TechImages() {
  return (
    <Container>
      <img src={TechGirlsImage} alt="Tech Girls" />
      <img src={RiseImage} alt="Rise" />
      <img src={TechnovationGirlsImage} alt="Technovation Girls" />
    </Container>
  );
}

export default Home;
