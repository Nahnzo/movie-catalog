import { useSelector } from "react-redux";

const useAppSelector = (nameOfStore) => {
  const data = useSelector((state) => state[nameOfStore]);
  return {
    data,
  };
};

export default useAppSelector;
