import React from 'react'
import styled from "styled-components"

import theme from "../styles/theme"
import Button from '../components/Button'
import TextTitle from '../components/TextTitle'
import { Link } from 'react-router-dom'

const BorderWrapper = styled.div`
    width: 500px;
    height: 200px;
    border: 2px solid green;
`

const DesignPage = () => {
    
    const designMoodList = ["귀여운", "밝은", "신선한", "감성적인", "자유로운", 
                    "말끔한", "자연적인", "온화한", "편안한", "단정한", "우아한", "심플한"
                    , "돋보이는", "개성적인", "실용적인", "모던한"
                    , "고급스러운", "세련된", "클래식한", "차분한"]

    return (
        <>
            <TextTitle>디자인</TextTitle>
                        
            <p>원하는 형용사를 선택해주세요.</p>
                        
            <BorderWrapper>
                {designMoodList.map((mood, index) => (
                <Button fontSize={theme.fontSize.xs} color={theme.color.pink}>
                    <span key={index}>
                        # {mood}
                    </span>
                </Button>
                ))}
            </BorderWrapper>

            <div style={ {textAlign: "center"} }>
                <Link to="/poster">
                    <Button type="submit" fontSize="18px">
                        <span>완료</span>
                    </Button>
                </Link>
            </div>
        </>            
    );
}

export default DesignPage