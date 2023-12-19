export const getPersonById = async (id) => {
  try {
    const data = await fetch(`https://api.kinopoisk.dev/v1/person/${id}`, {
      method: "GET",
      headers: {
        "X-API-KEY": "KNARZC7-GV6MBQC-QY96MPW-RYZFKX5",
      },
    });
    const response = await data.json();
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
