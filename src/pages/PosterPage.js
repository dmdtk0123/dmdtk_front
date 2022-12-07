import React from 'react'
import styled from 'styled-components'

import theme from "../styles/theme"
import Button from '../components/Button'
import TextTitle from '../components/TextTitle'
import { Link } from 'react-router-dom'
import PosterPageImg from "../images/PosterPageImg"  //배경 이미지
import RecommendColorImg from "../images/RecommendColor" //추천 컬러 이미지
import RecommendWriteImg from "../images/RecommendWrite" //추천 컬러 이미지

const OngroundWrapper = styled.div`
    width: 100%;
    position: absolute;
    margin-top: 100px;
    justify-content: center;
    padding: 50px 50px;
    
`
const BackgroundWrapper = styled.div`
    width: 100%;
    position: relative;

`
const TextWrapper = styled.h3`
  text-align: center;
  font-size: 30px;
  color: white;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 15% 70% 15%;
  text-align: center;
  justify-content: center;
`;
const ImageInputWrapper = styled.div`
    padding: 8px 14px 8px 20px;
    font-size: 18px;
    width: 80px;
    font-weight: bold;
    border: 3px solid;
    border-radius: 30px;
    color: ${theme.color.blue};
    background-color: #11ffee00;
    border-color:  ${theme.color.blue};
`

const Body = styled.form`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 5% 95%;
  grid-column: span 1;
`;

const PosterPage = () => {

    return (
        <>
            <BackgroundWrapper>
                <OngroundWrapper>
                    <TextWrapper>최종 포스터를 확인해보세요</TextWrapper>
                    <Wrapper>
                        <Body>
                            <div >
                                <ImageInputWrapper>포스터</ImageInputWrapper>
                            </div>
                            <div>
                                <ImageInputWrapper>디자인</ImageInputWrapper>
                                <p>귀여운</p>
                                <p>경쾌한</p>
                                <ImageInputWrapper>추천 색상</ImageInputWrapper>
                                <RecommendColorImg/>
                                <ImageInputWrapper>추천 글꼴</ImageInputWrapper>
                                <RecommendWriteImg/>
                            </div>
                            <div
                                style={{
                                    gridColumn: "1/3",
                                    gridRow: "2/3;",
                                }}
                            >
                            </div>

                        </Body>
                    </Wrapper>
                </OngroundWrapper>
                <PosterPageImg />
            </BackgroundWrapper>

        </>
    );
}

export default PosterPage