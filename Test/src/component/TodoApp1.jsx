import React from 'react'
import { useState } from 'react'

const TodoApp1 = () => {

    const [todos, setTodos] = useState([])

    function addTodo(text){
        setTodos([...todos, {id:Date.now(), text, completed: false}])

    }

    function toggleTodo(id){
       setTodos(todos.map((todo)=>
      todo.id === id? {...todo, completed:!todo.completed}:todo))
    }
    
    function handleDelete(id){
        setTodos(todos.filter((todo)=>todo.id !==id))
    }
    
  return (
  <div>
    <button onClick={()=>addTodo("New task")}>Add task</button>
    
    <ul>    
    {todos.map((todo)=>(
        <li key = {todo.id}>
            <span style={{textDecoration:todo.completed ? "line-through":'none', cursor:"pointer"}} onClick={()=>toggleTodo(todo.id)}>{todo.text}</span>
            <button onClick={()=>handleDelete(todo.id)}>❌</button>
        </li>

    ))}
    </ul>
  </div>

  )
}

export default TodoApp1