import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../Images/Logo.png'


const Nav = () => {
    const linkStyle = {
    padding: '1px',
  lineHeight: '20px',
  overflow: 'hidden',
  marginTop: '30px',
  textAlign: 'center',
  transition: '0.5s',
  color: 'white',
  textDecoration: 'none',
  fontSize: '20px',
  display: 'inline-block',
  height: '30px',
  width: '90px',
  marginLeft: '10px',
  marginRight: '10px',
  '&:hover': {
    transform: 'scale(1.1)',
    backgroundColor: 'white',
    color: '#282c34',
    borderRadius: '1px'
  }
}
const navstyle = {
    position: 'sticky',
    display: 'flex',
    backgroundColor: '#282c34',
    height: '70px',
    width: '100%',
    top: '0'
}

    return (
        <>
        <div style={navstyle}>
        <img alt='logo' id='logo' src={Logo}></img>
            <div className='Logo'>
            </div>
            <div className='About'>
            <Link style={linkStyle} to='/'>Home</Link>
            <Link style={linkStyle} to='/About'>O mnie</Link>
            <Link style={linkStyle} to='/Timer'>Stoper</Link>
            <Link style={linkStyle} to='/Counter'>Licznik</Link>
            <Link style={linkStyle} to='/Characters'> Lista postaci</Link>
            <Link style={linkStyle} to='/Register'> Rejestracja</Link>
            <Link style={linkStyle} to='/Login'>Logowanie</Link>
            
            </div>
        </div>
        </>
    )
}
export default Nav