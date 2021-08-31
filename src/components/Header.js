import React from "react";
import { Col, Container, Navbar, Row, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <div className="Header pt-1 pb-3">
      <Navbar expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand className="Logo" href="#home">
            Personal
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="HeaderItem me-4" href="#">
                Home
              </Nav.Link>
              <Nav.Link className="HeaderItem me-4" href="#projects">
                Projects
              </Nav.Link>
              <Nav.Link className="HeaderItem me-4" href="#infos">
                Infos
              </Nav.Link>
            </Nav>
            <div className="FlexRow ms-auto">
              <span className="HeaderItem me-4">Feedback</span>
              <span className="Btn BtnContactMe">
                <span>Contact Me</span>
              </span>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
