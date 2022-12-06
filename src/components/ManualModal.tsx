import React, { ReactNode } from "react";
import styled, { css, keyframes } from "styled-components";

export type ManualModalProps = {
  /** 모달에 들어갈 컴포넌트 */
  children?: ReactNode;
  /** 모달 창 생성 여부를 컨트롤할 변수 */
  visible: boolean;
  /** 닫기 버튼 혹은 백그라운드 클릭 시 실행할 함수 */
  onClose: () => void;
  /** 사이드 버튼 클릭 시 실행할 함수 **/
  onMini: () => void;
};


const ManualModal = ({ children, visible, onClose, onMini }: ManualModalProps) => {
  if (!visible) {
    return null;
  }

  return (
    <>
      <Background visible={visible} onClick={onClose} />
      <ModalSection visible={visible}>
        <Title>
          <CloseButton type="button" onClick={onClose}>
            X
          </CloseButton>
          <CloseButton type="button" onClick={onMini}>
            {">"}
          </CloseButton>
        </Title>
        <Content>{children}</Content>
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
const modalSettings = (visible: boolean) => css`
  visibility: ${visible ? 'visible' : 'hidden'};
  z-index: 15;
  animation: ${visible ? fadeIn : fadeOut} 0.15s ease-out;
  transition: visibility 0.15s ease-out;
`;

const Background = styled.div<{ visible: boolean }>`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  ${(props) => modalSettings(props.visible)}
`;

const ModalSection = styled.div<{ visible: boolean }>`
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 1);
  padding: 16px;
  ${(props) => modalSettings(props.visible)}
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 16px;
`;

const Content = styled.div`
  padding: 16px 0;
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
export default ManualModal;