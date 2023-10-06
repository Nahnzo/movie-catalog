import { useState, useEffect } from "react";
import useAppSelector from "./useAppSelector";

const useLocalStorageData = (key, initialData) => {
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : initialData;
  });

  useEffect(() => {
    // Первоначальная инициализация из localStorage
    const storedData = localStorage.getItem(key);
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      localStorage.setItem(key, JSON.stringify(initialData));
    }
  }, [key, initialData]);

  const updateData = (newData) => {
    // Объединяем старые данные с новыми
    const updatedData = [...data, newData];
    // Сохраняем обновленные данные в localStorage
    localStorage.setItem(key, JSON.stringify(updatedData));
    // Обновляем состояние компонента
    setData(updatedData);
  };

  return [data, updateData];
};

export default useLocalStorageData;
