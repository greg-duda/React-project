import React from 'react'
import styled from 'styled-components'
const InfoH = styled.h1 `
text-align: center;
color: whitesmoke;
font-size: 25px;
`
const StyledInfo = styled.div `
padding-top: 20px;
margin-top: 10px;
color: whitesmoke;
background-color: #282c34;
width: 400px;
height: 200px;
margin: 0 auto;
box-shadow: 0 4px 8px 10px rgba(0,0,0,0.2);
`
const StyledP = styled.p `
margin: 0;
text-align: center;
color: whitesmoke;
`

const Info = (props) => {
  

    return(

        <StyledInfo>
            <InfoH>{props.name}</InfoH>
            <InfoH>{props.surname}</InfoH>
            <StyledP>{props.age} lata</StyledP>
            <StyledP>{props.email}</StyledP>
            <StyledP>{props.tel}</StyledP>
        </StyledInfo>
    )
}

export default Info