import { useDispatch } from "react-redux";

const useAppDispatch = () => {
  const dispatch = useDispatch();
  const dispatchFunction = (func) => {
    dispatch(func());
  };

  return {
    dispatchFunction,
  };
};

export default useAppDispatch;
