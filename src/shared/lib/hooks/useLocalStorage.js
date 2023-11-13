// import { WantToSeeActions, addMovie } from "../pages/WantToSee/model/slices/WantToSeeSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MyCollectionActions } from "../../../pages/MyCollection/model/slices/MyCollectionSlice";
import { ReviewActions } from "../../../pages/MyReviews/model/slices/ReviewSlice";
import { WantToSeeActions } from "../../../pages/WantToSee/model/slices/WantToSeeSlice";

const useLocalStorageData = (keys) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const collections = {
      wantToSee: WantToSeeActions.addMovie,
      myCollection: MyCollectionActions.addMovieToCollection,
      myReviews: ReviewActions.addMovieToReview,
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
