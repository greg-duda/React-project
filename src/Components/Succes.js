import React from 'react'
import { useHistory } from 'react-router'
import checked from '../Images/checked.png'
import { InfoBtn } from './About'

const Succes = () => {
    const history = useHistory()
    return (
        <div style={{display: 'grid'}}>
            <h1 style={{textAlign: 'center', color: 'whitesmoke'}}>POMYŚLNA REJESTRACJA!</h1>
            <img  alt="Login succes" style={{margin: '0 auto'}} src={checked}></img>
            <h2 style={{textAlign: 'center', color: 'whitesmoke'}}>Przejdz do logowania</h2>
            <InfoBtn onClick={() => history.push('/Login')}>Zaloguj się!</InfoBtn>
        </div>
    )
}

export default Succes
