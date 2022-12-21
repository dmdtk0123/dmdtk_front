import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Stage, Layer, Circle } from "react-konva";

import theme from "../styles/theme";

import RecommendColorImg from "../images/RecommendColor"; //추천 컬러 이미지
import RecommendWriteImg from "../images/RecommendWrite"; //추천 컬러 이미지

const Recommand = () => {
  const designResult = JSON.parse(localStorage.getItem("design_result"));

  const color = designResult["color"];
  const titleFont = designResult["title_font"];

  return (
    <>
      <SImageInputWrapper>디자인</SImageInputWrapper>
      <h3 class="SCDream4" style={{ color: "white" }}>
        귀여운
      </h3>
      <h3 class="SCDream4" style={{ color: "white" }}>
        경쾌한
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
      <h3>{designResult ? designResult["body_font"] : "none"}</h3>
      <h3>{designResult ? designResult["title_font"] : "none"}</h3>
      <RecommendWriteImg />
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
