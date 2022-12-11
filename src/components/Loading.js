import React from "react";
import styled from "styled-components";

import PosterPageImg from "../images/PosterPageImg"; //배경 이미지

const Loading = () => {
  return (
    <>
      <BackgroundWrapper>
        <OngroundWrapper>
          <TextWrapper>포스터가 생성중입니다. 잠시만 기다려주세요.</TextWrapper>
          <Wrapper>
            <div></div>
            <div style={{ textAlign: "center" }}>
              <img src="http://makegenius.co.kr/resources/image/page/loading.gif" />
            </div>
            <div></div>
          </Wrapper>
        </OngroundWrapper>
        <PosterPageImg />
      </BackgroundWrapper>
    </>
  );
};

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
  margin-top: 100px;
  text-align: center;
  font-size: 30px;
  color: white;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 15% 70% 15%;
  text-align: center;
`;

const Body = styled.form`
  display: grid;
`;

export default Loading;
