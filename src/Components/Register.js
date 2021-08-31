import React from 'react'
import styled from 'styled-components'
import { HaJeden } from './Home'

const Register = () => {
const SignDiv = styled.div`
margin: 50px auto;
background-color: whitesmoke;
width: 320px;
height: 400px;
display: flex;
flex-direction: column;
`
const SignInput = styled.input`
font-size: 15px;
border-radius: 5px;
padding-left: 10px;
width: 269px;
height: 50px;
background-color: #282c34;
border: none;
color: whitesmoke;
`
const SignBtn = styled.button `
transition: 0.5s;
width: 320px;
height: 65px;
background-color: #282c34;
color: whitesmoke;
font-size: 20px;
box-shadow: 0 4px 8px 10px rgba(0,0,0,0.2);
border: none;
&:hover {
    cursor: pointer;
    font-size: 25px;
    border: solid 1px whitesmoke;
}
`

    return(
        <div>
            <HaJeden>DOŁĄCZ DO NAS</HaJeden>
        <SignDiv>
            <form>
            <label>Imię
                <SignInput placeholder='Wpisz swoje imię...' />
                </label>
                <label>Nazwisko
                <SignInput placeholder='Wpisz swoje nazwisko...' />
                </label>
                <label>E-MAIL
                <SignInput type='email' placeholder='Wpisz swój e-mail...' />
                </label>
                <label>Hasło
                <SignInput type='password' placeholder='Wpisz swoje hasło...' />
                </label>
                <SignBtn>Zarejestruj</SignBtn>



            </form>
        </SignDiv>
        </div>
    )
}
export default Register