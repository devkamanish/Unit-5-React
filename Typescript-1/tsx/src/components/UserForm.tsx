import { useEffect, useRef, useState } from "react";

const UserForm = ()=>{ 


    const [name , setName] = useState<string>("")
    const buttonRef = useRef<HTMLButtonElement>(null)


    const handleFocus = ()=>{
        buttonRef.current?.focus()
    }
    useEffect(()=>{
        console.log("Names changes: ",name )
    },[name])

    return (
        <div className="space y-4">
               <h1>Form</h1>
            <input type="text" value={name}
             onChange={(e)=>setName(e.target.value)}
            className="border-2 rounded-xl "
            placeholder="Enter your name"

            />
            <button ref = {buttonRef} onClick={()=> alert(`Hello ${name}`)} 
                className="border-2 p-2 rounded-xl bg-green-500 ml-1 focus:border-2 focus:border-red-600"
                >Say hello</button>

            <button onClick={handleFocus}>Focus "Say hello" button</button>

        </div>
    )
}

export default UserForm;