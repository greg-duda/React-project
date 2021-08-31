import React from 'react'

const CharCard = ({ name, species, image, status, gender, id}) => {


 return(
    <div className='card' data-name={name}>
        <img className='charImage' alt={name} src={image}>
        </img>
        <div className='cardInfo'>
            <h1>{name}</h1>
            <h5>{species}</h5>
            <h5>{status}</h5>
            <h5>{gender}</h5>
        </div>
    </div>
 )
 }
export default CharCard