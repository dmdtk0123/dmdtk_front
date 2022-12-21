import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Stage, Layer, Circle } from "react-konva";

import theme from "../styles/theme";

import WarmFontImg from "../images/warm_font"; //추천 컬러 이미지
import ModernFontImg from "../images/modern_font"; //추천 컬러 이미지
import ColorfulFontImg from "../images/colorful_font";
import CuteFontImg from "../images/RecommendWrite";

const Recommand = ({ fontStyle }) => {
  const designResult = JSON.parse(localStorage.getItem("design_result"));

  const color = designResult["color"];
  const designAdj = designResult["adj"];
  const quadrant = designResult["quadrant"];

  const rendering = () => {
    switch (quadrant) {
        case "1":
          return <CuteFontImg />;

        case "2":
        return <ColorfulFontImg />;

        case "3":
            return <ModernFontImg />;

        case "4":
            return <WarmFontImg />;

        default:
            return;
    }
  };

  return (
    <>
      <SImageInputWrapper>디자인</SImageInputWrapper>
      <h3 class="SCDream4" style={{ color: "white" }}>
        {designAdj}
      </h3>

      <ImageInputWrapper>추천 색상</ImageInputWrapper>
      <Stage width={1000} height={150}>
        <Layer>
          <Circle
            x={50}
            y={100}
            fill={`rgb(${color[0][0]},${color[0][1]},${color[0][2]})`}
            width={80}
            height={80}
          />
          <Circle
            x={150}
            y={100}
            fill={`rgb(${color[1][0]},${color[1][1]},${color[1][2]})`}
            width={80}
            height={80}
          />
          <Circle
            x={250}
            y={100}
            fill={`rgb(${color[2][0]},${color[2][1]},${color[2][2]})`}
            width={80}
            height={80}
          />
        </Layer>
      </Stage>

      <ImageInputWrapper>추천 글꼴</ImageInputWrapper>
      <CuteFontImg />
    </>
  );
};

const ImageInputWrapper = styled.div`
  padding: 8px 14px 8px 20px;
  font-size: 18px;
  width: 80px;
  font-weight: bold;
  border: 3px solid;
  border-radius: 30px;
  display: inline-flex;
  color: ${theme.color.white};
  background-color: #11ffee00;
  border-color: ${theme.color.white};
  margin-top: 50px;
  font-family: SCDream4;
`;

const SImageInputWrapper = styled.div`
  padding: 8px 14px 8px 20px;
  font-size: 18px;
  width: 60px;
  font-weight: bold;
  border: 3px solid;
  border-radius: 30px;
  display: inline-flex;
  color: ${theme.color.white};
  background-color: #11ffee00;
  border-color: ${theme.color.white};
  margin-top: 30px;
  font-family: SCDream4;
`;

export default Recommand;
