import React from 'react'
import styled from "styled-components"

import theme from '../styles/theme'

const StyledTitle = styled.span`
    padding: 6px 20px;
    font-size: 18px;
    font-weight: bold;
    border: 2px solid ${theme.color.blue};
    border-radius: 30px;
    color: ${theme.color.blue};
    background-color: ${theme.color.white};
`

const TextTitle = ({ children, ...props }) => {
    return (
        <StyledTitle>
            {children}
        </StyledTitle>
    )
};

export default TextTitle