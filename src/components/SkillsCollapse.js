import React, { useState } from "react";
import { Icon } from "../icons/BtnIconTech";
import { Collapse } from "react-bootstrap";
import { IconCode, IconArrowDown } from "../icons/icons";

const arrSkills = [
  {
    icon: "spring",
    title: "Spring / REST API",
  },
  {
    icon: "react",
    title: "ReactJS / Hooks",
  },
  {
    icon: "redux",
    title: "Redux / Toolkit",
  },
  {
    icon: "mysql",
    title: "MySQL DBMS",
  },
  {
    icon: "bootstrap",
    title: "Bootstrap",
  },
  {
    icon: "antdesign",
    title: "Ant Design",
  },
];

const SkillsCollapse = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <span
        className="mb-3 d-flex align-items-center BtnExpand"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <span className="IconExpand">
          <IconCode color="white" fontSize={"1.5rem"}></IconCode>
        </span>
        <span className="SmText ms-2" style={{ fontWeight: "bold" }}>
          Tech Skills
        </span>
      </span>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div className="FlexColumn">
            {arrSkills.map((skill) => (
              <div className="FlexRow ms-1 mt-1">
                <div className="Btn">
                  <Icon iconName={skill.icon}></Icon>
                </div>
                <span className="SmText">{skill.title}</span>
              </div>
            ))}
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default SkillsCollapse;
