import React from 'react'
import styled from "styled-components"

import theme from '../styles/theme'
import MouseEventTitle from './MouseEventTitle';

const StyledTitle = styled.span`
    padding: 4px 14px 4px 20px;
    font-size: 18px;
    font-weight: bold;
    border: 2px solid ${theme.color.blue};
    border-radius: 30px;
    color: ${theme.color.white};
    display: inline-flex;
    background-color: #11ffee00;
    border-color: ${props => props.color || theme.color.white};
`

const TextTitle = ({ children, modal, visible, setVisible, ...props }) => {
    return (
        <StyledTitle>
            {children}
            <MouseEventTitle modal={modal} visible={visible} setVisible={setVisible}></MouseEventTitle>
        </StyledTitle>
    )
};

export default TextTitle