import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({children})=>{
  
    const [user, setUser] = useState({
        name :"John Doe",
        email :"johndoe@example.com"


    })
   
    const updateUser = (newData)=>{
        setUser((prev)=>({...prev, ...newData}))
    } 
    

    return (
        <UserContext.Provider value = {{user, updateUser}}>
            {children}
        </UserContext.Provider>
    )
}


