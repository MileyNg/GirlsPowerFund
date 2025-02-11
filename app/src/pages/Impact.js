import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../components/languages";
import { useTranslation } from "react-i18next";
import presentation_pic from "../img/presentation.png";
import "react-vertical-timeline-component/style.min.css";
import TextLeft from "../components/TextLeft";
import TextImage from "../components/TextImage";
import Sponsorspic from "../img/Sponsors.png";
import AboutUs2 from "../img/aboutus2.png";

function Impact() {
  const { t } = useTranslation();
  const data = {
    background: "",
    title: t("impact"),
    text: t("ourimpact1"),
  };

  const data2 = {
    background: "",
    image: presentation_pic,
    alt: "Presentation picture",
    borderImage: "",
  };

  const donate = {
    background: "background-purple",
    title: t("home17title"),
    text: t("home17"),
    href: "/donate",
    buttonText: t("donatenow"),
    image: AboutUs2,
    alt: "Community",
  };

  return (
    <div>
      <div className="text-image-container background-gradient">
        <TextLeft data={data} />
      </div>
      <ImageBackground data={data2} />
      <Sponsors />
      <TextImage data={donate} />
    </div>
  );
}

function ImageBackground({ data }) {
  return (
    <Container className={`text-image-container ${data.background}`}>
      <Row className="content-container">
        <Col md={6} className={`image-section ${data.borderImage}`}>
          <img src={data.image} alt={data.alt} />
        </Col>
      </Row>
    </Container>
  );
}

function Sponsors() {
  const { t } = useTranslation();
  return (
    <Container>
      <Row className="content-container">
        <Col md={6} className="text-section sponsor-text">
          {t("getinvolved6")}
        </Col>
        <Row>
          <img src={Sponsorspic} alt="Logos of Sponsors" />
        </Row>
      </Row>
    </Container>
  );
}

export default Impact;
