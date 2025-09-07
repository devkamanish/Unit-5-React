import React from 'react'
import useTimer from '../hooks/useTimer'

const Timercomponent = () => {
    const {timer ,isRunning, startTimer, stopTimer,resetTimer}= useTimer()

  return (
  <div>
    <h2>Timer page</h2>
    <h3>{timer}</h3>
    <button onClick={startTimer}>Start timer</button>
    <button onClick={stopTimer}>Stop timer</button>
    <button onClick={resetTimer}>Reset</button>
  </div>
  )
}

export default Timercomponent