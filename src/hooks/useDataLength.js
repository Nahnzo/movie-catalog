import { useSelector } from "react-redux";

export const useDataLength = () => {
  const data = useSelector((state) => state);
  return data;
};
