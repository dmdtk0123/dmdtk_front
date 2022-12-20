import React from 'react'
import styled from 'styled-components'

import DesignModalImg1 from "../images/DesignModalImg1"
import DesignModalImg2 from "../images/DesignModalImg2"
import DesignModalImg3 from "../images/DesignModalImg3"
import DesignModalImg4 from "../images/DesignModalImg4"


const DesignModal = () => {

    return (
        <>
            <h1>디자인 예시 이미지</h1>
            <span>선택한 형용사에 따라 포스터가 다음과 같이 달라집니다</span>
            <GridWrapper>
                    <NumberTextWrapper>귀여운 / 경쾌한</NumberTextWrapper>

                    <NumberTextWrapper>내츄럴한 / 우아한 </NumberTextWrapper>

                    <NumberTextWrapper>다이나믹한 / 화려한 </NumberTextWrapper>
  
                    <NumberTextWrapper>점잖은 / 모던한</NumberTextWrapper>
     
                    <DesignModalImg1 />
       
                    <DesignModalImg2 />
                
                    <DesignModalImg3 />
              
                    <DesignModalImg4 />
            </GridWrapper>
        </>
    );
}


const NumberTextWrapper = styled.h2`
    display: block;
    font-size: 1.17em;
    margin: 0em;
    font-weight: bold;
`
const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 210px 210px 210px 210px;
    grid-template-rows: 50px 520px;
    margin-top: 70px;
`

export default DesignModal