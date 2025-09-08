import React from 'react'
import useForm from '../hooks/useForm'

const FormComp = () => {
    const {values, handleChange, resetValues} = useForm({
        name : "",
        email : ""
    })

    const handleSubmit = (e)=>{
        e.preventDefault()
        alert(`Name: ${values.name} email ${values.email}`)
        resetValues()

    }

        

  return (
    <form onSubmit={handleSubmit}>
      
    <input type="text" name =  "name" value={values.name} onChange={handleChange} placeholder='Enter name' />
    <input type="email" name = "email" value={values.email} onChange={handleChange} placeholder='Enter email' />
    <button type='submit'>Submit</button>
    </form>
  )
}

export default FormComp