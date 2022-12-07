import React from "react";
import styled from "styled-components";
import Canvas from "../posterLayout/Canvas";

const PosterPage = () => {
  return (
    <Wrapper>
        <div></div>
        <Canvas />
        <div></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 15% 70% 15%;
  text-align: center;
  border: 2px solid green;
`;
export default PosterPage;
