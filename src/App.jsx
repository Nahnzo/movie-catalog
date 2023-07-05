import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovie } from "./Slices/MovieSlice";
import "./App.css";

function App() {
  const data = useSelector((state) => state.movie.movie.docs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovie());
  }, []);

  return <></>;
}

export default App;
