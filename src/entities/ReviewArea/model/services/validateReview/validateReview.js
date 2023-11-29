export const getDefaultReviewValue = (review) => {
  return review.trim() === "" ? "Место для вашей рецензии" : review;
};
