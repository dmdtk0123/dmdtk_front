import React from 'react'
// import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Button from '../components/Button'
import MainImg from "../images/MainPageImg2"

const DivWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const BackgroundWrapper = styled.div`
    width: 100%;
    position: relative;
`

const TextWrapper = styled.div`
    padding: 5px 10px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50% );
    color: white;
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
                    <h1>Create your own poster with AI</h1>
                    <p>어쩌구 저쩌구 하느라 힘들지 않으셨나요?</p>
                    <p>Mappel 에서 나만의 포스터를 만들어 보세요!</p>
                    <p>남들과 차별화된 포스터를 AI가 쉽고 빠르게 만들어 줍니다.</p>
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