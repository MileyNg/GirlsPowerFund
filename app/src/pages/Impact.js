import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../components/languages";
import { useTranslation } from "react-i18next";
import presentation_pic from "../img/presentation.png";
import "react-vertical-timeline-component/style.min.css";
import TextImage from "../components/TextImage";
import Sponsorspic from "../img/Sponsors.png";
import AboutUs2 from "../img/aboutus2.png";

function Impact() {
  const { t } = useTranslation();

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
      <Container className="impact-container">
        <h1>{t("impact")}</h1>
        <p>{t("ourimpact1")}</p>
        <img src={presentation_pic} alt="Presentation" />
      </Container>
      <Sponsors />
      <TextImage data={donate} />
    </div>
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
