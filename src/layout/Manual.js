import React from 'react'
import styled, { css, keyframes } from "styled-components"

import SideManual from '../components/SideManual'

const Manual = ({ children, height, visible, ...props }) => {
    return (   
        <StyledWrapper height={height} visible={visible}>
            <SideManual></SideManual>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
  position: relative;
  top: 80px;
  
  transition: height 0.3s, opacity 0.3s;
  height: ${(props) => (props.height ? `${props.height}px` : "auto")};
  opacity: 1;

  ${(props) =>
    !props.visible &&
    css`
      height: 0;
      opacity: 0;
    `}
`


export default Manual;