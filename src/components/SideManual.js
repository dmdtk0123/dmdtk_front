import React from "react";
import ImagePin from '../Manual/ImagePin';
import TextPin from '../Manual/TextPin';

const SideManual = ({ children, ...props }) => {

    return (
        <>
            <h3>사진 이미지 </h3>
            <p>
                <span>대충 사진을 이런식으로 넣으라는 내용</span>
                <span>대충 사진을 이런식으로 넣으라는 내용</span>
                <span>대충 사진을 이런식으로 넣으라는 내용</span>
                <span>대충 사진을 이런식으로 넣으라는 내용</span>
                <span>대충 사진을 이런식으로 넣으라는 내용</span>
                <span><ImagePin/></span>
                <TextPin/>
                
                
            </p>
        </>
    );
}

export default SideManual;