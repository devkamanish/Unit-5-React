import React from 'react'
import { act } from 'react'
import { useEffect } from 'react'
import { useReducer } from 'react'


function apiReducer(state, action){
    switch(action.type){
        case  "fetch_init":
            return {...state, loading : true, error : null}
        case "fetch_success":
            return {...state, loading : false, data : action.payload}    
        case   "fetch_failure":
            return {...state, loading : false, error :action.payload}
        default :       
        return state
    }
}

const FetchData = () => {
    const [state, dispatch] = useReducer(apiReducer , {loading : false, error : null, data: []})

    async function fetchData() {
        dispatch({type :"fetch_init"})
        try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        dispatch({type : "fetch_success", payload: data})

        }catch(error){
            dispatch({type: "fetch_failure" , payload : 'Failed to fetch data'})
        }
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
            <h2>Fetching api data</h2>
            {state.loading && <p>Loading...</p>}
            {state.error && <p style={{color :"red"}}>{state.error}</p>}
            {state.data && (
                <div>{state.data.title}</div>
            )}


    </div>
  )
}

export default FetchData

