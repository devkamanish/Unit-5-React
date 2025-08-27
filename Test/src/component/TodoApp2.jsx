import React from 'react'
import { useReducer } from 'react'


function todoReducer(state, action ){
    switch(action.type){
        case "add":
            return [...state, {id:Date.now(), text : action.payload, completed : false}]
        case "toggle":
            return state.map((todo)=> todo.id ===action.payload ? {...todo, completed: !todo.completed}: todo)

        case  "delete":
            return state.filter((todo)=> todo.id !== action.payload)
        default :
        return state;
    }

}
const TodoApp2 = () => {

    const [todos , dispatch] = useReducer(todoReducer , [])

  return (
    <div>
        <button  onClick={()=> dispatch({type : "add", payload : "New task"})}>
            Add Todo
        </button>

        <ul>
            {todos.map((todo)=>(
                <li key = {todo.id}>

                    <span
                    style={{textDecoration:todo.completed ? "line-through":'none', cursor:"pointer"}}
                    onClick={()=>dispatch({type :"toggle" ,payload : todo.id})}
                    >{todo.text}</span>
                    <button onClick={()=>dispatch({type: "delete" ,payload : todo.id})}>❌</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoApp2