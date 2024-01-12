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
