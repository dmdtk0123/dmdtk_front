import React from 'react'
import styled from "styled-components"

import theme from '../styles/theme'

const StyledButton = styled.button`
    padding: 6px 20px;
    font-size: ${props => props.fontSize || theme.fontSize.sm};
    font-weight: bold;
    border-radius: 30px;
    border: 1;
    margin: 5px 5px;
    color: ${props => props.color || theme.color.blue};
    background-color: ${theme.color.white};
    border-color: ${props => props.color || theme.color.blue};

    :hover {
        background-color: ${props => props.color === theme.color.pink ? theme.color.lightPink : theme.color.lightBlue};
    }

    :active {
        background-color: ${props => props.color || theme.color.blue};
        color: ${theme.color.white};
    }
`

const Button = ({ children, ...props }) => {
    return (
        <StyledButton type={props.type} onClick={props.onClick} fontSize={props.fontSize} color={props.color}>
            {children}
        </StyledButton>
    )
};

export default Button