import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IconDribbble } from "../icons/icons";

const Footer = () => {
  return (
    <div className="Footer py-5 px-5">
      <Container fluid>
        <Row>
          <Col sm={12}>
            <div className="TextWrapper">
              <span className="WhiteText">Designed by Phan Le Huy</span>
              <div className="FlexRow">
                <span className="WhiteText">Reference from</span>
                <IconDribbble></IconDribbble>
                <span className="WhiteText">dribbble.com</span>
              </div>
              <span className="WhiteText">Glassmorphism UI design</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
