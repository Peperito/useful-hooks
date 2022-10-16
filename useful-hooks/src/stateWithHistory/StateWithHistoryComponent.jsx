import { useState } from "react"
import usestateWithHistory from "./usestateWithHistory"


function StateWithHistoryComponent() {

    const [count, setCount, {history, pointer, back, forward, go }] = usestateWithHistory(0) 

  return (
    <div className="flex flex-col max-w-24 justify-center items-center m-4 p-2 border border-black space-y-2">
      <div>Count: {count}</div>
      <div>State array created from history: {history.join(", ")}</div>
      <div>Pointer Index: {pointer}</div>

      <div className="flex space-x-3">
        <button
          className="p-2 border rounded border-black"
          onClick={() => setCount((currentCount) => currentCount + 1)}
        >
          Increment
        </button>
        <button className="p-2 border rounded border-black" onClick={back}>
          Back
        </button>
        <button className="p-2 border rounded border-black" onClick={forward}>
          Forward
        </button>
        <button
          className="p-2 border rounded border-black"
          onClick={() => go(2)}
        >
          Go To Index 2
        </button>
      </div>
    </div>
  );
}

export default StateWithHistoryComponent