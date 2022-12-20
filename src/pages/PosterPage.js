import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Canvas from "../posterLayout/Canvas";

import theme from "../styles/theme";
import PosterPageImg from "../images/PosterPageImg"; //배경 이미지
import RecommendColorImg from "../images/RecommendColor"; //추천 컬러 이미지
import RecommendWriteImg from "../images/RecommendWrite"; //추천 컬러 이미지
import LoadingPage from "../components/Loading";

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
  font-family: SCDream4;
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

const Body = styled.form`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 5% 95%;
  grid-column: span 1;
`;

const PosterPage = () => {
  // 준비 상태 확인(서버 결과가 들어왔는지 확인 => 서버 동작이 모두 끝났는지 확인)
  const [isReady, setIsReady] = useState(false);
  const [resultData, setResultData] = useState('');

  const getData = async () => {
    setIsReady(false);
    try {
      const data = await localStorage.getItem('final_result');
      if (data != null) {
        setResultData(data);
        setIsReady(true);
      }
    } catch (error) {
      window.alert(error);
    }
  }

  useEffect(() => {
    getData();
  }, [resultData]);

  return isReady ? (
    // 앱 화면
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
                <SImageInputWrapper >디자인</SImageInputWrapper>
                <h3 class="SCDream4" style={{color:"white"}}>귀여운</h3>
                <h3 class="SCDream4" style={{color:"white"}}>경쾌한</h3>
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
  ) : (
    // 로딩중 화면
    <LoadingPage />
  );
};

export default PosterPage;
