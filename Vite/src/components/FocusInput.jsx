import React, { useEffect, useRef } from 'react'

const FocusInput = () => {
    const inputRef = useRef(null)
  
    useEffect(()=>{
        focusInp()
    },[])
    const focusInp = ()=>{
        inputRef.current.focus()
    }
  return (
    <div>
        <input type="text" placeholder='Enter input value..' ref={inputRef} />
        <button onClick={focusInp}>Click me</button>

    </div>
  )
}

export default FocusInput