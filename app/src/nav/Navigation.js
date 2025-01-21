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
            <NavDropdown title={<Nav.Link href="/aboutus">{t("aboutus")}</Nav.Link>} id="#AboutUs" className="mx-3">
              <NavDropdown.Item href="#OurTeam">
                {t("ourteam")}
              </NavDropdown.Item>
              <NavDropdown.Item href="#NewsAndMediaMentions">
                {t("newsandmediamentions")}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/getinvolved" className="mx-3">
              {t("getinvolved")}
            </Nav.Link>
            <NavDropdown title={t("programs")} id="#Programs" className="mx-3">
              <NavDropdown.Item href="#CodingBootcamp">
                {t("codingbootcamp")}
              </NavDropdown.Item>
              <NavDropdown.Item href="#Entrepreneurship">
                {t("entrepreneurship")}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Impact" className="mx-3">
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
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
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
