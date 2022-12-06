import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

import PosterImgForm from '../components/PosterImgForm'
import PosterTextForm from '../components/PosterTextForm'

import Manual from '../layout/Manual'
import TextTitle from '../components/TextTitle'
import Button from '../components/Button'

const PosterFormPage = () => {
    const navigate = useNavigate();

    /** submit 처리 **/
    const [images, setImages] = useState([]);
    const [texts, setTexts] = useState({
        productDetail: "",
        productNotice: "",
        productPrice: "",
    });

    const handleSubmitForm = e => {
        e.preventDefault();
  
        const data = new FormData();
        for (let i = 0; i < images.length; i++) {
          data.append("images", images[i]);
        }
        data.append("productDetail", document.getElementsByName("productDetail"))
        data.append("productNotice", document.getElementsByName("productNotice"))
        data.append("productPrice", document.getElementsByName("productPrice"))
    
        fetch('http://localhost:5000/upload', {
          method: 'POST',
          body: data,
        //   redirect: 'follow',
        })
        .then((response) => {
              console.log("response:", response.json())
            //   if (response.redirected === true) {
            //       window.location.href = response.url
            //   }
          })
        .then((obj) => {
            if(obj.result === 'success')
              console.log("obj:", obj)
          })
        .catch((error) => {
              console.log("error:", error)
          });
  
        navigate("/design");
      }

    /** 사이드 메뉴 보이기 **/
    const [height, setHeight] = useState(0);
    const [visibleL, setVisibleL] = useState(false);
    const [visibleR, setVisibleR] = useState(false);

    const assignLHeight = (node) => {
        if (node && !height) {
        setHeight(node.clientHeight);
        setVisibleL(false);
        }
    };

    const assignRHeight = (node) => {
        if (node && !height) {
        setHeight(node.clientHeight);
        setVisibleR(false);
        }
    };

    return (
        <form onSubmit={handleSubmitForm}
            style={{textAlign: 'center'}}>
            <h3>포스터에 들어갈 사진과 텍스트를 넣어주세요.</h3>
            <Wrapper>
                <Manual visible={visibleL} ref={assignLHeight} height={height} />
                <Body>
                    <div>
                        <TextTitle visible={visibleL} setVisible={setVisibleL}><span>사진</span></TextTitle>
                    </div>
                    <div>
                        <TextTitle visible={visibleR} setVisible={setVisibleR}><span>텍스트</span></TextTitle>
                    </div>
                    <PosterImgForm name="images" value={images} onChange={(e) => setImages(e.target.value)} />
                    <PosterTextForm name="texts" value={texts} onChange={(e) => setTexts(e.target.value)} />
                </Body>
                <Manual visible={visibleR} ref={assignRHeight} height={height} />
            </Wrapper>

            <Button type="submit" fontSize="18px">
                <span>NEXT</span>
            </Button>
        </form>
    );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 15% 70% 15%;
  text-align: center;
`

const Body = styled.form`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 5% 95%;
`

export default PosterFormPage;