import React, { useState, useRef } from "react";
import styled from "styled-components";

import Manual from "../layout/Manual";
import TextTitle from "../components/TextTitle";
import Button from "../components/Button";
import PosterForm from "../components/PosterForm";

const PosterFormPage = () => {
  /** 사이드 메뉴 보이기 **/
  const [height, setHeight] = useState(0);
  const [visibleL, setVisibleL] = useState(false);
  const [visibleR, setVisibleR] = useState(false);

  const assignLHeight = (node) => {
    if (node && !height) {
      setHeight(node.clientHeight);
      setVisibleL(false);
    }
  };

  const assignRHeight = (node) => {
    if (node && !height) {
      setHeight(node.clientHeight);
      setVisibleR(false);
    }
  };

  return (
    <>
      <h3>포스터에 들어갈 사진과 텍스트를 넣어주세요.</h3>
      <Wrapper>
        <Manual visible={visibleL} ref={assignLHeight} height={height} />
        <Body>
          <div>
            <TextTitle visible={visibleL} setVisible={setVisibleL}>
              <span>사진</span>
            </TextTitle>
          </div>
          <div>
            <TextTitle visible={visibleR} setVisible={setVisibleR}>
              <span>텍스트</span>
            </TextTitle>
          </div>
          <div
            style={{
              gridColumn: "1/3",
              gridRow: "2/3;",
            }}
          >
            <PosterForm />
          </div>
        </Body>
        <Manual visible={visibleR} ref={assignRHeight} height={height} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 15% 70% 15%;
  text-align: center;
`;

const Body = styled.form`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 5% 95%;
  grid-column: span 1;
`;

export default PosterFormPage;
