import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'

import { HaJeden } from './Home'
import { useHistory } from 'react-router'
import { InfoBtn } from './About'

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

const Login = () => {
const [error, setError] = useState('')
const [isLoggedIn, setIsLoggedIn] = useState(false)
const [users, setUsers] = useState([])
const [mailInput, setMailInput] = useState('')
const [passwordInput, setPasswordInput] = useState('')
const [name, setName] = useState('')
const [surname, setSurname] = useState('')

const history = useHistory()

const historyHandler = () => {
    history.push('/')
}
const submitHandler = (e) => {
    e.preventDefault()
    users.map((el) => {
        if(el.email === mailInput && el.password === passwordInput) {
            setIsLoggedIn(true)
            setName(el.name)
            setSurname(el.surname)
            setError('')
        } else if(mailInput === '' && passwordInput === '') {
            setError('Wypełnij puste pola')
        }  
         else {
            setError('Nieprawidlowe dane')
        }
        return true
    })
}
useEffect(() => {
    axios.get('http://localhost:3002/users')
    .then((res) => {
        setUsers(res.data)
    })
}, [])
    return(
<div>
        
        {isLoggedIn ? <h1 style={{textAlign:"center"}}> WITAJ {name.toUpperCase()} {surname.toUpperCase()}
        
            </h1> : <> <HaJeden>ZALOGUJ SIĘ</HaJeden><LogDiv>
            {error ? <h2 style={{color: 'whitesmoke', margin: '0', textAlign: 'center', fontSize: '15px', backgroundColor: 'red'}}>{error}</h2> : null}
            <form onSubmit={submitHandler}>
            <label>E-MAIL
                <LogInput onChange={(e) => setMailInput(e.target.value.toLowerCase())} type='email' placeholder='Wpisz swój email...' />
                </label>
                <label>Hasło
                <LogInput onChange={(e) => setPasswordInput(e.target.value.toLowerCase())} type='password' placeholder='Wpisz swoje hasło...' />
                </label>
                <LogBtn>Zaloguj</LogBtn>
            </form>
            
        </LogDiv>
        </>}
        <br />
        <InfoBtn onClick={historyHandler}>Wróć na stronę główną</InfoBtn>
        </div>

    )
}
export default Login