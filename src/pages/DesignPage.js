import React from 'react';
import styled from 'styled-components';

import theme from '../styles/theme';
import Button from '../components/Button';
import TextTitle from '../components/TextTitle';
import { Link } from 'react-router-dom';
import DesignImg from '../images/DesignPageImg'; //배경 이미지

const DesignPage = () => {
  const designMoodList = [
    '귀여운', '밝은', '신선한', '감성적인', '자유로운',
    '말끔한', '자연적인', '온화한', '편안한', '단정한',
    '우아한', '심플한', '돋보이는', '개성적인', '실용적인',
    '모던한', '고급스러운', '세련된', '클래식한', '차분한',
  ];

  return (
    <BackgroundWrapper>
      <OngroundWrapper>
        <TextWrapper>원하는 포스터 분위기를 선택해주세요.</TextWrapper>
        <Wrapper>
          <div></div>
          <div>
            <TextTitle modal="design">
              <span style={{marginTop: "3.5px"}}>
                디자인
              </span>
            </TextTitle>

            <TextWhite>디자인에 반영될 형용사를 최소 3가지 선택해주세요</TextWhite>

            <BorderWrapper>
              {designMoodList.map((mood, index) => (
                <Button fontSize={theme.fontSize.xs} color={theme.color.pinkBtn}>
                  <span key={index}># {mood}</span>
                </Button>
              ))}
            </BorderWrapper>

            <div style={{ textAlign: 'center' }}>
              <Link to="/poster">
                <Button type="submit" fontSize="18px" color={theme.color.pinkBtn}>
                  <span>완료</span>
                </Button>
              </Link>
            </div>
          </div>
          <div></div>
        </Wrapper>
      </OngroundWrapper>
      <DesignImg />
    </BackgroundWrapper>
  );
};

const BorderWrapper = styled.div`
  width: 500px;
  height: 200px;
  border: 0px solid green;
`;

const Wrapper = styled.div`
  display: flex;
  grid-template-columns: 15% 70% 15%;
  text-align: center;
  justify-content: center;
`;
const BackgroundWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const OngroundWrapper = styled.div`
  width: 100%;
  position: absolute;
  margin-top: 100px;
`;

const TextWhite = styled.p`
  color: white;
`;

const TextWrapper = styled.h3`
  text-align: center;
  font-size: 30px;
  color: white;
`;


export default DesignPage;
