import React from 'react'
import styled from 'styled-components'
import { HaJeden } from './Home'

const Login = () => {
    const LogBtn = styled.button`
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
    const LogInput = styled.input`
    font-size: 15px;
    border-radius: 5px;
    padding-left: 10px;
    width: 269px;
    height: 50px;
    background-color: #282c34;
    border: none;
    color: whitesmoke;
    `
    const LogDiv = styled.div `
    margin: 50px auto;
background-color: whitesmoke;
width: 320px;
height: 200px;
display: flex;
flex-direction: column;
    `

    return(
<div>
            <HaJeden>ZALOGUJ SIĘ</HaJeden>
        <LogDiv>
            <form>
            <label>E-MAIL
                <LogInput type='email' placeholder='Wpisz swój email...' />
                </label>
                <label>Hasło
                <LogInput type='password' placeholder='Wpisz swoje hasło...' />
                </label>
                <LogBtn>Zaloguj</LogBtn>
            </form>
        </LogDiv>
        </div>

    )
}
export default Login