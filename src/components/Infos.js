import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  IconFacebook,
  IconGoogle,
  IconIPhone,
  IconLinkedIn,
  IconYoutube,
} from "../icons/icons";

const Infos = () => {
  return (
    <div className="Infos py-5" id="infos">
      <Container fluid>
        <Row>
          <Col md={3}>
            <div className="Section1 mb-4">
              <span className="SectionTitle mb-4">Infos</span>
            </div>
          </Col>
          <Col md={9}>
            <div className="Section2">
              <div className="FlexColumn">
                <div className="FlexRow mb-3">
                  <div className="Btn BtnIconGlass">
                    <div className="BtnIcon">
                      <IconGoogle></IconGoogle>
                    </div>
                  </div>
                  <span className="SmText">lehuy.ph99@gmail.com</span>
                </div>
                {/*  */}
                <div className="FlexRow mb-3">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/phan.huy.12935/"
                  >
                    <div className="Btn BtnIconGlass">
                      <div className="BtnIcon">
                        <IconFacebook></IconFacebook>
                      </div>
                    </div>
                  </a>
                  <span className="SmText">phan.huy.12935</span>
                </div>
                {/*  */}
                <div className="FlexRow mb-3">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/phan-le-huy-1112aa213/"
                  >
                    <div className="Btn BtnIconGlass">
                      <div className="BtnIcon">
                        <IconLinkedIn></IconLinkedIn>
                      </div>
                    </div>
                  </a>
                  <span className="SmText">phan-le-huy-1112aa213</span>
                </div>
                {/*  */}
                <div className="FlexRow mb-3">
                  <div className="Btn BtnIconGlass">
                    <div className="BtnIcon">
                      <IconIPhone></IconIPhone>
                    </div>
                  </div>
                  <span className="SmText">0868216540</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Infos;
