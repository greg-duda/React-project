import React, { useState } from 'react'
import styled from 'styled-components'

const RegularValue = styled.span`
color: white;
font-size: 50px;
display: inline-block;
font-weight: 700;
width: 50px;
text-align: center;

`

const StyledValue = styled.span`
color: greenyellow;
font-size: 50px;
display: inline-block;
font-weight: 700;
width: 50px;
text-align: center;
`
const ResetBtn = styled.button`
box-shadow: rgb(0, 255, 34) 1px 1px 17px 5px;
margin-top: 80px;
border-radius: 10px;
background-color: #282c34;
width: 150px;
height: 50px;
transition: 0.2s;
border: solid 1px rgb(245, 245, 245);
&:hover {
    cursor: pointer;
  transform: scale(1.1);
  background-color: rgb(0, 255, 34);
}
`
const StyledBtn = styled.button `
transition: 0.2s;
  box-shadow: ${props => (props.plus ? 'rgb(28, 134, 255) 1px 1px 17px 5px' : 'red 1px 1px 17px 5px')};
  margin-left: ${props => (props.plus ? '50px' : '0px')};
  margin-right: ${props => (props.plus ? '0px' : '50px')};
  background-color: #282c34;
  width: 300px;
  height: 100px;
  border: solid 1px rgb(248, 248, 248);
  border-radius: 10px;
  margin-top: 200px;
&:hover {
    cursor: pointer;
    transform: scale(1.1);
    background-color: ${props => (props.plus ? 'rgb(28, 134, 255)' : 'red')

}
`
const OnlySpan = styled.span `
font-size: ${props => (props.reset ? '30px' : '60px')};
  color:white;
  text-align: center;
  font-weight: 700;
`

function Counter() {
    
    const [count, setCount] = useState(0)
    const decrement = () => setCount(count - 1)
    const increment = () => setCount(count + 1)
    
    const reset = () => setCount(0)

    
    
    return (
        
        <div className='counter'>
          
        <StyledBtn onClick={decrement}><OnlySpan>-</OnlySpan></StyledBtn>
        {/* <StyledValue>{count}</StyledValue> */}
        {count % 5 === 0 && count !== 0 ? <StyledValue>{count}</StyledValue> : <RegularValue>{count}</RegularValue>}
        <StyledBtn onClick={increment} plus><OnlySpan >+</OnlySpan></StyledBtn>
        <br></br>
        <ResetBtn onClick={reset}><OnlySpan reset>RESET</OnlySpan></ResetBtn>
        </div>
        
    )
}

export default Counter
// const decrement = () => setCount(prev => prev -1)
    // const increment = () => setCount(prev => prev +1)