import { useState } from 'react'

import './App.css'
import { increment, decrement } from './redux/counterSlice'
import {useSelector, useDispatch} from "react-redux"

function App() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Redux toolkit counter</h1>
      <h2>{count}</h2>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button disabled = { count ===0} onClick={()=>dispatch(decrement())}>Decrement</button>

    </div>
  )
}

export default App


