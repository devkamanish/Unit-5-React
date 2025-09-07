import { useState } from "react";


function useToggle(inititalValue = false){
    const [value, setValue] = useState(inititalValue)
    const toggle  = ()=> setValue((prev)=>!prev)
    return [value, toggle]
}

export default (useToggle)


    