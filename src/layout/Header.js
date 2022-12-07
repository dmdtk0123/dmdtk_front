import React from 'react'
import styled from "styled-components"

import theme from "../styles/theme"
import Logo from "../images/Logo"
import Button from "../components/Button"
import { Link } from 'react-router-dom'

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    height: 60px;
    width: 100%;
    top: 0px;
    font-size: ${theme.fontSize.lg};
    font-weight: bold;
`

const Header = () => {
    
    return (
        <HeaderWrapper>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div>
                    <Logo width={40} height={30} />
                    <span>Maple</span>
                </div>
            </Link>
            <div>
                <Button type="button" class="float-right">
                    <span>Login</span>
                </Button>
                <Button type="button" class="float-right">
                    <span>Sign up</span>
                </Button>
            </div>
        </HeaderWrapper>
    );
}

export default Header