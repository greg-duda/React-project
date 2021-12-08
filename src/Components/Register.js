import axios from 'axios'
import React, {useState} from 'react'
import styled from 'styled-components'
import { HaJeden } from './Home'
import { useHistory } from 'react-router'
import { InfoBtn } from './About'
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

const Register = () => {
const [name, setName]= useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [surname, setSurname] = useState('')
const history = useHistory()





const submitHandler = (e) => {
    e.preventDefault()    
            const user = {name, surname, email, password}
            axios.post('http://localhost:3002/users', user)
            .then(history.push('/Succes'))   
}
    

    return(
        <div>
            <HaJeden>DOŁĄCZ DO NAS</HaJeden>
        <SignDiv>
            <form onSubmit={submitHandler}>
            <label>Imię
                <SignInput onChange={(e) => setName(e.target.value.toLowerCase())} required placeholder='Wpisz swoje imię...' />
                </label>
                <label>Nazwisko
                <SignInput onChange={(e) => setSurname(e.target.value.toLowerCase())} required placeholder='Wpisz swoje nazwisko...' />
                </label>
                <label>E-MAIL
                <SignInput onChange={(e) => setEmail(e.target.value)} required type='email' placeholder='Wpisz swój e-mail...' />
                </label>
                <label>Hasło
                <SignInput onChange={(e) => setPassword(e.target.value.toLowerCase())}required type='password' placeholder='Wpisz swoje hasło...' />
                </label>
                <SignBtn type="submit">Zarejestruj</SignBtn>
            </form>
        </SignDiv>
        <InfoBtn onClick={() => history.push('/Home')}>Wróć na stronę główną</InfoBtn>
        </div>
    )
}
export default Register
