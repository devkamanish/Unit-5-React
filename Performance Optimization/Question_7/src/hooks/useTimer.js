import { useEffect } from "react";
import { useState } from "react";

function useTimer(){
    const[ timer , setTimer] = useState(0) 
    const [isRunning, setIsRunning] = useState(false)

    useEffect(()=>{
        let intervalId ;
        if(isRunning){
            intervalId = setInterval(() => {
                setTimer((prev)=>prev+1)
            }, 1000);
        }
        return ()=> clearInterval(intervalId)
    },[isRunning])

    const startTimer=()=>{
    setIsRunning(true)
    }
     
    const stopTimer = ()=>{
        setIsRunning(false);
    }

    const resetTimer = ()=>{
        setIsRunning(false)
        setTimer(0)
    }
   

    return {timer ,isRunning, startTimer, stopTimer,resetTimer}

}

export default useTimer;