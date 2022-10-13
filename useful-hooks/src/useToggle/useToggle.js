import { useState } from "react";

export default function useToggle(defaultValue) {
    
    const [value, setValue] = useSate(defaultValue)

    function ToggleValue(value) {
        setValue(currentValue => 
            typeof value === "boolean" ? value : !currentValue
        )
    }

    return [value, ToggleValue]
}