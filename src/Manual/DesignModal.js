import React from 'react'
// import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Button from '../components/Button'
import DesignModalImg1 from "../images/DesignModalImg1"
import DesignModalImg2 from "../images/DesignModalImg2"
import DesignModalImg3 from "../images/DesignModalImg3"
import DesignModalImg4 from "../images/DesignModalImg4"


const TextWrapper = styled.div`
    padding: 0px 0px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50% );
    color: white;
`

const NumberTextWrapper = styled.h2`
    display: block;
    font-size: 1.17em;
    margin-top: 0em;
    margin-bottom: 0em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
`
const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 210px 210px 210px 210px;
    grid-template-rows: 50px 600px;
    margin-top: 3em;
    margin-bottom: 3em;
`
const ContentWrapper = styled.div`
    text-align: center;
    border: 2px solid #aaa;

`

const MainPage = () => {

    return (

        <TextWrapper>
            <h1 >디자인 예시 이미지</h1>
            <p>선택한 형용사에 따라 포스터가 다음과 같이 달라집니다</p>
            <GridWrapper>
                <ContentWrapper>
                    <NumberTextWrapper>귀여운 / 경쾌한</NumberTextWrapper>
                </ContentWrapper>

                <ContentWrapper>
                    <NumberTextWrapper>내츄럴한 / 우아한 </NumberTextWrapper>
                </ContentWrapper>

                <ContentWrapper>
                    <NumberTextWrapper>다이나믹한 / 화려한 </NumberTextWrapper>
                </ContentWrapper>

                <ContentWrapper>
                    <NumberTextWrapper>점잖은 / 모던한</NumberTextWrapper>
                </ContentWrapper>

                <ContentWrapper>
                    <DesignModalImg1 />
                </ContentWrapper>
               
                <ContentWrapper>
                    <DesignModalImg2 />
                </ContentWrapper>

                <ContentWrapper>
                    <DesignModalImg3 />
                </ContentWrapper>

                <ContentWrapper>
                    <DesignModalImg4 />
                </ContentWrapper>


            </GridWrapper>
            <Button type="button" fontSize="18px">
                <span>고정하기</span>
            </Button>
            <Button type="button" fontSize="18px"  >
                <span>완료하기</span>
            </Button>

        </TextWrapper >


    );
}

export default MainPage