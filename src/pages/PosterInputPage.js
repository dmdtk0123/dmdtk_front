import React, { useState, useRef } from 'react'
import styled from "styled-components"

import Button from '../components/Button'
import TextTitle from '../components/TextTitle'
import Images from '../components/Images'
import { Link } from 'react-router-dom'

const TextWrapper = styled.h3`
    text-align: center;
`

const FormWrapper = styled.form`
    display: flex;
    justify-content: center;
    text-align: center;
`

const AllInputWrapper = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 5px;
    margin: 10px;
    width: 500px;
    height: 100%;
`

const InputWrapper = styled.input`
    border-radius: 5px;
    padding: 10px 10px;
    width: 450px;
    height: 150px;
    margin-bottom: 30px;
`

const ImageInputWrapper = styled.div`
    padding: 10px;
    border-radius: 30px;
    margin: 5px;
    width: 480px;
    height: 100%;
`
const ImgWrapper = styled.div`
    padding: 15px;
    margin-top: 15px;
    border: 2px solid black;
`

const PosterInputPage = () => {
    const selectFile = useRef("");
    const [postImages, setPostImages] = useState([]); // 서버로 보낼 이미지 데이터
    const [showImages, setshowImages] = useState([]); // 프리뷰 보여줄 이미지 데이터

    const handleImageUpload = e => {    // 중복된 이미지가 들어올 경우 console창에 에러발생 뜸
        let fileArr = e.target.files;

        let fileURLs = [];
        // let filesLength = fileArr.length > 30 ? 30 : fileArr.length;    // 최대 30개
        
        for (let i = 0; i < fileArr.length; i++){
            let file = fileArr[i];
            
            let reader = new FileReader();
            reader.onload = () => {
                fileURLs[i] = reader.result;
                setshowImages([...showImages, ...fileURLs]);
            }
            reader.readAsDataURL(file);
        }

        setPostImages([...postImages, ...fileArr]);
        console.log(showImages.length)
    }

    return (
        <>
            <TextWrapper>포스터에 들어갈 사진과 텍스트를 넣어주세요.</TextWrapper>
            <FormWrapper>
                <ImageInputWrapper>
                        <TextTitle>
                            <span>사진</span>
                        </TextTitle>
                    
                        <ImgWrapper>
                            <input type="file"
                                    multiple
                                    aria-multiselectable
                                    accept="image/*"
                                    style={ {display: "none"} }
                                    ref = {selectFile}
                                    onChange={handleImageUpload} />
                            <Images showImages={showImages} />
                        </ImgWrapper>

                        <Button type="button" onClick={e => {e.preventDefault(); selectFile.current.click()}}>
                            파일 업로드
                        </Button>
                </ImageInputWrapper>

                <AllInputWrapper>
                    <div>
                        <TextTitle>
                            <span>텍스트</span>
                        </TextTitle>
                        
                        <p>제품에 대한 상세 설명을 해주세요.</p>
                        <InputWrapper
                            type='textarea'
                            name='productDetail'/>
                        <p>제품에 대한 유의사항을 작성 해주세요.</p>
                        <InputWrapper type='textarea' />
                        <p>가격표를 작성해주세요.</p>
                        <InputWrapper type='textarea' />
                    </div>
                </AllInputWrapper>
            </FormWrapper>

            <div style={ {textAlign: "center"} }>
                <Link to="/design">
                    <Button type="submit" fontSize="18px">
                        <span>NEXT</span>
                    </Button>
                </Link>
            </div>
            
        </>
    );
}

export default PosterInputPage