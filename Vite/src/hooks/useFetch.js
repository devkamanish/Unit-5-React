import { useEffect, useState } from "react";

function useFetch(url){
    const [data, setData] = useState(null)
    const [loading , setLoading]  = useState(true)
    const [error , setError] = useState(null)

    async function fetchData() {
        try{
            if(!url) return ;
            setLoading(true)
            let res = await fetch(url)
            let data = await res.json()
            setData(data)
        }catch(e){
            setError(e.message)
        }finally{
            setLoading(false)
        }   
    }

    useEffect(()=>{
        console.log("mounted")
        fetchData()
    },[url])

    return {data, loading, error}
}


export default useFetch;



