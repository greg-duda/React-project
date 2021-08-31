import React, {useState, useEffect} from 'react';
import ListaPostaci from './ListaPostaci';
import axios from 'axios'
import styled from 'styled-components';

const PageBtn = styled.button `
line-height: 20px;
margin: 0px 100px 0px 100px; 
display: inline-block;
height: 60px;
width: 150px;
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
    const [page, setCurrentPage] = useState(1)
    const [postaci, setPostaci] = useState(null)
   const next = () => {
       if(page === 34) {
           setCurrentPage(page)
       }
   setCurrentPage(page +1)
   }
   const previous = () => {
       if(page === 1) {
           setCurrentPage(page)
       }
       setCurrentPage(page -1)}
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`).then(res => {
            setPostaci(res.data)
        })
    }, [page])
    if(!postaci) {
        <h1>Loading...</h1>
    }
    return(
        <div>
            <h3><input type='text' placeholder='Search by id...'></input><PageBtn onClick={previous}>Poprzednia</PageBtn>LISTA POSTACI ({postaci?.info.count}) <PageBtn onClick={next}>Następna</PageBtn><input type='text' placeholder='Search by name...'></input></h3>
        
        <ListaPostaci postaci={postaci}/>
        <h3 id='footer'><PageBtn onClick={previous}>Poprzednia</PageBtn><PageBtn onClick={next}>Następna</PageBtn></h3>
        </div>
    )
}


export default Characters

//     const [postaci, setPostaci] = useState(null)
//     useEffect(() => {
//         fetch('https://rickandmortyapi.com/api/character')
//         .then(response => response.json())
//         .then(data => setPostaci(data))
//     }, [])
    


// if(!postaci) {
//     <h1>Loading...</h1>
// }

// return(
//     <ListaPostaci postaci={postaci}/>
// )
// }