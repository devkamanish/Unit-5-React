import React from 'react'
import useToggle from '../hooks/toggle'

const Toggle = () => {
    const [isVisibility , toggleVisibility] = useToggle(false)

  return (
   <div>
    <h2>Toggle component</h2>
    <button onClick={toggleVisibility}>Toggle visibility</button>
    {isVisibility && <p>It is visible</p>}
   </div>
  )
}

export default Toggle

