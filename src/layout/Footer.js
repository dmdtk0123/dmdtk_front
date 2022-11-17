import React from 'react'

import theme from '../styles/theme'
import styled from "styled-components"

const FooterWrapper = styled.footer`
    display: flex;
    justify-content: right;
    color: ${theme.color.white};
    background: ${theme.color.indigo};
    font-size: ${theme.fontSize.sm};
    width: 100%;
    height: 80px;
    align-items: flex-end;
    padding-bottom: 20px;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            @응사팀 프로젝트
        </FooterWrapper>
    );
}

export default Footer