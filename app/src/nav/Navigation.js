import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../App.css";
import Logo from "../img/Logo.png";

function Navigation() {
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
            <Nav.Link href="#home" className="mx-3">Home</Nav.Link>
            <NavDropdown title="About Us" id="#AboutUs" className="mx-3">
              <NavDropdown.Item href="#OurTeam" className="mx-3">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#NewAndMediaMentions">
                News and Media Mentions
              </NavDropdown.Item>
              <NavDropdown.Item href="#ContactUs">Contact Us</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Get Involved" id="#GetInvolved" className="mx-3">
              <NavDropdown.Item href="#WayToSupport">
                Way to support
              </NavDropdown.Item>
              <NavDropdown.Item href="#Volunteer">Volunteer</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Programs" id="#Programs" className="mx-3">
              <NavDropdown.Item href="#CodingBootcamp">
                Coding Bootcamp
              </NavDropdown.Item>
              <NavDropdown.Item href="#TutoringProgram">
                Tutoring Program
              </NavDropdown.Item>
              <NavDropdown.Item href="#Entrepreneurship">
                Entrepreneurship
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Impact" className="mx-3">Impact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
