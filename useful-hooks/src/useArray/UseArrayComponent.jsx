import useArray from "./useArray"
import React from "react"

function UseArrayComponent() {
    const { array, set, push, remove, filter, update, clear} = useArray([1,2,3,4,5,6])

    return (
      <div className="flex flex-col max-w-24 justify-center items-center m-4 p-2 border border-black space-y-3">
        <h2 className="font-bold">Basic Array operations with custom hook</h2>
        <div>{array.join(", ")}</div>
        <div className="flex space-x-3">
          <button
            className="p-2 border border-black rounded"
            onClick={() => push(7)}
          >
            Add7
          </button>
          <button
            className="p-2 border border-black rounded"
            onClick={() => update(1, 9)}
          >
            Change second element to 9
          </button>
          <button
            className="p-2 border border-black rounded"
            onClick={() => remove(1)}
          >
            Remove second element
          </button>
          <button
            className="p-2 border border-black rounded"
            onClick={() => filter((n) => n < 4)}
          >
            {" "}
            Filter less than 4
          </button>
          <button
            className="p-2 border border-black rounded"
            onClick={() => set([1, 2])}
          >
            Set to 1,2
          </button>
          <button className="p-2 border border-black rounded" onClick={clear}>
            Clear
          </button>
        </div>
      </div>
    );
}

export default UseArrayComponent