import React from 'react'
import styled from "styled-components"

import theme from '../styles/theme'
import MouseEventTitle from './MouseEventTitle';

const StyledTitle = styled.span`
    padding: 8px 14px 8px 20px;
    font-size: 18px;
    font-weight: bold;
    border: 2px solid ${theme.color.blue};
    border-radius: 30px;
    color: ${theme.color.blue};
    background-color: ${theme.color.white};
    display: inline-flex;
`

const TextTitle = ({ children, visible, setVisible, ...props }) => {
    return (
        <StyledTitle>
            {children}
            <MouseEventTitle visible={visible} setVisible={setVisible}></MouseEventTitle>
        </StyledTitle>
    )
};

export default TextTitle