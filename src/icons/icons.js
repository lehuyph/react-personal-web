import React from "react";
//
import { SiReact, SiSpring, SiRedux } from "react-icons/si";
import { BsArrowRight, BsArrowDown, BsBootstrap } from "react-icons/bs";
import {
  GrMysql,
  GrFacebookOption,
  GrYoutube,
  GrLinkedinOption,
} from "react-icons/gr";
import {
  AiOutlineAntDesign,
  AiOutlineHtml5,
  AiOutlineDribbble,
  AiFillCode,
} from "react-icons/ai";
import { FcGoogle, FcIphone } from "react-icons/fc";
import { RiCss3Line } from "react-icons/ri";

export const IconFacebook = (props) => {
  const { color, fontSize } = props;
  return (
    <GrFacebookOption
      style={{
        color: color,
        fontSize: fontSize,
      }}
    />
  );
};
IconFacebook.defaultProps = {
  color: "#1877F2",
  fontSize: "1rem",
};

export const IconYoutube = (props) => {
  const { color, fontSize } = props;
  return (
    <GrYoutube
      style={{
        color: color,
        fontSize: fontSize,
      }}
    />
  );
};
IconYoutube.defaultProps = {
  color: "#FF0000",
  fontSize: "1rem",
};

export const IconGoogle = (props) => {
  const { color, fontSize } = props;
  return (
    <FcGoogle
      style={{
        color: color,
        fontSize: fontSize,
      }}
    />
  );
};
IconGoogle.defaultProps = {
  color: "#FF0000",
  fontSize: "1rem",
};

export const IconDribbble = (props) => {
  const { color, fontSize } = props;
  return (
    <AiOutlineDribbble
      style={{
        color: color,
        fontSize: fontSize,
      }}
    />
  );
};
IconDribbble.defaultProps = {
  color: "#EA4C89",
  fontSize: "1rem",
};

export const IconLinkedIn = (props) => {
  const { color, fontSize } = props;
  return (
    <GrLinkedinOption
      style={{
        color: color,
        fontSize: fontSize,
      }}
    />
  );
};
IconLinkedIn.defaultProps = {
  color: "#0A66C2",
  fontSize: "1rem",
};

export const IconIPhone = (props) => {
  const { color, fontSize } = props;
  return (
    <FcIphone
      style={{
        color: color,
        fontSize: fontSize,
      }}
    />
  );
};
IconIPhone.defaultProps = {
  color: "#1877F2",
  fontSize: "1rem",
};

export const IconArrowRight = (props) => {
  const { color, fontSize } = props;
  return (
    <BsArrowRight
      style={{
        color: color,
        fontSize: fontSize,
      }}
    />
  );
};
IconArrowRight.defaultProps = {
  color: "white",
  fontSize: "1rem",
};

export const IconArrowDown = (props) => {
  const { color, fontSize } = props;
  return (
    <BsArrowDown
      style={{
        color: color,
        fontSize: fontSize,
      }}
    />
  );
};
IconArrowDown.defaultProps = {
  color: "white",
  fontSize: "1rem",
};

export const IconReact = (props) => {
  const { color, fontSize } = props;
  return (
    <SiReact
      style={{
        color: color,
        fontSize: fontSize,
      }}
    />
  );
};
IconReact.defaultProps = {
  color: "#61DAFB",
  fontSize: "1rem",
};

export const IconSpring = (props) => {
  const { color, fontSize } = props;
  return (
    <SiSpring
      style={{
        color: color,
        fontSize: fontSize,
      }}
    />
  );
};
IconSpring.defaultProps = {
  color: "#6DB33F",
  fontSize: "1rem",
};

export const IconRedux = (props) => {
  const { color, fontSize } = props;
  return (
    <SiRedux
      style={{
        color: color,
        fontSize: fontSize,
      }}
    />
  );
};
IconRedux.defaultProps = {
  color: "#764ABC",
  fontSize: "1rem",
};

export const IconMySQL = (props) => {
  const { color, fontSize } = props;
  return (
    <GrMysql
      style={{
        color: color,
        fontSize: fontSize,
      }}
    />
  );
};
IconMySQL.defaultProps = {
  color: "#00758F",
  fontSize: "1rem",
};

export const IconAntDesign = (props) => {
  const { color, fontSize } = props;
  return (
    <AiOutlineAntDesign
      style={{
        color: color,
        fontSize: fontSize,
      }}
    />
  );
};
IconAntDesign.defaultProps = {
  color: "#0F77FF",
  fontSize: "1rem",
};

export const IconBootstrap = (props) => {
  const { color, fontSize } = props;
  return (
    <BsBootstrap
      style={{
        color: color,
        fontSize: fontSize,
      }}
    />
  );
};
IconBootstrap.defaultProps = {
  color: "#7952B3",
  fontSize: "1rem",
};

export const IconHTML5 = (props) => {
  const { color, fontSize } = props;
  return (
    <AiOutlineHtml5
      style={{
        color: color,
        fontSize: fontSize,
      }}
    />
  );
};
IconHTML5.defaultProps = {
  color: "#E44D26",
  fontSize: "1rem",
};

export const IconCSS = (props) => {
  const { color, fontSize } = props;
  return (
    <RiCss3Line
      style={{
        color: color,
        fontSize: fontSize,
      }}
    />
  );
};
IconCSS.defaultProps = {
  color: "#214CE5",
  fontSize: "1rem",
};

export const IconCode = (props) => {
  const { color, fontSize } = props;
  return (
    <AiFillCode
      style={{
        color: color,
        fontSize: fontSize,
      }}
    />
  );
};
IconCode.defaultProps = {
  color: "white",
  fontSize: "1rem",
};
