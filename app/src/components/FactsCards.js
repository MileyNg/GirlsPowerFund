import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./languages";

function FactsCards({ background }) {
  const { t } = useTranslation();
  const cardData = [
    {
      title: <h5 className="fact-card-title">{t("ourimpact2").split(" ")[0]}</h5>,
      description: <p>{t("ourimpact2").split(" ").slice(1).join(" ")}</p>,
    },
    {
      title: <h5 className="fact-card-title">{t("ourimpact3").split(" ")[0]}</h5>,
      description: <p>{t("ourimpact3").split(" ").slice(1).join(" ")}</p>,
    },
    {
      title: <h5 className="fact-card-title">{t("ourimpact4").split(" ")[0]}</h5>,
      description: <p>{t("ourimpact4").split(" ").slice(1).join(" ")}</p>,
    },
  ];

  return (
    <Container className={`cards-container ${background}`}>
      <Row className="facts-cards">
        {cardData.map((card, index) => (
          <Col className="fact-card" md={4} key={index}>
            {card.title}
            {card.description}
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FactsCards;
