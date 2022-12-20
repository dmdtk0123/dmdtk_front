import React, { useState } from 'react'
import styled from 'styled-components'
import ManualModal from './ManualModal'

import theme from '../styles/theme'

import ImageModal from '../Manual/ImageModal';
import TextModal from '../Manual/TextModal';
import DesignModal from '../Manual/DesignModal';

const MouseEventTitle = ({ visible, setVisible, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleModalOpen = () => {
        setIsOpen(true);
    };

    const handleModalClose = () => {
        setIsOpen(false);
    };

    const handleModalMini = () => {
        handleModalClose();
        setVisible(!visible);
    };

    return (
        <div>
            <StyledButton   type='button'
                                onClick={handleModalOpen}>
                    ?
            </StyledButton>
            <ManualModal visible={isOpen} onClose={handleModalClose} onMini={handleModalMini}>
                <div>
                    <TextModal />
                </div>
            </ManualModal>
        </div>
    );
}

const StyledButton = styled.button`
    padding: 2px 5px;
    font-size: ${theme.fontSize.sm};
    font-weight: bold;
    border-radius: 50px;
    border: 1;
    margin: 0px 5px;
    color: ${theme.color.blue};
    background-color: ${theme.color.white};
    border-color: ${props => props.color || theme.color.blue};
    float: right;
    
    :hover {
        color: ${theme.color.pink};
        background-color: ${theme.color.lightPink};
        border-color: ${theme.color.pink};
    }

    :active {
        background-color: ${props => props.color || theme.color.blue};
        color: ${theme.color.white};
    }
`

const Button = styled.button`
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  background-color: #fa9f98;
  border-radius: 10px;
  color: white;
  font-style: italic;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    background-color: #fac2be;
  }
`;

const AppWrap = styled.div`
  text-align: center;
  margin: 50px auto;
`;

export default MouseEventTitle