export const getFilmByName = async (name) => {
  try {
    if (name.trim() === "") {
      console.log("Search text is empty");
      return;
    }

    const data = await fetch(
      `https://api.kinopoisk.dev/v1.2/movie/search?page=1&limit=10&query=${name}`,
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
