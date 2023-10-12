export const useLocalStorageLength = (key) => {
  const storedData = localStorage.getItem(key);
  if (storedData) {
    return JSON.parse(storedData).length;
  }
};
