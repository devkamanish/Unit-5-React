
import React, { useRef, useState } from 'react'

const Otp = () => {
    const [otp, setOtp] = useState(['','','',''])
    const inputRef  = useRef([])

    const handleChange  = (index,value)=>{
        if(value !=='' && (isNaN(value) || value.length>1)) return ;
        const pin = [...otp]
        pin[index]  = value.slice(0,1)
        setOtp(pin)


        if(value && index<3){
            inputRef.current[index+1].focus()

        }

     

    }
       const handleKeyDown = (e,index)=>{
            if(e.key === "Backspace" && !otp[index] && index>0){
                inputRef.current[index-1].focus()
            }
        }

  return (
  <div>
    <h2>OTP</h2>
    {otp.map((ele, index)=>(
        <input type="text" key={index}
        value={ele}
        onChange={(e)=>handleChange(index , e.target.value)}
        onKeyDown={(e)=>handleKeyDown(e, index)}
        ref={(ele)=>inputRef.current[index] = ele}
        style={{width :"50px", height:"50px"}}
        />
    ))}

  </div>
    
  )
}

export default Otp

