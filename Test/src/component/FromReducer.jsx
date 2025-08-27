import React from 'react'
import { useReducer } from 'react'


  function formReducer(state , action) {
    switch(action.type){
        case "update_fields":
        return {...state, [action.field ]: action.value }
    }
    
    
}
const FromReducer = () => {

    const [state ,dispatch] = useReducer(formReducer , {name : "", email : "", age: ""})
   
    const handleChange = (e)=>{
        dispatch({type:"update_fields", field : e.target.name,value: e.target.value })
        
    }
    
    function handleSubmit(e){
        e.preventDefault()
        console.log(state)
    }
  return (
<div>

   <h2>Form with use reducer</h2>
   <form onSubmit={handleSubmit}>
    <div>
        <label >Name: </label>
        <input type = "text" placeholder='enter name' value={state.name} name = "name"  onChange={handleChange}/>
    </div>
    <div>
        <label >Email: </label>
        <input type = "email" placeholder='enter name' value={state.email} name='email' onChange={handleChange}/>
    </div>
    <div>
        <label >Age: </label>
        <input type = "text" placeholder='enter age' value={state.age} name = "age" onChange={handleChange}/>
    </div>

    <button type='submit'>Submit</button>
  </form>
    </div>
  )

  
}

export default FromReducer