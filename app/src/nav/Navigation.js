import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, NavDropdown, Container, Dropdown } from "react-bootstrap";
import "./Navigation.css";
import Logo from "../img/Logo.png";
import "../components/languages";
import { useTranslation } from "react-i18next";
import { FaGlobe, FaCaretDown } from "react-icons/fa";

function Navigation() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showProgam, setShowProgam] = useState(false);

  const aboutUsRef = useRef(null);
  const programRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        aboutUsRef.current &&
        !aboutUsRef.current.contains(event.target) &&
        programRef.current &&
        !programRef.current.contains(event.target)
      ) {
        setShowAboutUs(false);
        setShowProgam(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownClick = (menuState, setMenuState, redirectPath) => {
    if (menuState) {
      window.location.href = redirectPath; // Navigate on the second click
    } else {
      setMenuState(true); // Open dropdown on the first click
    }
  };

  const renderDropdownToggle = (isOpen, dropdown) => (
    <span
      style={{
        display: "inline-block",
        marginLeft: "5px",
        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.3s ease",
        cursor: "pointer",
      }}
      onClick={(e) => {
        e.stopPropagation(); // Prevent triggering the dropdown title click
        if (isOpen) {
          if (dropdown === "aboutus") {
            setShowAboutUs(false);
          } else {
            setShowProgam(false);
          }
        } else {
          if (dropdown === "aboutus") {
            setShowAboutUs(true);
          } else {
            setShowProgam(true);
          }
        }
      }}
    >
      <FaCaretDown />
    </span>
  );

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
          <Nav className="width-max">
            <Nav.Link href="/" className="mx-3">
              {t("home")}
            </Nav.Link>
            <NavDropdown
              title={
                <>
                  <span
                    onClick={() =>
                      handleDropdownClick(
                        showAboutUs,
                        setShowAboutUs,
                        "/aboutus"
                      )
                    }
                    style={{ cursor: "pointer" }}
                  >
                    {t("aboutus")}
                  </span>
                  {renderDropdownToggle(showAboutUs, "aboutus")}
                </>
              }
              id="AboutUsDropdown"
              className="mx-3"
              ref={aboutUsRef}
              show={showAboutUs}
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
              title={
                <>
                  <span
                    onClick={() =>
                      handleDropdownClick(
                        showProgam,
                        setShowProgam,
                        "/programs"
                      )
                    }
                    style={{ cursor: "pointer" }}
                  >
                    {t("programs")}
                  </span>
                  {renderDropdownToggle(showProgam, "programs")}
                </>
              }
              id="ProgramDropdown"
              className="mx-3"
              ref={programRef}
              show={showProgam}
            >
              <NavDropdown.Item href="/progam/codingbootcamp">
                {t("codingbootcamp")}
              </NavDropdown.Item>
              <NavDropdown.Item href="/progam/codingbootcamp/entrepreneurship">
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
              <a href="/donate" target="_blank" rel="noopener noreferrer">
                {t("donate").toUpperCase()}
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
