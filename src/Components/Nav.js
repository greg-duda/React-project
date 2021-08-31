import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Images/Logo.png'

const Nav = () => {

    return (
        <>
        <div className='Navigation'>
        <img alt='logo' id='logo' src={Logo}></img>
            <div className='Logo'>
            </div>
            <div className='About'>
            <Link to='/'>Home</Link>
            <Link to='/About'>O mnie</Link>
            <Link to='/Timer'>Stoper</Link>
            <Link to='/Counter'>Licznik</Link>
            <Link to='/Characters'> Lista postaci</Link>
            <Link to='/Register'> Rejestracja</Link>
            <Link to='/Login'>Logowanie</Link>
            
            </div>
        </div>
        </>
    )
}
export default Nav