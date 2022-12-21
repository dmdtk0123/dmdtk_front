import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Canvas from "../posterLayout/Canvas";

import theme from "../styles/theme";
import PosterPageImg from "../images/PosterPageImg"; //배경 이미지
import LoadingPage from "../components/Loading";
import Recommand from "../recommandLayout/Recommand";

const PosterPage = () => {
  // 준비 상태 확인(서버 결과가 들어왔는지 확인 => 서버 동작이 모두 끝났는지 확인)
  const [isReady, setIsReady] = useState(false);
  
  // 폰트 적용
  const quadrant1 = ["NanumMyeongjoEB", "NanumMyeongjoR"];
  const quadrant2 = ["JUA", "Cafe24Simplehae"];
  const quadrant3 = ["Jalnan", "Cafe24PrettyNight"];
  const quadrant4 = ["GmarketSansM", "Cafe24Simplehae"];

  const designResult = JSON.parse(localStorage.getItem("design_result"));
  const quadrant = designResult["quadrant"];
  const [fontStyle, setFontStyle] = useState([]);

  const rendering = () => {
    switch (quadrant) {
        case "1":
          setFontStyle(quadrant1);
          break;

        case "2":
          setFontStyle(quadrant2);
            break;

        case "3":
          setFontStyle(quadrant3);
            break;

        case "4":
          setFontStyle(quadrant4);
          break;
          
          default: 
          return;
    }
  };

  const getData = async () => {
    setIsReady(false);
    try {
      const finalData = await localStorage.getItem('final_result');
      const designData = await localStorage.getItem('design_result');

      if (finalData === null && designData === null) {
        await new Promise((resolve, reject) => setTimeout(resolve, 30000));
        console.log("30s");
      } else {
        rendering();
        setIsReady(true);
      }
    } catch (error) {
      window.alert(error);
    }
  }

  useEffect(() => {
    getData();
  }, [isReady]);

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
                <Recommand fontStyle={fontStyle}/>
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

export default PosterPage;
