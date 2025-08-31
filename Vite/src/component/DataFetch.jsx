import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { fetchData } from '../redux/action'
import { useEffect } from 'react'

const DataFetch = () => {

    const {loading, data, error} = useSelector((state)=>state);
    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(fetchData())
    },[dispatch])
  return (
    <div>
        <h2>Async data fetching with redux thunk</h2>
        {loading  && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {data && (<div> 
            <h3>Fethced Data</h3>
            <p>{data.id}</p>
            <p>Title: {data.title}</p>
        </div>)}
    </div>
  )
}


export default DataFetch