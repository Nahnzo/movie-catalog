import { useState, useEffect } from "react";

const useLocalStorageData = (key, initialData) => {
  const [array, setArray] = useState(() => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    setArray((prevArray) => {
      const newData = initialData.filter((item) => {
        return prevArray.every((prevItem) => prevItem.id !== item.id);
      });
      const mergedData = [...prevArray, ...newData];
      localStorage.setItem(key, JSON.stringify(mergedData));
      localStorage.setItem("lengthMyCollection", JSON.stringify(mergedData.length));
      return mergedData;
    });
  }, [initialData.length, initialData, key]);
  return [array, setArray];
};

export default useLocalStorageData;
