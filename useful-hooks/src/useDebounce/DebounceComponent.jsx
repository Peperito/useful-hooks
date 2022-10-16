import { useState } from "react";
import useDebounce from "./useDebounce";

function DebounceComponent() {

    const [count, setCount] = useState(10)
    useDebounce(() => alert(count), 2000, [count])

  return (
    <div className="flex flex-col max-w-24 justify-center items-center m-4 p-2 border border-black">
      <h2 className="text-center font-bold text-2xl">useDebounceHook</h2>
      <p className="text-sm">Will only set a window alert with count if you stop Incrementing for 2 sec</p>
      <div>{count}</div>
      <button
        className="p-2 border rounded border-black"
        onClick={() => setCount((c) => c + 1)}
      >
        {" "}
        Increment{" "}
      </button>
    </div>
  );}

export default DebounceComponent