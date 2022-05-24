import { useState, useEffect } from "react";


function getSavedValue(key, initialValue){
    const savedValue = JSON.parse(localStorage.getItem(key));
    // if key has asigned value return it 
    if(savedValue) return savedValue;

    if(initialValue instanceof Function) return initialValue();
    return initialValue;
}

export default function useLocalStorage(key, initialValue){

    const [value, setValue] = useState(() => {
            return getSavedValue(key, initialValue);
    })

    // Update local storage when value has changed
    useEffect(() =>{
        localStorage.setItem(key, JSON.stringify(value));

    }, [value])

    return [value, setValue]
}