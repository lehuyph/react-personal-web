import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import wall2 from "../assets/wall2.jpg";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import reactredux from "../assets/reactredux.png";
import spring from "../assets/spring.png";
import springboot from "../assets/springboot.png";
import mysql from "../assets/mysql.png";
import ProjectCard from "./ProjectCard";
import { Icon } from "../icons/BtnIconTech";
import SkillsCollapse from "./SkillsCollapse";

const arrProjects = [
  {
    linkTo: "https://plh-bookshop-first.herokuapp.com/",
    images: [react],
    title: "Bookshop",
    description: "First time learning about React, Hibernate REST API",
    icons: ["react", "spring", "mysql", "antdesign"],
  },
  {
    linkTo: "https://plh-todos-app-first-redux.herokuapp.com/",
    images: [redux],
    title: "Todos",
    description: "First time learning about Redux / ReduxToolkit",
    icons: ["redux", "react", "spring", "mysql"],
  },
  {
    linkTo: "#",
    images: [],
    title: "Comming Soon",
    description: "Some descriptions",
    icons: [],
  },
  {
    linkTo: "#",
    images: [],
    title: "Comming Soon",
    description: "Some descriptions",
    icons: [],
  },
  {
    linkTo: "#",
    images: [],
    title: "Comming Soon",
    description: "Some descriptions",
    icons: [],
  },
];

const Projects = () => {
  return (
    <div className="Projects py-5" id="projects">
      <Container fluid>
        <Row>
          <Col md={3}>
            <div className="Section1 mb-4">
              <div className="FlexColumn">
                <span className="SectionTitle mb-3">Projects</span>
                <SkillsCollapse></SkillsCollapse>
              </div>
            </div>
          </Col>
          <Col md={9}>
            <div className="Section2">
              <Row>
                {arrProjects.map((project) => (
                  <Col lg={4}>
                    <ProjectCard
                      linkTo={project.linkTo}
                      images={project.images}
                      title={project.title}
                      description={project.description}
                      icons={project.icons}
                    ></ProjectCard>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
