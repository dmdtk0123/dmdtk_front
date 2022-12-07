import React, { useState, useRef } from 'react'
import styled from 'styled-components'

import Button from '../components/Button'
import Images from '../components/Images'

const PosterImgForm = ({ children, value, ...props }) => {
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
    }

    const handleSubmit = (e) => {
      this.props.onSubmit({
        
      })
    }

    return (
        <ImageInputWrapper>
            <ImgWrapper>
                <input
                    type="file"
                    name = "images"
                    ref={selectFile}
                    multiple
                    aria-multiselectable
                    accept="image/*"
                    style={ {display: "none"} }
                    onChange={handleImageUpload}/>
                <Images showImages={showImages} />
            </ImgWrapper>

            <Button type="button" onClick={e => {e.preventDefault(); selectFile.current.click()}}>
                파일 업로드
            </Button>
        </ImageInputWrapper>
    );
  }

const ImageInputWrapper = styled.div`
  padding: 0px 10px 0px 30px;
  border-radius: 30px;
  margin: 5px;
  height: 100%;
`
const ImgWrapper = styled.div`
  padding: 15px;
  margin-top: 15px;
  border: 2px solid black;
`

export default PosterImgForm;