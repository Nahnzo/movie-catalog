import { addMovieToCollection } from "../Slices/MyCollectionSlice";
import { addMovieToReview } from "../Slices/ReviewSlice";
import { addMovie } from "../Slices/WantToSeeSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useLocalStorageData = (keys) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const collections = {
      wantToSee: addMovie,
      myCollection: addMovieToCollection,
      myReviews: addMovieToReview,
    };
    const data = {};
    keys.forEach((key) => {
      const item = localStorage.getItem(key);
      if (item) {
        data[key] = JSON.parse(item);
      }
    });
    keys.forEach((key) => {
      if (collections[key] && data[key]) {
        data[key].forEach((item) => {
          dispatch(collections[key](item));
        });
      }
    });
  }, [dispatch, keys]);
};
export default useLocalStorageData;
