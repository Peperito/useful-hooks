import { useState } from "react";
import useDebounce from "./useDebounce";

function DebounceComponent() {

    const [count, setCount] = useState(10)
    useDebounce(() => alert(count), 1000, [count])

  return (
    <div className="flex flex-col max-w-24 justify-center items-center">
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