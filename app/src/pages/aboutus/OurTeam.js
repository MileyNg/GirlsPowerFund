import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../components/languages";
import { useTranslation } from "react-i18next";
import ceo_pic from "../../img/ceo.jpg";
import member_1_pic from "../../img/team_member1.jpeg";
import member_2_pic from "../../img/team_member2.jpeg";
import member_3_pic from "../../img/team_member3.jpeg";
import obama_pic from "../../img/pic8.jpg";
import presentation_pic from "../../img/presentation.png";
import "react-vertical-timeline-component/style.min.css";
import Image from "react-bootstrap/Image";
import TextLeft from "../../components/TextLeft";
import Quote from "../../components/Quote";
import ImageText from "../../components/ImageText";
import YouTube from "react-youtube";

function OurTeam() {
  const { t } = useTranslation();
  const data = {
    title: t("ourteam1title"),
    text: t("ourteam1"),
  };

  const data3 = {
    background: "background-purple",
    image: presentation_pic,
    alt: "Presentation picture",
  };

  const data4 = {
    title: t("ourteam4title"),
    text: t("ourteam4"),
    href: "/aboutus/newsandmedia",
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
      <MovieClip />
      <ImageBackground data={data3} />
      <QuoteCard />
      <div className="text-image-container">
        <h1>
          <span className="custom-badge">{t("featured")}</span>
        </h1>
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
              {card.title}
              <h4>{card.description}</h4>
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
      <Row className="justify-center">
        <Col md={10} className="padding-0">
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
    <Container className="cards-container background-purple">
      <Row className="cards">
        {cardData.map((card, index) => (
          <Col className="card" md={10} key={index}>
            <div className="card-description">
              <h5>{card.description}</h5>
            </div>
            {card.title}
          </Col>
        ))}
      </Row>
    </Container>
  );
}

class MovieClip extends React.Component {
  render() {
    const options = {
      height: "315",
      width: "560",
      playerVars: {
        autoplay: 1,
        controls: 1,
      },
    };

    return (
      <div className="text-image-container">
        <YouTube
          videoId="nd0E6PLE1EM"
          options={options}
          onReady={this._onReady}
          id="video"
        />
      </div>
    );
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default OurTeam;
