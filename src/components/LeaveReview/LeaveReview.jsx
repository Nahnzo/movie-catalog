import styles from "./leaveReview.module.css";

const LeaveReview = () => {
  const getMovie =
    ("movie/getMovie",
    async () => {
      try {
        const data = await fetch(
          "https://api.kinopoisk.dev/v1.2/movie/search?page=1&limit=10&query=Зверополис",
          {
            headers: {
              accept: "application/json",
              "X-API-KEY": "KNARZC7-GV6MBQC-QY96MPW-RYZFKX5",
            },
          }
        );
        const response = await data.json();
        console.log(response);
      } catch (error) {
        console.log("Error: ", error.message);
      }
    });

  return (
    <div className={styles.wrapper}>
      <button onClick={() => getMovie()}>найти </button>
      <input className={styles.search} placeholder="Кино, сериал, мультфильм" />
    </div>
  );
};

export default LeaveReview;
