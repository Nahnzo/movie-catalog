export const removeMovieFromCollection = async ({ movie }, userId, collectionType) => {
  const r = await fetch(`http://localhost:5000/api/user/${userId}/movies/${collectionType}/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
  const a = await r.json();
  console.log(a);
};

export const removeEntireListCollection = async (userId, collectionType) => {
  await fetch(`http://localhost:5000/api/user/${userId}/movies/${collectionType}/deleteList`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
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
  await fetch(`http://localhost:5000/api/user/${userId}/movies/addReview`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ movieId: movie.id, userReview }),
  });
};

export const addRating = async (movieId, userId, userRating) => {
  await fetch(`http://localhost:5000/api/user/${userId}/movies/addRating`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ movieId: movieId, userRating: userRating }),
  });
};
