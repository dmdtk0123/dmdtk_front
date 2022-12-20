import React from 'react'
import styled from "styled-components"

import theme from '../styles/theme'

const StyledButton = styled.button`
    padding: ${props => props.radius ? "2px 5px" : "6px 20px"};
    font-size: ${props => props.fontSize || theme.fontSize.sm};
    font-weight: bold;
    border-radius: ${props => props.radius || "3px"};
    border: 3 ;
    margin: 5px 5px;
    cursor: pointer;
    color: ${props => props.color || theme.color.white};
    background-color: #11ffee00;
    border-color: ${props => props.color || theme.color.white};
    box-shadow: none;
    border-style: solid;

    :hover {
        background-color: ${props => props.color || theme.color.white};
        color: ${props => props.color === theme.color.pinkBtn ? theme.color.pink: theme.color.darkblue};
        
    }

    :active {
        background-color: ${props => props.color || theme.color.white};
        color: ${props => props.color || theme.color.darkblue};
    }
`

const Button = ({ children, ...props }) => {
    return (
        <StyledButton type={props.type} onClick={props.onClick} fontSize={props.fontSize} color={props.color} radius={props.radius}>
            {children}
        </StyledButton>
    )
};

export default Button