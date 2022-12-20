import React from "react";
import styled, { css, keyframes } from "styled-components";

import Button from "../components/Button";

const ManualModal = ({ children, visible, onClose, onMini, ...props }) => {
  if (!visible) {
    return null;
  }

  return (
    <>
      <Background visible={visible} onClick={onClose} />
      <ModalSection visible={visible}>
        <Content>
          {children}
        </Content>
        <Bottom>
          <Button type="button" onClick={onMini} fontSize='16px'>
            <span>고정하기</span>
          </Button>
          <Button type="button" onClick={onClose} fontSize='16px'>
            <span>완료하기</span>
          </Button>
        </Bottom>
      </ModalSection>
    </>
  );
}

// animations
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

// components
const modalSettings = (visible) => css`
  visibility: ${visible ? 'visible' : 'hidden'};
  z-index: 15;
  animation: ${visible ? fadeIn : fadeOut} 0.15s ease-out;
  transition: visibility 0.15s ease-out;
`;

const Background = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  ${(props) => modalSettings(props.visible)}
`;

const ModalSection = styled.div`
  width: 1100px;
  position: absolute;
  top: 90%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 16px;
  ${(props) => modalSettings(props.visible)}
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

export default ManualModal;