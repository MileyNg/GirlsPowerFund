import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Dropdown } from "react-bootstrap";
import "./Navigation.css";
import Logo from "../img/Logo.png";
import "../components/languages";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";

function Navigation() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showPrograms, setShowPrograms] = useState(false);

  return (
    <Navbar collapseOnSelect expand="xl" className="Navigation">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={Logo}
            className="App-Logo d-inline-block"
            alt="logo"
            style={{ width: "50px", height: "50px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/" className="mx-3">
              {t("home")}
            </Nav.Link>
            <NavDropdown
              title={t("aboutus")}
              id="AboutUsDropdown"
              className="mx-3"
              show={showAboutUs}
              onMouseEnter={() => setShowAboutUs(true)}
              onMouseLeave={() => setShowAboutUs(false)}
              onToggle={() => {
                window.location.href = "/aboutus";
              }}
            >
              <NavDropdown.Item href="/aboutus/ourteam">
                {t("ourteam")}
              </NavDropdown.Item>
              <NavDropdown.Item href="/aboutus/newsandmedia">
                {t("newsandmediamentions")}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/getinvolved" className="mx-3">
              {t("getinvolved")}
            </Nav.Link>
            <NavDropdown
              title={t("programs")}
              id="ProgramsDropdown"
              className="mx-3"
              show={showPrograms}
              onMouseEnter={() => setShowPrograms(true)}
              onMouseLeave={() => setShowPrograms(false)}
              onClick={() => setShowPrograms(!showPrograms)}
              onToggle={() => {
                window.location.href = "/programs";
              }}
            >
              <NavDropdown.Item href="/programs/codingbootcamp">
                {t("codingbootcamp")}
              </NavDropdown.Item>
              <NavDropdown.Item href="/programs/codingbootcamp/entrepreneurship">
                {t("entrepreneurship")}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/impact" className="mx-3">
              {t("impact")}
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Dropdown align="end" className="language-button">
              <Dropdown.Toggle
                variant="light"
                id="dropdown-basic"
                className="language-dropdown-toggle language-button"
              >
                {i18n.language.toUpperCase()}
                <FaGlobe className="ms-2" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="language-dropdown-menu">
                <Dropdown.Item onClick={() => changeLanguage("en")}>
                  English
                </Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage("de")}>
                  Deutsch
                </Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage("ru")}>
                  Russian
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="donate-button ms-2">
              <a href="#" target="_blank" rel="noopener noreferrer">
                DONATE
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
