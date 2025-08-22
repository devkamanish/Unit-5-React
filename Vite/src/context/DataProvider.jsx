import React, { Children, use } from 'react'
import { useState,useContext, createContext } from 'react'

   export const DataContext = createContext()

 export function DataProvider({children}) {

    const [state, setstate] = useState({
        loading : false,
        error: null,
        data: null
    })
   
    async function fetchData() {
        setstate({...state, loading : true})

        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const result = await response.json()
            setstate({...state,loading :false, data :result})

        }catch(error){
            setstate({...state,loading :false , data :null , error : error.message})
        }
        
    }
  return (

    <DataContext.Provider value={{state,fetchData}}>
        {children}
    </DataContext.Provider>
    
  )
}


export default DataProvider