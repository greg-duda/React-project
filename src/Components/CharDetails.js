import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import CharCard from './CharCard'
import { useHistory } from 'react-router'
import styled from 'styled-components'

import { InfoBtn } from './About'

const CharDiv = styled.div `
display: grid;
justify-content: center;
margin: 0 auto;

&:hover {
    cursor: default;
}
`
const CharDetails = () => {
    const [postac, setPostac] = useState(null)
    const {go} = useHistory()
    const { id } = useParams()
    const handleClick = () => {
        go(-1)
    }

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((res) => {
            setPostac(res.data)
        })
    }, [id])
    return (
        <>
        <CharDiv>
         {postac && <CharCard id={id} name={postac.name} species={postac.species} image={postac.image} status={postac.status} gender={postac.gender}></CharCard> }  
         <InfoBtn style={{width: '400px'}} onClick={handleClick}>Wroc</InfoBtn>
        </CharDiv>
        
        </>
    )
}

export default CharDetails
