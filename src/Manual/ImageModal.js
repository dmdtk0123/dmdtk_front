import React from 'react'
import styled from 'styled-components'

import ImageModalImg1 from "../images/ImageModalImg1"
import ImageModalImg2 from "../images/ImageModalImg2"
import ImageModalImg3 from "../images/ImageModalImg3"
import ImageModalImg4 from "../images/ImageModalImg4"
import ImageModalImg5 from "../images/ImageModalImg5"


const ImageModal = () => {

    return (
        <>
            <h1>사진이미지 예시</h1>
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
        </>
    );
}

const NumberTextWrapper = styled.h3`
    display: block;
    font-size: 1.17em;
    margin-top: 3em;
    margin-bottom: 1em;
    font-weight: bold;
`

export default ImageModal;