import { useState } from "react";
import usePrevious from "./usePrevious";

function PreviousComponent() {
    const [count, setCount] = useState(0)
    const previousCount = usePrevious(count)

  return (
    <div className="flex flex-col justify-center items-center m-4 p-2 border border-black">
      <h2 className="text-center font-bold text-2xl">usePrevious Hook</h2>
      <div>Current count:{count}</div>
      <div>Previous count:{previousCount}</div>
      <div className="flex space-x-4">
        <button
          className="p-2 border rounded border-black"
          onClick={() => setCount(c => c + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default PreviousComponent