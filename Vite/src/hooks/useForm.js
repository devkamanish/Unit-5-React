import { useState } from "react";

function useForm(initialValue){
    const [values, setValues] = useState(initialValue)

    const handleChange  = (e)=>{
        const {name, value} = e.target;
        setValues(prev=>({...prev, [name]:value}))

    }

    const resetValues = ()=>{
        setValues(initialValue)

    }

    return {values, handleChange, resetValues}

}

export default useForm