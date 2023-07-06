import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovie } from "../../Slices/MovieSlice";

const FetchMovie = () => {
  const data = useSelector((state) => state.movie.movie.docs);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!data) {
      dispatch(getMovie());
    }
  }, []);
  if (data) {
    return (
      <div>
        {data.map((item) => (
          <p key={item.id}>{item.description}</p>
        ))}
      </div>
    );
  } else {
    return <p>Load</p>;
  }
};

export default FetchMovie;
