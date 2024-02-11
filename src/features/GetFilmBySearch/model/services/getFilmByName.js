export const getFilmByName = async (name) => {
  localStorage.setItem("isSearch", "true");
  try {
    if (name.trim() === "") {
      return;
    }
    const data = await fetch(`https://api.kinopoisk.dev/v1.2/movie/search?query=${name}`, {
      headers: {
        accept: "application/json",
        "X-API-KEY": "KNARZC7-GV6MBQC-QY96MPW-RYZFKX5",
      },
    });
    const response = await data.json();
    return response;
  } catch (error) {
    console.log("Error: ", error.message);
  }
};
