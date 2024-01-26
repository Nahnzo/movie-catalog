export const getFilmTrailerById = async (id) => {
  const data = await fetch(`https://api.kinopoisk.dev/v1.4/movie/${id}`, {
    headers: {
      accept: "application/json",
      "X-API-KEY": "KNARZC7-GV6MBQC-QY96MPW-RYZFKX5",
    },
  });
  const response = await data.json();
  return response.videos.trailers[0].url;
};
