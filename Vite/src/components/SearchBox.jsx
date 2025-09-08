import React, { useEffect, useState } from 'react'
import useDebounce from '../hooks/useDebouce'

const SearchBox = () => {
    const [search , setSearch] = useState("")
    const debouce = useDebounce(search, 2000)


    useEffect(()=>{
      if(debouce){
        console.log("fetching...")
      }
    },[debouce])
  return (
    <div>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
    </div>
  )
}

export default SearchBox   

