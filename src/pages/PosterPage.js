import React from "react";
import styled from "styled-components";
import Canvas from "../posterLayout/Canvas";

import theme from "../styles/theme";
import PosterPageImg from "../images/PosterPageImg"; //배경 이미지
import RecommendColorImg from "../images/RecommendColor"; //추천 컬러 이미지
import RecommendWriteImg from "../images/RecommendWrite"; //추천 컬러 이미지

const OngroundWrapper = styled.div`
  width: 100%;
  position: absolute;
  justify-content: center;
  padding: 50px 50px;
`;
const BackgroundWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const TextWrapper = styled.h3`
  text-align: center;
  font-size: 30px;
  color: white;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 15% 70% 15%;
  text-align: center;
`;

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
`;

const Body = styled.form`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 5% 95%;
  grid-column: span 1;
`;

const PosterPage = () => {
  return (
    <>
      <BackgroundWrapper>
        <OngroundWrapper>
          <TextWrapper>최종 포스터를 확인해보세요</TextWrapper>
          <Wrapper>
            <div></div>
            <Body>
              <div>
                <SImageInputWrapper>포스터</SImageInputWrapper>
                <Canvas />
              </div>
              <div style={{padding: "150px"}}>
                <SImageInputWrapper>디자인</SImageInputWrapper>
                <h3>귀여운</h3>
                <h3>경쾌한</h3>
                <ImageInputWrapper>추천 색상</ImageInputWrapper>
                <RecommendColorImg />
                <ImageInputWrapper>추천 글꼴</ImageInputWrapper>
                <RecommendWriteImg />
              </div>
            </Body>
            <div></div>
          </Wrapper>
        </OngroundWrapper>
        <PosterPageImg />
      </BackgroundWrapper>
    </>
  );
};

export default PosterPage;
