import React from "react";
import { Container, Row, Col, Nav, Image } from "react-bootstrap";
import {
  FaInstagram,
  FaTelegramPlane,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Logo from "../img/Logo.png";
import ProfilePic from "../img/profilepic.png";
import Grouppic from "../img/grouppic.png";
import Groupmeeting from "../img/groupmeeting.png";
import Dinnerpic from "../img/dinnerpic.png";
import "./Footer.css";
import "../components/languages";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-purple py-2 footer">
      <Container>
        {/* Top Section */}
        <Row className="mb-5 text-center">
          <Col className="question-box">
            <h3 className="font-source">{t("footer1")}</h3>
            <div className="footer-font font-white">{t("footer2")}</div>
            <a href="mailto:girlspowerfund@gmail.com" className="font-white">
              girlspowerfund@gmail.com
            </a>
          </Col>
        </Row>
        {/* Middle Section */}
        <Row className="mb-4">
          <Col md={4}>
            <Row className="align-center textalign-left mt-20 mb-3">
              <Col md={3}>
                <Image
                  src={Logo}
                  width="50"
                  height="50"
                  alt="Logo"
                  className="mb-1"
                />
              </Col>
              <Col md={9} className="textalign-left">
                <h5>Girls Power Fund</h5>
              </Col>
            </Row>
            <p className="textalign-left footer-font">{t("footer3")}</p>
          </Col>
          <Col md={2}>
            <Nav className="flex-column">
              <Nav.Link href="/programs" className="p-0 mb-3 textalign-left">
                {t("programs")}
              </Nav.Link>
              <Nav.Link
                href="/programs/codingbootcamp"
                className="p-0 mb-1 textalign-left footer-font"
              >
                {t("codingbootcamp")}
              </Nav.Link>
              <Nav.Link
                href="/programs/entrepreneurship"
                className="p-0 mb-1 textalign-left footer-font"
              >
                {t("entrepreneurship")}
              </Nav.Link>
            </Nav>
            <Nav className="flex-column">
              <Nav.Link
                href="/getinvolved"
                className="p-0 mb-3 mt-3 textalign-left"
              >
                {t("getinvolved")}
              </Nav.Link>
            </Nav>
          </Col>
          {/* About Links */}
          <Col md={3}>
            <Nav className="flex-column">
              <Nav.Link href="/aboutus" className="p-0 mb-3 textalign-left">
                {t("aboutus")}
              </Nav.Link>
              <Nav.Link
                href="/aboutus/ourteam"
                className="p-0 mb-1 textalign-left footer-font"
              >
                {t("ourteam")}
              </Nav.Link>
              <Nav.Link
                href="/aboutus/newsandmedia"
                className="p-0 mb-1 textalign-left footer-font"
              >
                {t("newsandmediamentions")}
              </Nav.Link>
            </Nav>
            <Nav className="flex-column">
              <Nav.Link
                href="/impact"
                className="p-0 mb-3 mt-3 textalign-left"
              >
                {t("impact")}
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <h5 className="mb-4">{t("followoninsta")}</h5>
            <Row>
              <Col xs={6}>
                <Image src={ProfilePic} fluid className="mb-3 image-border" />
              </Col>
              <Col xs={6}>
                <Image src={Grouppic} fluid className="mb-3 image-border" />
              </Col>
              <Col xs={6}>
                <Image src={Groupmeeting} fluid className="mb-2 image-border" />
              </Col>
              <Col xs={6}>
                <Image src={Dinnerpic} fluid className="mb-2 image-border" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="border-top pt-3 align-center">
          <Col md={9} className="text-start copyright">
            Copyright © 2025 Girls Power Fund | All Rights Reserved
          </Col>
          <Col md={3} className="justify-items-end">
            <Nav>
              <Nav.Link href="#" className="social-button ms-2">
                <FaTelegramPlane size={15} />
              </Nav.Link>
              <Nav.Link href="#" className="social-button ms-2">
                <FaInstagram size={15} />
              </Nav.Link>
              <Nav.Link href="#" className="social-button ms-2">
                <FaLinkedinIn size={15} />
              </Nav.Link>
              <Nav.Link href="#" className="social-button ms-2">
                <FaYoutube size={15} />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
