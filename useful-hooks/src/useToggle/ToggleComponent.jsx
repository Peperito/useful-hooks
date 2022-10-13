import React from 'react'
import useToggle from './useToggle'

function ToggleComponent() {

    const [value, toggleValue] = useToggle(false)

  return (
    <div className="flex flex-col justify-center items-center m-4">
      <div>{value.toString()}</div>
      <div className='flex space-x-4'>
        <button className='p-2 border rounded border-black'  onClick={toggleValue}>Toogle</button>
        <button className='p-2 border rounded border-black' onClick={() => toggleValue(true)}> Make True </button>
        <button className='p-2 border rounded border-black' onClick={() => toggleValue(false)}> Make False </button>
      </div>
    </div>
  );
}

export default ToggleComponent