import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./languages";

function Text4Text() {
  const { t } = useTranslation();

  return (
    <Container className="background-purple">
      <Row className="content-container mt-3">
        <Col md={6} className="text-section">
          <h3>{t("getinvolved5")}</h3>
          <div className="font-year">2024</div>
        </Col>
        <Col md={6} className="p-3">
          <Row className="justify-center">
            <Col md={4} className="money-text">
              $80,000
              <p>USAID FGI</p>
            </Col>
            <Col md={4} className="money-text">
              $15,000
              <p>Libra Philanthropies</p>
            </Col>
          </Row>
          <Row className="justify-center">
            <Col md={4} className="money-text">
              $15,000
              <p>Eurasia Foundation</p>
            </Col>
            <Col md={4} className="money-text">
              $2,500
              <p>Dara Charity</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Text4Text;
