import React from "react";
import useTimer from "../hooks/useTimer";

const Timer = () => {
  const { timer, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <div>
      <h2>{timer}</h2>
      <button onClick={startTimer}> Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
