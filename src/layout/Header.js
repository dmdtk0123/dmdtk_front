import React from 'react'
import styled from "styled-components"

import theme from "../styles/theme"
import Logo from "../images/Logo"
import Button from "../components/Button"
import { useNavigate } from 'react-router-dom'

const Header = () => {
    let navigate = useNavigate();
    
    const navigateToMainPage = () => {
        navigate("/");
    };

    return (
        <HeaderWrapper>
            <div style={{cursor: "pointer"}} onClick={navigateToMainPage}>
                <Logo width={40} height={30} color="#4C5D87" />
                <span>Maple</span>
            </div>
            <div>
                <Button type="button" class="float-right" color="#4C5D87">
                    <span>Login</span>
                </Button>
                <Button type="button" class="float-right" color="#4C5D87">
                    <span>Sign up</span>
                </Button>
            </div>
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    height: 60px;
    width: 100%;
    top: 0px;
    font-size: ${theme.fontSize.lg};
    font-weight: bold;
    font-family: 'SCDream8';
`

export default Header