import { useSelector } from "react-redux";

const useDataLength = () => {
  const { myCollection, wantToSee, arrayReview } = useSelector((state) => state);
  return {
    wantToSee,
    myCollection,
    arrayReview,
  };
};

export default useDataLength;
