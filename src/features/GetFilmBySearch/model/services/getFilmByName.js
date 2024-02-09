import { LOCAL_STORAGE_USER_NUMBER_PAGINATION } from "shared/lib/const/const";

export const getFilmByName = async (name) => {
  const pageNumber = Number(localStorage.getItem(LOCAL_STORAGE_USER_NUMBER_PAGINATION) || 1);
  const limitPage = pageNumber * 18 || 18;
  try {
    if (name.trim() === "") {
      return;
    }

    const data = await fetch(
      `https://api.kinopoisk.dev/v1.2/movie/search?query=${name}&limit=${limitPage}&offset=${pageNumber - 1 || 1}`,
      {
        headers: {
          accept: "application/json",
          "X-API-KEY": "KNARZC7-GV6MBQC-QY96MPW-RYZFKX5",
        },
      }
    );
    const response = await data.json();
    return response;
  } catch (error) {
    console.log("Error: ", error.message);
  }
};
