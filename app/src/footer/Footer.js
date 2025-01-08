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
import "../App.css";
import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-purple  py-5 footer">
      <Container>
        {/* Top Section */}
        <Row className="mb-5 text-center question-box">
          <Col className="question-box">
            <h3>Have a Question? We can Help!</h3>
            <p>We typically respond within 72 hours!</p>
            <a
              href="mailto:girlspowerfund@gmail.com"
              className="question-box fw-bold"
            >
              girlspowerfund@gmail.com
            </a>
          </Col>
        </Row>
        {/* Middle Section */}
        <Row className="mb-4">
          {/* About Us */}
          <Col md={4}>
            <Row className="align-center">
              <Col md={4}>
                <Image
                  src={Logo}
                  width="50"
                  height="50"
                  alt="Logo"
                  className="mb-3"
                />
              </Col>
              <Col md={8}>
                <h5>Girls Power Fund</h5>
              </Col>
            </Row>
            <p className="textalign-left">
              Girls Power Fund is a platform to empower girls and young women
              through STEM and entrepreneurship education, mentorship, and
              opportunities, fostering their skills, confidence, and leadership
              to thrive in a technology-driven world.
            </p>
          </Col>
          {/* Program Links */}
          <Col md={2}>
            <h5>Program</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="p-0 mb-1 textalign-left">
                Coding Bootcamp
              </Nav.Link>
              <Nav.Link href="#" className="p-0 mb-1 textalign-left">
                Tutoring Program
              </Nav.Link>
              <Nav.Link href="#" className="p-0 mb-1 textalign-left">
                Entrepreneurship
              </Nav.Link>
            </Nav>
          </Col>
          {/* About Links */}
          <Col md={2}>
            <h5>About Us</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="p-0 mb-1 textalign-left">
                Our Team
              </Nav.Link>
              <Nav.Link href="#" className="p-0 mb-1 textalign-left">
                Our Approach
              </Nav.Link>
              <Nav.Link href="#" className="p-0 mb-1 textalign-left">
                News and Media Mentions
              </Nav.Link>
              <Nav.Link href="#" className="p-0 mb-1 textalign-left">
                Girl Power Fund History
              </Nav.Link>
              <Nav.Link href="#" className="p-0 mb-1 textalign-left">
                Financial Information
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={4}>
            <h5 className="mb-4">Follow on Instagram</h5>
            <Row>
              <Col xs={6}>
                <Image src={ProfilePic} fluid className="mb-4 image-border" />
              </Col>
              <Col xs={6}>
                <Image src={Grouppic} fluid className="mb-4 image-border" />
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
          <Col md={8} className="text-start copyright">
            © 2024 Girls Power Fund | All Rights Reserved
          </Col>
          <Col md={4} className="text-end">
            <Nav>
              <Nav.Link href="#" className="social-button ms-3">
                <FaTelegramPlane size={20} />
              </Nav.Link>
              <Nav.Link href="#" className="social-button ms-3">
                <FaInstagram size={20} />
              </Nav.Link>
              <Nav.Link href="#" className="social-button ms-3">
                <FaLinkedinIn size={20} />
              </Nav.Link>
              <Nav.Link href="#" className="social-button ms-3">
                <FaYoutube size={20} />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
