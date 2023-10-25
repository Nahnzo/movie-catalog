import { useSelector } from "react-redux";

export const useDataLength = (keys) => {
  const data = useSelector((state) => state);
  const result = {};
  keys.forEach((key) => {
    if (data.hasOwnProperty(key)) {
      result[key] = data[key].length;
    } else {
      result[key] = 0;
    }
  });

  return result;
};
