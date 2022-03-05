import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (process.browser) {
        if (localStorage !== undefined) {
          const storedItem = window.localStorage.getItem(key);

          return storedItem ? JSON.parse(storedItem) : initialValue;
        }
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      if (process.browser) {
        if (localStorage != undefined) {
          const valueToStore =
            value instanceof Function ? value(storedValue) : value;

          setStoredValue(valueToStore);

          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
