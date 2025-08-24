import { useState } from 'react'
import './App.css'
import NotificationList from './components/NotificationList'
import ControlButtons from './components/ControlButtons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: "20px" }}>
   <h1>Real-time Notification Panel</h1>    
   <NotificationList/>
   <ControlButtons/>
   </div>
  )
}

export default App
