import React from 'react'
import styled from 'styled-components'

const PosterTextForm = () => {
    return (
        <AllTextInputWrapper>
            <div>        
                <p>제품에 대한 상세 설명을 해주세요.</p>
                <TextareaInputWrapper type='textarea'
                                name='productDetail'/>
                    
                <p>제품에 대한 유의사항을 작성 해주세요.</p>
                <TextareaInputWrapper type='textarea' 
                                name='productNotice'/>
                    
                <p>가격표를 작성해주세요.</p>
                <TextareaInputWrapper type='textarea' 
                                name='productPrice'/>
            </div>
        </AllTextInputWrapper>
    );
  }

const AllTextInputWrapper = styled.div`
  display: flex;
  border-radius: 5px;
  padding: 0px 30px 0px 10px;
  display: inline-block;
  margin: 10px;
  height: 100%;
`

const TextareaInputWrapper = styled.input`
  border-radius: 5px;
  padding: 10px 10px;
  width: 100%;
  height: 150px;
  margin-bottom: 30px;
`


export default PosterTextForm;