import React from 'react'
import { UserContext } from '../context/UserContext'
import { useContext , useState} from 'react'

const Setting = () => {
    const {user, updateUser} = useContext(UserContext)
    const [formData,setFormData] = useState({
        name : user.name,
        email : user.email
    })

    const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e)=>{

        e.prevenDefault()
        updateUser(formData)
        alert("user updated suvessfully")
    }
  return (
 <div>
  <h2>Settings Page⚙️</h2>
 
   <form onSubmit={handleSubmit}>
     <div > 
   <input type="text" name = "name" value={formData.name} onChange={handleChange} />
 
 <input type="email" name = "email" value={formData.email}  onChange={handleChange} />
  </div>
 <button type='submit'>Change</button>
   </form>
 </div>
  )
}

export default Setting