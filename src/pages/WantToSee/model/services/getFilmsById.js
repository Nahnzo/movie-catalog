export const getFilmsById = async (array) => {
  try {
    const filmPromises = array.map((id) => {
      return fetch(`https://api.kinopoisk.dev/v1/movie/${id}`, {
        method: "GET",
        headers: {
          "X-API-KEY": "KNARZC7-GV6MBQC-QY96MPW-RYZFKX5",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .catch((error) => {
          console.error("Error fetching film:", error);
          return null; // Возвращаем null в случае ошибки, чтобы обработать ее дальше
        });
    });

    const films = await Promise.all(filmPromises); // Ждем завершения всех запросов

    // Обработка полученных фильмов
    console.log("Films:", films);
    return films;
  } catch (error) {
    console.error("Error in getFilmsById:", error);
    return []; // Возвращаем пустой массив в случае ошибки
  }
};
