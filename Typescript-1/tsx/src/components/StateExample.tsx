import { useState } from "react"

const StateExample = () => {

    const [name , setName] = useState<string>("")
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

    const [items , setItems] = useState<string[]>([])




  return (
    <div>
        <h1>State example</h1>
        <div>
            <h2>Name: </h2>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <button onClick={()=>setIsLoggedIn(prev =>!prev)}>Toggle</button>
            {isLoggedIn && <p>I am true</p>}

        </div>
    </div>
  )
}

export default StateExample