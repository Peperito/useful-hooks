import React, { useState } from 'react'
import useTimeout from './useTimeout'

function TimeoutComponent() {

    const [count, setCount] = useState(10)
    const {clear, reset} = useTimeout(() => setCount(0), 3000)

  return (
    <div className="flex flex-col justify-center items-center m-4 p-2 border border-black">
      <h2 className="text-center font-bold text-2xl">useTimeout Hook</h2>
      <p className='text-sm'>Will reset count to 0 after 3 sec</p>
      <div className='p-2'> Count: {count}</div>

      <div className="flex space-x-3">
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
  );
}

export default TimeoutComponent