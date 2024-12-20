import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../App.css";
import Logo from "../img/Logo.png";
import "../components/languages";
import { useTranslation } from "react-i18next";

function Navigation() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="Navigation">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            className="App-Logo"
            alt="logo"
            style={{ width: "50px", height: "50px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="mx-3">
              {t("home")}
            </Nav.Link>
            <NavDropdown title={t("aboutus")} id="#AboutUs" className="mx-3">
              <NavDropdown.Item href="#OurTeam">
                {t("ourteam")}
              </NavDropdown.Item>
              <NavDropdown.Item href="#NewsAndMediaMentions">
                {t("newsandmediamentions")}
              </NavDropdown.Item>
              <NavDropdown.Item href="#ContactUs">
                {t("contactus")}
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={t("getinvolved")}
              id="#GetInvolved"
              className="mx-3"
            >
              <NavDropdown.Item href="#WaysToSupport">
                {t("waystosupport")}
              </NavDropdown.Item>
              <NavDropdown.Item href="#Volunteer">
                {t("volunteer")}
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t("programs")} id="#Programs" className="mx-3">
              <NavDropdown.Item href="#CodingBootcamp">
                {t("codingbootcamp")}
              </NavDropdown.Item>
              <NavDropdown.Item href="#TutoringProgram">
                {t("tutoringprogram")}
              </NavDropdown.Item>
              <NavDropdown.Item href="#Entrepreneurship">
                {t("entrepreneurship")}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Impact" className="mx-3">
              {t("impact")}
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
            <button
              className="btn btn-light ms-auto"
              onClick={() => changeLanguage("de")}
            >
              de
            </button>
            <button
              className="btn btn-light ms-2"
              onClick={() => changeLanguage("en")}
            >
              en
            </button>
            <button
              className="btn btn-light ms-2"
              onClick={() => changeLanguage("ru")}
            >
              ru
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
