import { useEffect, useRef } from "react";

export default function useUpdateEffect(callback, dependencies) {
  const firstRenderRef = useRef(true);
  const secondRenderRef = useRef(true)

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    if (secondRenderRef.current) {
      secondRenderRef.current = false;
      return;
    }
    
    return callback();
  }, dependencies);
}
