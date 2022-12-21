import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../components/Button';
import Images from '../components/Images';

import jsonResult from '../json_matching-result.json';

const PosterForm = () => {
  const navigate = useNavigate();

  /* 이미지 처리*/
  const selectFile = useRef('');
  const [postImages, setPostImages] = useState([]); // 서버로 보낼 이미지 데이터
  const [showImages, setshowImages] = useState([]); // 프리뷰 보여줄 이미지 데이터

  const handleImageUpload = (e) => {
    // 중복된 이미지가 들어올 경우 console창에 에러발생 뜸
    let fileArr = e.target.files;
    console.log(fileArr[0].type);
    let fileURLs = [];
    // let filesLength = fileArr.length > 30 ? 30 : fileArr.length;    // 최대 30개

    for (let i = 0; i < fileArr.length; i++) {
      let file = fileArr[i];

      let reader = new FileReader();
      reader.onload = () => {
        fileURLs[i] = reader.result;
        setshowImages([...showImages, ...fileURLs]);
      };
      reader.readAsDataURL(file);
    }

    setPostImages([...postImages, ...fileArr]);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    /* 사진 데이터 보내기 */
    const imageData = new FormData();
    for (let i = 0; i < postImages.length; i++) {
      imageData.append('files[]', postImages[i]);
    }

    e.preventDefault();

    const textData = new FormData();
    textData.append('productDetail', document.getElementById('productDetail').value);
    textData.append('productNotice', document.getElementById('productNotice').value);
    textData.append('productPrice', document.getElementById('productPrice').value);

    // 테스트용 지울것
    // localStorage.setItem("text_data", `{"text_notice": "공지사항","text_price": "가격"}`)
    // localStorage.setItem("final_result",  JSON.stringify(jsonResult));
    
    fetch('http://localhost:80/kobert-result', {
      method: 'POST',
      body: textData,
    })
      .then((response) => {
        console.log('response:', response);
        if (response.redirected === true) {
          window.location.href = response.url;
        }
        return response.json();
      })
      .then((data) => {

        const str = `{"text_notice": "${data['text_notice']}","text_price": "${data['text_price']}"}`;

        delete data['text_notice'];
        delete data['text_price'];
        localStorage.setItem('text_data', str);


        imageData.append('data', JSON.stringify(data));

        fetch('http://localhost:5000/upload', {
          method: 'POST',
          body: imageData,
        })
          .then((response) => {
            console.log("response:", response);
            if (response.redirected === true) {
              window.location.href = response.url;
            }
            
            return response.json();
          })
          .then((data) => {
            localStorage.setItem('final_result', JSON.stringify(data));
            console.log('final_result:', data);
            console.log('typeof final_result:', typeof data);
          })
          .catch((error) => {
            console.log('error:', error);
          });
      })
      .catch((error) => {
        console.log('error:', error);
      });

    navigate('/design');
  };

  return (
    <AllWrapper>
      <FormWrapper id="posterForm" onSubmit={handleSubmitForm}>
        <ImageInputWrapper>
          <div>
            <TextWhite>포스터에 들어갈 사진을 업로드 하세요</TextWhite>
          </div>
          <ImgWrapper>
            <input
              type="file"
              name="images"
              ref={selectFile}
              multiple
              aria-multiselectable
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleImageUpload}
            />
            <Images showImages={showImages} />
          </ImgWrapper>

          <Button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              selectFile.current.click();
            }}
          >
            파일 업로드
          </Button>
        </ImageInputWrapper>

        <AllTextInputWrapper>
          <div>
            <TextWhite>제품에 대한 상세 설명을 해주세요.</TextWhite>
            <TextareaInputWrapper type="textarea" id="productDetail" />

            <TextWhite>제품에 대한 유의사항을 작성 해주세요.</TextWhite>
            <TextareaInputWrapper type="textarea" id="productNotice" />

            <TextWhite>가격표를 작성해주세요.</TextWhite>
            <TextareaInputWrapper type="textarea" id="productPrice" />
          </div>
        </AllTextInputWrapper>
      </FormWrapper>

      <div style={{ textAlign: 'center' }}>
        <Button type="submit" fontSize="18px" onClick={handleSubmitForm}>
          <span>NEXT</span>
        </Button>
      </div>
    </AllWrapper>
  );
};

const TextWhite = styled.p`
  color: white;
  font-family:"SCDream4";
`;

const AllWrapper = styled.div`
  justify-content: center;
  text-align: center;
`;

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
`;

const ImageInputWrapper = styled.div`
  padding: 5px;
  border-radius: 50px;
  margin: 5px;
  width: 480px;
  height: 100%;
`;
const ImgWrapper = styled.div`
  padding: 15px;
  padding-top: 60px;
  padding-bottom: 60px;
  margin-top: 15px;
  border: 2px solid white;
  border-radius: 5px;
  background-color: white;
`;

const AllTextInputWrapper = styled.div`
  display: flex;
  border-radius: 5px;
  margin: 10px;
  width: 500px;
  height: 100%;
`;

const TextareaInputWrapper = styled.textarea`
  border-radius: 5px;
  padding: 10px 10px;
  width: 450px;
  height: 150px;
  margin-bottom: 30px;
  border-color: white;
  border-style: none;
  white-space: pre-warp;
  word-break:break-all;
`;

export default PosterForm;
