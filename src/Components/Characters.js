import React, {useState, useEffect} from 'react';
import axios from 'axios'
import styled from 'styled-components';

import CharCard from './CharCard';
import { HaJeden, StylInput } from './Home';

const FilterBar = styled.div `
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
justify-items: center;
`

const PageBtn = styled.button `
border-radius: 5px;
line-height: 30px;
margin: 0px 100px 0px 100px; 
display: inline-block;
height: 60px;
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
    text-decoration: none;
    background-color: whitesmoke;
    color: #282c34;
    border-radius: 1px;
}
`

function Characters() {

    const [loading, setLoading] = useState(false)
    const [page, setCurrentPage] = useState(1)
    const [postaci, setPostaci] = useState(null)
    const [input, setInput] = useState('')
    const [filter, setFilter] = useState('')
    const [gender, setGender] = useState('')
    const [sort, setSort] = useState(false)
    const onChangeHandler = (e) => {
        setFilter(e.target.value)
        setCurrentPage(1)
    }
    const genderHandler = (e) => {
        setGender(e.target.value)
        setCurrentPage(1)
    }
    const inputHandler = (e) => {
        setInput(e.target.value)
        setCurrentPage(1)
    }
    const nextPg = () => {
        setCurrentPage((prevPage) => prevPage + 1)
    }
    const prevPg = () => {
        setCurrentPage((prevPage) => prevPage - 1)
    }
    const sortHandler = () => {
        setSort((prevSort) => !prevSort)
    }
    
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/?name=${input}&page=${page}&status=${filter}&gender=${gender}`).then((res) => {
            setLoading(true)
            setPostaci(res.data)
            setLoading(false)
        })
    }, [input, page, filter, gender, sort])
  
 
    return(
        <div>
            
           {loading ? <HaJeden>Loading...</HaJeden> : <HaJeden>LISTA POSTACI ({postaci?.info.count})</HaJeden>} 
            <h3>Strona {page}/{postaci?.info.pages}</h3>
            <FilterBar><select onChange={onChangeHandler}>
                <option value=''>All</option>
                <option value='unknown'>Unknown</option>
                <option value='Alive'>Alive</option>
                <option value='Dead'>Dead</option>
            </select>
            
            <PageBtn disabled={page === 1} onClick={prevPg}>Poprzednia</PageBtn>
            <PageBtn style={{borderRadius: '10px', width: '100px', height: '30px', alignSelf:'center'}} onClick={sortHandler}>Sortuj...</PageBtn>
            <PageBtn disabled={page === postaci?.info.pages} onClick={nextPg}>Nastepna</PageBtn>
            <select onChange={genderHandler}>
                <option value=''>All</option>
                <option value='Male'>Male</option>
                <option value='Female'>Woman</option>
                <option value='Genderless'>Genderless</option>
                <option value='unknown'>Unknown</option>
            </select></FilterBar>
            <StylInput placeholder='Wpisz imie...' style={{justifyContent: 'center'}} onChange={inputHandler}></StylInput>
            
            
            
            <div className='charContainer'>
            
            {
                postaci?.results
                .sort((a, b) => !sort ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
                .filter((item) => gender === '' ? true : item.gender === gender)
                .filter((item) => input === '' ? item : item.name.toLowerCase().includes(input.toLowerCase()))
                .filter((item) => filter !== '' ? item.status === filter : item)
                .map(({ name, species, image, status, gender, id}) => <CharCard key={id} id={id}  name={name} species={species} image={image} status={status} gender={gender} />)
            }
        </div>
        
        </div>
    )
}


export default Characters
