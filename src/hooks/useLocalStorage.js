import { addMovieToCollection } from "../Slices/MyCollectionSlice";
import { addMovieToReview } from "../Slices/ReviewSlice";
import { addMovie } from "../Slices/WantToSeeSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useLocalStorageData = (key) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const collections = {
      wantToSee: addMovie,
      myCollection: addMovieToCollection,
      myReviews: addMovieToReview,
    };
    const storedData = localStorage.getItem(key);
    if (storedData) {
      JSON.parse(storedData).forEach((item) => {
        dispatch(collections[key](item));
      });
    }
  }, [dispatch, key]);
};

export default useLocalStorageData;
