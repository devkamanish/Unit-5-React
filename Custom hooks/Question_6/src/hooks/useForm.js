import { useState } from "react";
import Useform from "../../../../Performance Optimization/Question_6/src/components/Useform";

function useForm(initialValues){

    const [values, setValues] = useState(initialValues);

    const handleChange = (e)=>{
        const {name , value}  = e.target;
        setValues(prev=>({...prev, [name]:value}))

    }


    const resetValues = ()=>{
        setValues(initialValues)
    }

    return {values, resetValues, handleChange}

}


export default useForm