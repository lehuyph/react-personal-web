import React from "react";
import { Col, Row } from "react-bootstrap";
import BtnIconTech from "../icons/BtnIconTech";

const ProjectCard = (props) => {
  const { linkTo, images, title, description, icons } = props;
  return (
    <a target="_blank" href={linkTo}>
      <div className="ProjectCard FlexColumn mb-4">
        {images.map((image) => (
          <Row>
            <Col className="p-3">
              <img className="ProjectCardImg" src={image}></img>
            </Col>
            <Col></Col>
          </Row>
        ))}
        <span className="CardDes SmText mt-2">{description}</span>
        <div className="FlexRow mt-2">
          {icons.map((iconName) => (
            <BtnIconTech iconName={iconName}></BtnIconTech>
          ))}
        </div>
        <span className="CardTitle mt-2">{title}</span>
      </div>
    </a>
  );
};

export default ProjectCard;
