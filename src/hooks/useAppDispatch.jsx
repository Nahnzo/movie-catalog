import { useDispatch } from "react-redux";

const useAppDispatch = () => {
  const dispatch = useDispatch();
  const dispatchFunction = (callback) => {
    dispatch(callback());
  };

  return {
    dispatchFunction,
  };
};

export default useAppDispatch;
