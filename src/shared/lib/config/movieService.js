export const removeMovieFromCollection = async ({ movie }, userId, collectionType) => {
  await fetch(`http://localhost:5000/api/user/${userId}/movies/${collectionType}/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
};
export const removeEntireListCollection = async (userId, collectionType) => {
  const res = await fetch(`http://localhost:5000/api/user/${userId}/movies/${collectionType}/deleteList`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await res.json();
  console.log(response);
};

export const addMovieToCollection = async ({ movie }, userId, collectionType) => {
  await fetch(`http://localhost:5000/api/user/${userId}/movies/${collectionType}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
};

export const addReview = async ({ movie }, userId, userReview) => {
  const res = await fetch(`http://localhost:5000/api/user/${userId}/movies/addReview`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ movieId: movie.id, userReview }),
  });
  let r = await res.json();
  console.log(r);
};
