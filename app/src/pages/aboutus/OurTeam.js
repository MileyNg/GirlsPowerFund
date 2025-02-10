import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../components/languages";
import { useTranslation } from "react-i18next";
import ceo_pic from "../../img/ceo_pic.jpg";
import member_1_pic from "../../img/team_member_1.png";
import member_2_pic from "../../img/team_member_2.png";
import member_3_pic from "../../img/team_member_3.png";
import "react-vertical-timeline-component/style.min.css";
import Image from "react-bootstrap/Image";
import TextLeft from "../../components/TextLeft";
import Quote from "../../components/Quote";

function OurTeam() {
  const { t } = useTranslation();
  const data = {
    background: "background-purple",
    title: t("ourteam1title"),
    text: t("ourteam1"),
  };
  return (
    <div className="background-purple">
      <TextLeft data={data} />
      <TeamCards />
      <Quote text={t("ourteam2")} />
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
                className="card-image"
              />
              <p>{card.title}</p>
              <div className="card-description">
                <h4>{card.description}</h4>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default OurTeam;
