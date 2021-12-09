import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'

import Info from './Info'
import { HaJeden } from './Home'

export const InfoBtn = styled.button `
margin: 10px auto;
display: block;
height: 30px;
width: 300px;
border: none;
background-color: #282c34;
box-shadow: 0 4px 8px 10px rgba(0,0,0,0.2);
text-align: center;
cursor: pointer;
padding: 0;
color: whitesmoke;
cursor: pointer;
text-decoration: none;
transition: 0.5s;
&:hover {
    box-shadow: 0 4px 8px 10px rgba(0,0,0,0.2);
    transform: scale(1.1);
    text-decoration: none;
    background-color: whitesmoke;
    color: #282c34;
    border-radius: 1px;
}
`
const About = () => {
const [show, setShow] = useState(false)
const {push} = useHistory()

    return(
        <div>
            <HaJeden>O MNIE</HaJeden>
            <div className='About-content'>
                <div className='About-container'>
                     <div className='devstock'></div>
                     <InfoBtn onClick={() => {
                         setShow((prevShow) => !prevShow)}}>{show ? "Ukryj info" : "Pokaz info"}</InfoBtn>{show? <Info tel="661-778-000" email="greg.duda96@gmail.com" age="24" surname="Duda" name="Grzegorz" /> : null }
                         <InfoBtn onClick={() => push('/')}>Wróć na stronę główną</InfoBtn>
                </div>
                
            </div>
        </div>

    )
}
export default About