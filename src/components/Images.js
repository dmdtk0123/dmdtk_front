import React from 'react'
import styled from "styled-components"

const ImgWrapper = styled.img`
    margin: 5px;
    width: 100px;
    height: 100px;
`

const Images = ({ showImages }) => {
    return (
        <>
            {showImages.map((url) => {
                return <ImgWrapper alt={url} key={url} src={url} />
            })}
        </>
    )
}

export default Images;