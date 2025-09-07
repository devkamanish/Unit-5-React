import { useState } from "react";

function useLocalStorage(key , initialValue){
    const [value  , setValue] = useState(()=>{
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue
    });


    const storedValue = (newValue)=>{
        setValue(newValue);

        localStorage.setItem(key , JSON.stringify(newValue))
    }

    return [value , storedValue]
}

export default useLocalStorage;

