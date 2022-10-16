import { useCallback, useState, useEffect } from "react";

export function useLocalStorage(key, defaultValue) {
    return useStorage(key, defaultValue, window.localStorage)
}

export function useSessionStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.sessionStorage);
}

function useStorage(key, defaultValue, storageObject) {
    const [value, setValue] = useState( () => {
        
    })

}