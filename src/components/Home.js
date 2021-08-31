import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IconGoogle, IconArrowRight } from "../icons/icons";
import imgme from "../assets/imgme.png";

const Home = () => {
  return (
    <div className="Home py-5">
      <Container fluid>
        <Row>
          <Col md>
            <div className="Section1 py-3">
              <div className="FlexColumn">
                <div className="FlexRow">
                  <IconGoogle></IconGoogle>
                  <span className="WhiteText">lehuy.ph99@gmail.com</span>
                </div>
                <span className="MainTitle">Phan Lê Huy</span>
                <span className="SubTitle">Trying to be better</span>
                <span className="SubTitle">everyday</span>
                <span className="SmText mt-2">
                  Love to design & create awesome things
                </span>
                <span className="SmText">But hate code a lot :)</span>
                {/* <span className="SmText">Have a special love for nature</span> */}
                <a
                  target="_blank"
                  href="https://www.topcv.vn/xem-cv/UlJUUgtcBQJSVgNbVFIIXFVfVAIABgJRVANTAAc8e1"
                >
                  <span className="Btn BtnCV mt-3">
                    <span>My CV</span>
                    <IconArrowRight></IconArrowRight>
                  </span>
                </a>
              </div>
            </div>
          </Col>
          <Col md>
            <div className="Section2 py-3">
              <div className="ImgMeBorder">
                <img src={imgme}></img>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
