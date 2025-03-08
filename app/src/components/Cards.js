import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./languages";
import Educationpic from "../img/pic2.jpg";
import Representationpic from "../img/pic3.jpg";
import Experiencepic from "../img/pic4_stretched.jpg";

function Cards({ background }) {
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
    <Container className={`cards-container ${background}`}>
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

export default Cards;
