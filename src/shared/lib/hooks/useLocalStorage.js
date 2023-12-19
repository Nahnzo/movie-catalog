import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MyCollectionActions } from "pages/MyCollection/model/slices/MyCollectionSlice";
import { ReviewActions } from "pages/MyReviews/model/slices/ReviewSlice";
import { WantToSeeActions } from "pages/WantToSee/model/slices/WantToSeeSlice";
import { useDataLength } from "../../lib/hooks/useDataLength";

const collections = {
  WANT_TO_SEE: WantToSeeActions.addMovie,
  MY_COLLECTION: MyCollectionActions.addMovieToCollection,
  MY_REVIEWS: ReviewActions.addMovieToReview,
};
const actionsForAllExistingItems = {
  WANT_TO_SEE: WantToSeeActions.addAllInitialMovie,
  MY_COLLECTION: MyCollectionActions.addAllInitialMovie,
  MY_REVIEWS: ReviewActions.addAllInitialMovie,
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
          if (JSON.parse(item).length > 1) {
            dispatch(actionsForAllExistingItems[key](JSON.parse(item)));
          } else {
            data[key] = JSON.parse(item);
          }
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
