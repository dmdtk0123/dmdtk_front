import React from 'react'
// import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Button from '../components/Button'
import MainImg from "../images/MainPageImg2"


const DivWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3em;
    justify-content: center;
`


const TextWrapper = styled.div`
    padding: 0px 0px;
    text-align: center;
    color: white;
    
    
`
const TextWrapper2 = styled.div`
    padding: 0px 0px;
    text-align: left;
    margin-left: 6em;
    margin-right: 5em;
    color: white;
`
const NumberTextWrapper = styled.h3`
    font-size: 1.5em;
    margin-top: 2em;
    margin-bottom: 0.8em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
`

const TitleTextWrapper = styled.h4`
    font-size: 1.2em;
    margin-top: 1.3em;
    margin-bottom: 0.5em;
    margin-left: 1em;
    margin-right: 0;
`


const ContentTextWrapper = styled.h5`
    font-size: 1.0em;
    margin-top: 0em;
    margin-bottom: 0.3em;
    margin-left: 2em;
    margin-right: 0;
`




const MainPage = () => {

    return (
        <DivWrapper>
            <TextWrapper>
                <h1 >텍스트 설명 예시</h1>
                <p>아래에 있는 텍스트 예시를 참고하여 상세설명, 가격표, 유의사항을 작성해주세요</p>
            </TextWrapper>
            <TextWrapper2>

                <NumberTextWrapper>1. 상세설명 예시</NumberTextWrapper>
                <TitleTextWrapper>설명1) 맛에 관련한 텍스트</TitleTextWrapper>
                <ContentTextWrapper>• 신맛이 적으면서 달콤하고 아삭한게 특징입니다.</ContentTextWrapper>
                <ContentTextWrapper>• 가정에서 건강하게 드실수있는 맛좋고 믿을수있는 상품입니다.</ContentTextWrapper>
                <ContentTextWrapper>• 당도가 높아서 새콤한 맛이 부족하게 느껴질수 있어 새콤사과 좋아하시는분께 권장드립니다.</ContentTextWrapper>
                <TitleTextWrapper>설명 2) 농장 혹은 제배 관련된 텍스트</TitleTextWrapper>
                <ContentTextWrapper>• 저희 과일나무는 DMZ청정 6~7년차 나무입니다. 70년간 보존된 맑은 공기와 지하암반수로 재배 합니다.</ContentTextWrapper>
                <ContentTextWrapper>• 잔류 농약 검사 등 여러 테스트에서 안전한 먹거리임을 인증하는 농산물우수관리인증 (GAP)을 받았습니다.</ContentTextWrapper>
                <ContentTextWrapper>• 저희 농장은 해발이 700m로 일교차가 크고 농장이 일조량이 풍부해서 높은 당도를 가진 과일이 생산된답니다.</ContentTextWrapper>
                <ContentTextWrapper>• 인위적으로 키우고 색을 내지 않고 과일 스스로 성장하여 가장 맛있을 적기에 완숙된 과일을 수확하여 최대한 빠르게 보내드리고 있습니다.</ContentTextWrapper>
                <TitleTextWrapper>설명3) 당도에 관련된 텍스트</TitleTextWrapper>
                <ContentTextWrapper>• 당도는 14~16브릭스 정도 나옵니다.</ContentTextWrapper>
                <ContentTextWrapper>• 하루 이틀 지나면 당도가 더 올라갑니다.</ContentTextWrapper>


                <NumberTextWrapper>2. 가격표 예시</NumberTextWrapper>
                <TitleTextWrapper>[판매 상품 / 판매 가격]</TitleTextWrapper>
                <ContentTextWrapper>• 소꼬혼합 18-19과 실무게 4kg특가! / 택포 23000원 </ContentTextWrapper>
                <ContentTextWrapper>• 대중혼합 13-14과 실무게 4kg 올해 마지막 특가 / 택포 25000원</ContentTextWrapper>
                <TitleTextWrapper>[택배사 및 택배비] </TitleTextWrapper>
                <ContentTextWrapper>• 제주도, 도서산간지역 별도 표기</ContentTextWrapper>
                <TitleTextWrapper>[그 외]</TitleTextWrapper>
                <ContentTextWrapper>• 농라에프 주문서 링크 (의무사항)</ContentTextWrapper>
                <ContentTextWrapper>• 고객센터 운영시간 - [월~금 오전 **시~오후 **시/토 오전 **시~오후 **시,일요일,공휴일 응대O,X]</ContentTextWrapper>

                <NumberTextWrapper>3. 유의사항 예시</NumberTextWrapper>
                <ContentTextWrapper>• 빠른시일내에 드시는 것이 가장 좋습니다</ContentTextWrapper>
                <ContentTextWrapper>• 며칠에 한번씩 개봉하여 환기시켜주시면 더 좋습니다.</ContentTextWrapper>
                <ContentTextWrapper>• 사과를 냉장고 채소칸에 한알씩 넣어서 보관하시기 바랍니다.</ContentTextWrapper>
                <ContentTextWrapper>• 온도에 민감한 품종이라 보관시 안전캡을 벗기고 꼭 비닐로 랩핑해서 냉장보관 해주세요.</ContentTextWrapper>
                <TextWrapper>

                </TextWrapper>
            </TextWrapper2>

            <TextWrapper>
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