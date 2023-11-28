import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { MyCollectionActions } from "pages/MyCollection/model/slices/MyCollectionSlice";
import { ReviewActions } from "pages/MyReviews/model/slices/ReviewSlice";
import { WantToSeeActions } from "pages/WantToSee/model/slices/WantToSeeSlice";
import { useDataLength } from "shared/lib/hooks/useDataLength";

const collections = {
  wantToSee: WantToSeeActions.addMovie,
  myCollection: MyCollectionActions.addMovieToCollection,
  myReviews: ReviewActions.addMovieToReview,
};
const data = {};
const useLocalStorageData = (keys) => {
  const { wantToSeeLength, myCollectionLength, myReviewsLength } = useDataLength();
  const dispatch = useDispatch();
  useEffect(() => {
    if (wantToSeeLength == 0 && myCollectionLength == 0 && myReviewsLength == 0) {
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
    }
  }, [dispatch, keys, myCollectionLength, myReviewsLength, wantToSeeLength]);
};
export default useLocalStorageData;
