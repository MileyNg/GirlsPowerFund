import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../components/languages";
import { useTranslation } from "react-i18next";
import ceo_pic from "../../img/ceo_pic.jpg";
import member_1_pic from "../../img/team_member_1.png";
import member_2_pic from "../../img/team_member_2.png";
import member_3_pic from "../../img/team_member_3.png";
import obama_pic from "../../img/pic8.jpg";
import presentation_pic from "../../img/presentation.png";
import video_pic from "../../img/video_pic.png";
import "react-vertical-timeline-component/style.min.css";
import Image from "react-bootstrap/Image";
import TextLeft from "../../components/TextLeft";
import Quote from "../../components/Quote";
import ImageText from "../../components/ImageText";

function OurTeam() {
  const { t } = useTranslation();
  const data = {
    background: "",
    title: t("ourteam1title"),
    text: t("ourteam1"),
  };

  const data2 = {
    background: "",
    image: video_pic,
    alt: "Video",
    borderImage: "image-border-gradient",
  };
  const data3 = {
    background: "background-stripes",
    image: presentation_pic,
    alt: "Presentation picture",
    borderImage: "",
  };
  const data4 = {
    background: "",
    title: t("ourteam4title"),
    text: t("ourteam4"),
    href: "/aboutus/newsandmediamentions",
    buttonText: t("readmore"),
    image: obama_pic,
    alt: "Obama picture",
    borderImage: "",
  };

  return (
    <div>
      <div className="background-gradient">
        <TextLeft data={data} />
        <TeamCards />
      </div>
      <Quote text={t("ourteam2")} />
      <ImageBackground data={data2} />
      <ImageBackground data={data3} />
      <QuoteCard />
      <div className="text-image-container">
        <h3>
          <span className="custom-badge">{t("featured")}</span>
        </h3>
      </div>
      <ImageText data={data4} />
    </div>
  );
}

function TeamCards() {
  const { t } = useTranslation();
  const cardData = [
    {
      title: <h5 className="card-title">{t("ourteamceo")}</h5>,
      image: ceo_pic,
      description: <p>{t("ourteamceoname")}</p>,
    },
    {
      title: <h5 className="card-title">{t("ourteammember1")}</h5>,
      image: member_1_pic,
      description: <p>{t("ourteammember1name")}</p>,
    },
    {
      title: <h5 className="card-title">{t("ourteammember2")}</h5>,
      image: member_2_pic,
      description: <p>{t("ourteammember2name")}</p>,
    },
    {
      title: <h5 className="card-title">{t("ourteammember3")}</h5>,
      image: member_3_pic,
      description: <p>{t("ourteammember3name")}</p>,
    },
  ];

  return (
    <div>
      <Container className="cards-container">
        <Row className="cards">
          {cardData.map((card, index) => (
            <Col className="card" md={2} key={index}>
              <Image
                src={card.image}
                alt="card-images"
                className="team-card-image"
                roundedCircle
              />
              <p>{card.title}</p>
              <div className="card-description">
                <h5>{card.description}</h5>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
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

function QuoteCard() {
  const { t } = useTranslation();
  const cardData = [
    {
      title: (
        <h5 className="card-title">
          {t("ourteamceoname")} - {t("ourteamceo")} of {t("company")}
        </h5>
      ),
      image: ceo_pic,
      description: <p>{t("ourteam3")}</p>,
    },
  ];

  return (
    <div className="background-purple">
      <Container className="cards-container">
        <Row className="cards">
          {cardData.map((card, index) => (
            <Col className="card" md={10} key={index}>
              <div className="card-description">
                <h5>{card.description}</h5>
              </div>
              <p>{card.title}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default OurTeam;
