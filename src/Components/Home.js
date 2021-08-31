import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

  const StylInput = styled.input`
  margin: 0 auto;
  display: block;
  height: 50px;
  width: 200px;
  background-color: rgba(0, 0, 0, 0.253);
  color: whitesmoke;
  border: none;
  text-align: center;
  font-size: 13px;
  border-radius: 5px;
  &:focus {
    box-shadow: 0 4px 8px 10px rgba(0,0,0,0.2);
    border: none;
  }
  `

export const StylBtn = styled.button`
margin: 10px auto;
display: block;
height: 30px;
width: 200px;
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
 export const HaJeden = styled.h1`
all: unset;
margin-top: 20px;
color: whitesmoke;
display: block;
width: 72%;
margin-left: auto;
margin-right: auto;
justify-content: center;
text-align: center;
font-size: 30px;
box-shadow: 0 4px 8px 10px rgba(0,0,0,0.2);
`
export const NavLink = styled(Link)`
all: unset;
display: block;
height: 50px;
width: 200px;
margin-top: 5px;
background-color: whitesmoke;
text-align: center;
vertical-align: center;
font-size: 20px;

padding: 0;
color: #282c34;
cursor: pointer;
text-decoration: none;
transition: 0.5s;

&:hover {
    box-shadow: 0 4px 8px 10px rgba(0,0,0,0.2);
    transform: scale(1.1);
    text-decoration: none;
    background-color: #282c34;
    color: whitesmoke;
    border-radius: 1px;
}
`


const Home = () => {

    return (
        <div className='content'>
            <div className='contentImage'>
                <StylInput placeholder='Nic się nie stanie jeśli coś tu wpiszesz' id='homeInput' type='text'></StylInput>
                <StylBtn>Przycisk</StylBtn>
            </div>
            <HaJeden>Co chciałbyś dzisiaj robić?</HaJeden>
            <div className='furtherContent'>
                    <div className='secondContainer'>
                        <div className='block'>
                            <div id='home' className='piece'></div>
                            <NavLink to='/About'>Dowiedz się więcej</NavLink>
                        </div>
                        <div className='block'>
                            <div id='clock' className='piece'></div>
                            <NavLink to='/Timer'>Wypróbuj stoper</NavLink>
                        </div>
                        <div className='block'>
                            <div id='plus' className='piece'></div>
                            <NavLink to='/Counter'>Może chcesz coś dodać?</NavLink>
                        </div>
                        <div className='block'>
                            <div id='person' className='piece'></div>
                            <NavLink to='/Characters'>Poznaj Rick and Morty</NavLink>
                        </div>
                        <div className='block'>
                            <div id='register' className='piece'></div>
                            <NavLink to='/Register'>Dołącz do nas!</NavLink>
                        </div>
                        <div className='block'>
                            <div id='login' className='piece'></div>
                            <NavLink to='/Login'>Zaloguj się</NavLink>
                        </div>
                        
                    </div>
            </div>
        </div>
    )
}
export default Home