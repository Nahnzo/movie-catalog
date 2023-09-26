import { useState, useEffect } from "react";

const useLocalStorageData = (key, initialData) => {
  const [array, setArray] = useState(initialData);

  useEffect(() => {
    if (key) {
      const storedData = localStorage.getItem(key);
      if (storedData) {
        setArray(JSON.parse(storedData));
        console.log(JSON.parse(storedData));
      } else {
        localStorage.setItem(key, JSON.stringify(array));
      }
    }
  }, []);

  const updateArray = (newArray) => {
    setArray(newArray);
    localStorage.setItem(key, JSON.stringify(newArray));
  };

  const clearArray = () => {
    setArray([]);
    localStorage.removeItem(key);
  };

  return {
    array,
    updateArray,
    clearArray,
  };
};

export default useLocalStorageData;
