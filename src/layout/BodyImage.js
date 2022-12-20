import React from "react";
import styled from "styled-components";

import UploadImg from "../images/UploadPageImg"

const BodyImage = () => {

  return (
        <BackgroundWrapper> 
            <OngroundWrapper>

            </OngroundWrapper>
            <UploadImg />
        </BackgroundWrapper>
  );
};


const BackgroundWrapper = styled.body`
    position: relative;
    background-color: black;
    height: 100%;
`

const OngroundWrapper = styled.div`
    position: absolute;
`

export default BodyImage;
