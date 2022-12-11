import { useState, useEffect } from 'react'
import { json } from 'stream/consumers'

const useLocalStorage = (key, initialState='') => {
    const [state, setState] = useState(
        () => json.parse(window.localStorage.getItem(key)) || initialState
    );

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    const setLocalStorageState = newState => {
        try {
          const newStateValue =
            typeof newState === 'function' ? newState(state) : newState;
          setState(newStateValue);
          window.localStorage.setItem(key, JSON.stringify(newStateValue));
        } catch (error) {
          console.error(`Unable to store new value for ${key} in localStorage.`);
        }
      };
      
    return [state, setState];
}

export default useLocalStorage;