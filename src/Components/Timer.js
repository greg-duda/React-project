import React, { useState, useEffect } from 'react'




const Timer = ({ defaultValue = 0}) => {
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
        <div className='timerContainer'>
            <span id='timerValue'>min: {('0' + Math.floor((time / 60000) % 60)).slice(-2)}</span>
            <span id='timerValue'>sec: {('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
            <span id='timerValue'>ms: {('0' + ((time / 10) % 100)).slice(-2)}</span>
            <button id='start' className='timer' onClick={() => setTimerOn(true)}>Start</button>
            <button id='stop' className='timer' onClick={() => setTimerOn(false)}>Stop</button>
            <button id='timerReset' className='timer' onClick={() => setTime(0)}>Zeruj</button>
        </div>


    )
}

export default Timer