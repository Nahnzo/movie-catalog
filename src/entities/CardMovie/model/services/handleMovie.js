export const removeMovieFromCollection = async ({ movie }, userId, collectionType) => {
  const res = await fetch(`http://localhost:5000/api/user/${userId}/movies/${collectionType}/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
};
export const addMovieToCollection = async ({ movie }, userId, collectionType) => {
  const res = await fetch(`http://localhost:5000/api/user/${userId}/movies/${collectionType}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
};
