
import { useState } from "react";

function useForm(initialValue){
    const [values, setValus]  = useState(initialValue)

    const handleChange = (e)=>{
        const {name , value} =e.target;
        setValus((prev)=> ({...prev, [name]:value}))
    }
    
    const resetValues = ()=>{
        setValus(initialValue)

    }
    
    return {values, handleChange, resetValues}


}

export default useForm;
