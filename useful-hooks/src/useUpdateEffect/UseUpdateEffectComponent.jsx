import { useState } from "react";
import useUpdateEffect from "./useUpdateEffect";

export default function UseUpdateEffectComponent() {

    const [count, setCount] = useState(10)
    useUpdateEffect(() => alert(count), [count])

  return (
    <div className="flex flex-col max-w-24 justify-center items-center m-4 p-2 border border-black">
      <h2 className="text-center font-bold text-2xl">useUpdateEffect</h2>
      <p className="text-sm">Will set a window alert on each increment</p>
      <div className="p-2">{count}</div>
      <button
        className="p-2 border rounded border-black"
        onClick={() => setCount(c => c + 1)}>
        Increment
      </button>
    </div>
  );
}
