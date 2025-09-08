import React from 'react'
import useWindowWith from '../hooks/useWindowWidth'

const ResizeComp = () => {
    const width = useWindowWith()

  return (
    <div>
        <h2>{width} px</h2>
    </div>
  )
}

export default ResizeComp