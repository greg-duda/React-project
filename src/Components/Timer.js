import React, { useState, useEffect } from 'react'
import { HaJeden } from './Home'


const styledTimer = {
    fontSize: '25px',
    color: 'white',
    margin: '30px auto',
    width: '300px',
    height: '100px',
    borderRadius: '10px',
    transition: '0.2s',
    backgroundColor: '#282c34',
    border: 'solid 1px rgb(248, 248, 248)'
}



const Timer = ( {defaultValue = 0}) => {
    const [time, setTime] = useState(defaultValue)
    const [timerOn, setTimerOn] = useState(false)
    useEffect(() => {
        let interval = null;
        if(timerOn) {
            interval=setInterval(() => {
            setTime(prev => prev + 10)
            }, 10)
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    },[timerOn])

    return(
        <>
        <HaJeden>STOPER</HaJeden>
        <div className='timerContainer'>
            <span id='timerValue'>min: {('0' + Math.floor((time / 60000) % 60)).slice(-2)}</span>
            <span id='timerValue'>sec: {('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
            <span id='timerValue'>ms: {('0' + ((time / 10) % 100)).slice(-2)}</span>
            <button id='start' style={styledTimer} onClick={() => setTimerOn(true)}>Start</button>
            <button id='stop' style={styledTimer} onClick={() => setTimerOn(false)}>Stop</button>
            <button id='timerReset' style={styledTimer} onClick={() => setTime(0)}>Zeruj</button>
        </div>
        </>


    )
}

export default Timer