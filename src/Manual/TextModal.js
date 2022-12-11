import React from 'react'
// import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Button from '../components/Button'
import MainImg from "../images/MainPageImg2"



const DivWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`

const BackgroundWrapper = styled.div`
    width: 100%;
    position: relative;
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
            <BackgroundWrapper>
                <div>
                    <MainImg />
                </div>

                <TextWrapper>
                    <h1 >Make A Poster Like an Expert</h1>
                    <p>포스터 제작하기 힘들지 않으셨나요?</p>
                    <p>Mappel에서 나만의 포스터를 만들어 보세요!</p>
                    <p>남들과 차별화된  AI가 쉽고 빠르게 만들어 줍니다.</p>
                    {/* { (typeof data.members === 'undefined') ? (
                        <p>loading...</p>
                    ) : (
                        data.members.map((u) => <p key={u.id}>{u.name}</p>)
                    )} */}

                    <Link to='/posterForm'>
                        <Button type="button" fontSize="18px">
                            <span>시작하기</span>
                        </Button>
                    </Link>
                </TextWrapper>
            </BackgroundWrapper>
        
        </DivWrapper>
    );
}

export default MainPage