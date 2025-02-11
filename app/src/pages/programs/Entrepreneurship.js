import React from "react";
import "../../components/languages";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Grouppic from "../../img/home_1.png";
import { GiBrain } from "react-icons/gi";
import { TbMoneybag } from "react-icons/tb";
import { FaHandshake } from "react-icons/fa6";
import Quote from "../../components/Quote";
import TextImage from "../../components/TextImage";
import ImageText from "../../components/ImageText";
import AboutUs2 from "../../img/aboutus2.png";
import JoinPic from "../../img/join.png";

function Entrepreneurship() {
  const { t } = useTranslation();

  const accelerate = {
    background: "background-purple",
    title: t("home9title"),
    text: t("home9"),
    href: "/donate",
    buttonText: t("donate"),
    image: Grouppic,
    alt: "Entrepreneurship",
    borderImage: "image-border-gradient",
  };
  const join = {
    background: "",
    title: "300",
    text: t("entrepreneurship2"),
    href: "/getinvolved",
    buttonText: t("getinvolved"),
    image: JoinPic,
    alt: "Working picture",
    borderImage: "background-stripes",
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
      <ImageText data={accelerate} />
      <CardsBenefits />
      <Quote text={t("codingbootcamp5title")} />
      <TextImage data={join} />
      <Quote text={t("home16")} background="background-purple" />
      <TextImage data={donate} />
    </div>
  );
}

function CardsBenefits({ background }) {
  const { t } = useTranslation();

  return (
    <Container className={`cards-container ${background}`}>
      <Row className="cards">
        <Col className="align-items-center" md={3} key={0}>
          <GiBrain size={100} color="pink" className="mb-3" />
          <h1>{t("codingbootcamp2title")}</h1>
          <div className="card-description">
            <p>{t("codingbootcamp2")}</p>
          </div>
        </Col>
        <Col className="align-items-center" md={3} key={0}>
          <TbMoneybag size={100} color="" className="mb-3" />
          <h1>{t("entrepreneurship1title")}</h1>
          <div className="card-description">
            <p>{t("entrepreneurship1")}</p>
          </div>
        </Col>
        <Col className="align-items-center" md={3} key={0}>
          <FaHandshake size={100} color="gold" className="mb-3" />
          <h1>{t("codingbootcamp4title")}</h1>
          <div className="card-description">
            <p>{t("codingbootcamp4")}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Entrepreneurship;
