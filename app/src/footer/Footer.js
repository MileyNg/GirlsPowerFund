import React from "react";
import { Container, Row, Col, Nav, Image } from "react-bootstrap";
import {
  FaInstagram,
  FaTelegramPlane,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Logo from "../img/Logo.png";
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
            <a href="mailto:girlspowerfund@gmail.com" className="question-box fw-bold">
              girlspowerfund@gmail.com
            </a>
          </Col>
        </Row>
        {/* Middle Section */}
        <Row className="mb-4">
          {/* About Us */}
          <Col md={4}>
            <Image
              src={Logo}
              width="50"
              height="50"
              alt="Logo"
              className="mb-3"
            />
            <h5>Girls Power Fund</h5>
            <p>
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
              <Nav.Link href="#" className=" p-0 mb-1">
                Coding Bootcamp
              </Nav.Link>
              <Nav.Link href="#" className=" p-0 mb-1">
                Tutoring Program
              </Nav.Link>
              <Nav.Link href="#" className=" p-0 mb-1">
                Entrepreneurship
              </Nav.Link>
            </Nav>
          </Col>
          {/* About Links */}
          <Col md={2}>
            <h5>About Us</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="p-0 mb-1">
                Our Team
              </Nav.Link>
              <Nav.Link href="#" className="p-0 mb-1">
                Our Approach
              </Nav.Link>
              <Nav.Link href="#" className="p-0 mb-1">
                News and Media Mentions
              </Nav.Link>
              <Nav.Link href="#" className="p-0 mb-1">
                Girl Power Fund History
              </Nav.Link>
              <Nav.Link href="#" className="p-0 mb-1">
                Financial Information
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={4}>
            <h5>Follow on Instagram</h5>
            <Row>
              <Col xs={6}>
                <Image
                  src="/path-to-instagram-image1.jpg"
                  fluid
                  className="mb-2"
                />
              </Col>
              <Col xs={6}>
                <Image
                  src="/path-to-instagram-image2.jpg"
                  fluid
                  className="mb-2"
                />
              </Col>
              <Col xs={6}>
                <Image
                  src="/path-to-instagram-image3.jpg"
                  fluid
                  className="mb-2"
                />
              </Col>
              <Col xs={6}>
                <Image
                  src="/path-to-instagram-image4.jpg"
                  fluid
                  className="mb-2"
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="border-top pt-3 text-start">
          <Col md={8}>
              © 2023 Girls Power Fund | All Rights Reserved
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
