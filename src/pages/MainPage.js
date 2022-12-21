import React from 'react'
// import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Button from '../components/Button'
import MainImg from "../images/MainPageImg2"
import MainImg2 from "../images/MainPageImg3"  //프로젝트 소개 이미지
import MainImg3 from "../images/MainPageImg4"  //프로젝트 이용방법 이미지



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
    fontfamily: 'SCDream8', sans-serif;
    transform: translate( -50%, -50% );
    color: white;
    font-family: "SCDream8";
`
const SimpleTextWrapper = styled.div`
fontfamily: 'Cafe24Simplehae', sans-serif;
`



const MainPage = () => {

    // // flask 데이터 가져오기 예시(테스트)
    // const [data, setData] = useState([{}])

    // useEffect(() => {
    //     fetch("/users").then(
    //         // json 데이터를 객체로 변환(response 객체 이용)
    //         response => response.json()
    //     ).then(
    //         data => {
    //             setData(data)
    //         }
    //     ).catch(
    //         (err) => console.log(err)
    //     )
    // }, []) 


    return (
        <DivWrapper>
            <BackgroundWrapper>
                <div>
                    <MainImg />
                </div>

                <TextWrapper>
                    <h1 class="SCDream8">Make A Poster Like an Expert</h1>
                    <p class="SCDream3">포스터 제작하기 힘들지 않으셨나요?</p>
                    <p class="SCDream3">Mappel에서 나만의 포스터를 만들어 보세요!</p>
                    <p class="SCDream3">남들과 차별화된  AI가 쉽고 빠르게 만들어 줍니다.</p>



                    {/* { (typeof data.members === 'undefined') ? (
                        <p>loading...</p>
                    ) : (
                        data.members.map((u) => <p key={u.id}>{u.name}</p>)
                    )} */}

                    <Link to='/posterForm'>
                        <Button type="button" fontSize="18px" class="SCDream8">
                            <span>시작하기</span>
                        </Button>
                    </Link>
                </TextWrapper>
            </BackgroundWrapper>
            <div>
                <MainImg2 />
                <MainImg3 />
            </div>


        </DivWrapper>
    );
}

export default MainPage