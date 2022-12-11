import React from 'react'
// import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Button from '../components/Button'
import ImageModalImg1 from "../images/ImageModalImg1"
import ImageModalImg2 from "../images/ImageModalImg2"
import ImageModalImg3 from "../images/ImageModalImg3"
import ImageModalImg4 from "../images/ImageModalImg4"
import ImageModalImg5 from "../images/ImageModalImg5"



const DivWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`

const TextWrapper = styled.div`
    padding: 0px 0px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50% );
    color: white;
`

const NumberTextWrapper = styled.h3`
    display: block;
    font-size: 1.17em;
    margin-top: 3em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
`



const MainPage = () => {

    return (
        <DivWrapper>

            <TextWrapper>
                <h1 >사진이미지 예시</h1>
                <p>아래에 있는 사진의 종류를 참고하여 다양한 사진을 올려주세요</p>
                <NumberTextWrapper>1. 제품근접 사진</NumberTextWrapper>
                <ImageModalImg1/>
                <NumberTextWrapper>2. 농장 풍경 사진</NumberTextWrapper>
                <ImageModalImg2/>
                <NumberTextWrapper>3. 당도 측정 사진</NumberTextWrapper>
                <ImageModalImg3/>
                <NumberTextWrapper>4. 크기 비교 사진</NumberTextWrapper>
                <ImageModalImg4/>
                <NumberTextWrapper>5. 상자 및 포장 사진</NumberTextWrapper>
                <ImageModalImg5/>


                <Button type="button" fontSize="18px">
                    <span>고정하기</span>
                </Button>
                <Button type="button" fontSize="18px"  >
                    <span>완료하기</span>
                </Button>



            </TextWrapper>


        </DivWrapper>
    );
}

export default MainPage