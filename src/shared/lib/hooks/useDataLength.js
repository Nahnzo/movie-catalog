import { useSelector } from "react-redux";

export const useDataLength = () => {
  const wantToSeeLength = useSelector((state) => state.wantToSee.length);
  const myCollectionLength = useSelector((state) => state.myCollection.length);
  const myReviewsLength = useSelector((state) => state.arrayReviews.length);
  return { wantToSeeLength, myCollectionLength, myReviewsLength };
};
