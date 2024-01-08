export const removeMovieFromCollection = async ({ movie }, userId) => {
  const res = await fetch(`http://localhost:5000/api/user/${userId}/movies/myCollection/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
  const r = await res.json();
  console.log(r);
};
export const addMovieToCollection = async ({ movie }, userId) => {
  const res = await fetch(`http://localhost:5000/api/user/${userId}/movies/myCollection/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
  console.log(userId);
  const r = await res.json();
  console.log(r);
};
