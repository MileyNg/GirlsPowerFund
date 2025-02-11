import React from "react";
import "../../components/languages";
import { Container, Row, Col } from "react-bootstrap";
import Quote from "../../components/Quote";
import TextImage from "../../components/TextImage";
import ImageText from "../../components/ImageText";
import { useTranslation } from "react-i18next";
import JoinPic from "../../img/join.png";
import Workpic from "../../img/pic2.jpg";
import AboutUs2 from "../../img/aboutus2.png";
import { GiBrain } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { FaHandshake } from "react-icons/fa6";

function CodingBootcamp() {
  const { t } = useTranslation();

  const girlsInSTEM = {
    background: "",
    title: t("home8title"),
    text: t("home8"),
    href: "/programs/codingbootcamp",
    buttonText: t("readmore"),
    image: Workpic,
    alt: "Working picture",
    borderImage: "background-stripes",
  };
  const join = {
    background: "",
    title: "700",
    text: t("codingbootcamp5"),
    href: "/programs/codingbootcamp",
    buttonText: t("readmore"),
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
      <TextImage data={girlsInSTEM} />
      <Quote text={t("codingbootcamp1")} />
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
          <IoIosPeople size={100} color="grey" className="mb-3" />
          <h1>{t("codingbootcamp3title")}</h1>
          <div className="card-description">
            <p>{t("codingbootcamp3")}</p>
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

export default CodingBootcamp;
