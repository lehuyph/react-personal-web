import React from "react";
//
import {
  IconReact,
  IconRedux,
  IconSpring,
  IconMySQL,
  IconBootstrap,
  IconAntDesign,
  IconHTML5,
  IconCSS,
  IconDribbble,
} from "./icons";

export const Icon = ({ iconName }) => {
  switch (iconName) {
    case "react":
      return <IconReact fontSize={"1.2rem"}></IconReact>;
    case "redux":
      return <IconRedux fontSize={"1.2rem"}></IconRedux>;
    case "spring":
      return <IconSpring fontSize={"1.2rem"}></IconSpring>;
    case "mysql":
      return <IconMySQL fontSize={"1.2rem"}></IconMySQL>;
    case "bootstrap":
      return <IconBootstrap fontSize={"1.2rem"}></IconBootstrap>;
    case "antdesign":
      return (
        <IconAntDesign color={"white"} fontSize={"1.2rem"}></IconAntDesign>
      );
    case "html5":
      return <IconHTML5 color={"white"} fontSize={"1.2rem"}></IconHTML5>;
    case "css3":
      return <IconCSS color={"white"} fontSize={"1.2rem"}></IconCSS>;
    default:
      return <IconDribbble color={"white"} fontSize={"1.2rem"}></IconDribbble>;
  }
};

const IconTech = ({ iconName }) => {
  switch (iconName) {
    case "react":
      return <IconReact color={"white"}></IconReact>;
    case "redux":
      return <IconRedux color={"white"}></IconRedux>;
    case "spring":
      return <IconSpring color={"white"}></IconSpring>;
    case "mysql":
      return <IconMySQL color={"white"}></IconMySQL>;
    case "bootstrap":
      return <IconBootstrap color={"white"}></IconBootstrap>;
    case "antdesign":
      return <IconAntDesign color={"white"}></IconAntDesign>;
    case "html5":
      return <IconHTML5 color={"white"}></IconHTML5>;
    case "css3":
      return <IconCSS color={"white"}></IconCSS>;
    default:
      return <IconDribbble color={"white"}></IconDribbble>;
  }
};

const BtnIconTech = (props) => {
  const { iconName } = props;
  return (
    <div className="Btn BtnIconTech">
      <IconTech iconName={iconName}></IconTech>
    </div>
  );
};

export default BtnIconTech;
