import React, { useRef, useState } from 'react'

const InputComponent = () => {
     const [focused, setFocused] = useState(false)
    const inputRef = useRef(null)
   const handleClick = ()=>{
     inputRef.current.focus();

     inputRef.current.style.backgroundColor = "lightgreen"
    setFocused(true)

   }
  return (
    <div style={{padding:"20px" , border :"2px solid"}}>
        <input type="text"  ref = {inputRef}  placeholder='click the button to focus' />
        <button onClick={handleClick} style={{borderRadius:"12px"}}>click me</button>
        {focused && <p>Focused!</p>}
    </div>
  )

  
}

export default InputComponent


