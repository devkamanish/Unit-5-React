import React from 'react'
import useForm from '../hooks/useForm'

const FormComponent = () => {
    const initialValues = {
        name :"",
        password : ""

    }

    const {values, handleChange, resetValues} = useForm(initialValues);

    const handleSubmit  =(e)=>{
        e.preventDefault();
        console.log(values);
        resetValues()

    }
  return (

   <form onSubmit={handleSubmit}>
     <input type="text" name = "name" value={values.name} onChange={handleChange} placeholder='Enter name' />
     <input type="password" name='password' value={values.password} onChange={handleChange} placeholder='Enter password' />
     <button type='submit'>Submit</button>
   </form>
  )
}

export default FormComponent