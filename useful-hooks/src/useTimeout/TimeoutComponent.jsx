import React, { useState } from 'react'
import useTimeout from './useTimeout'

function TimeoutComponent() {

    const [count, setCount] = useState(10)
    const {clear, reset} = useTimeout(() => setCount(0), 1000)

  return (
    <div className="flex flex-col justify-center items-center">
      <div>{count}</div>

      <div className='flex space-x-3'>
        <button
          className="p-2 border rounded border-black"
          onClick={() => setCount((c) => c + 1)}
        >
          Increment
        </button>
        <button className="p-2 border rounded border-black" onClick={clear}>
          Clear Timeout
        </button>
        <button className="p-2 border rounded border-black" onClick={reset}>
          Reset Timeout
        </button>
      </div>
    </div>
  )
}

export default TimeoutComponent