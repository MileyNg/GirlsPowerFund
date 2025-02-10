import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../components/languages";
import { useTranslation } from "react-i18next";
import QRCode from "../img/QRCode_donate.jpg";

function Donate() {
  const { t } = useTranslation();
  return (
    <div className="background-gradient">
      <Container className="text-image-container">
        <Row className="content-container">
          <Col md={3} className="image-section">
            <img src={QRCode} alt="Donate QR Code" />
          </Col>
          <Col md={9} className="text-section">
            <h1>{t("donate1")}</h1>
            <p>{t("faq1")}</p>
            <p>{t("donate2")}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Donate;
