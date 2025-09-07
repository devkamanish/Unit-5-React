import React, { useState , useMemo} from 'react'

 function DoubleNumber({number}){
    const slowFunction =(num)=>{
        console.log("calculating")
        for(let i =0;i<1e9 ;i++){}
        console.log("completed")
        return num*2;

    }
    const result = useMemo(()=>slowFunction(number), [number])

    
     
    return (
        <p>Result : {result}</p>
    )
 }


 
const UseMemo = () => {

    const [number , setNumber] = useState(1)
    const [color , setColor]  = useState(false)

    const toggleChange = ()=>{
        setColor(prev => !prev)

    }
  return (
    <div style={{backgroundColor : color?"lightblue": "lightcoral" ,padding : "20px"}}>
         <input type="number" value={number} onChange={(e)=>setNumber(Number(e.target.value))} />
         <button onClick={toggleChange}>Toggle</button>
         <DoubleNumber number={number}/>

    </div>
  )
}

export default UseMemo