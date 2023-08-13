import { useEffect, useState } from "react";
import styles from "./leaveReview.module.css";
import CardForLeaveReview from "../CardForLeaveReview/CardForLeaveReview";

const LeaveReview = () => {
  const [searchText, setSearchText] = useState("Брат");
  const [arrayResults, setArrayResults] = useState([]);

  const getMovie =
    ("movie/getMovie",
    async () => {
      try {
        const data = await fetch(
          `https://api.kinopoisk.dev/v1.2/movie/search?page=1&limit=10&query=${searchText}`,
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
  const setText = (text) => {
    setSearchText(text);
    console.log(text, "text");
    console.log(searchText, "searchText");
    console.log(arrayResults, "arrayResults");
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <button onClick={() => getMovie()} className={styles.btn}>
          найти
        </button>
      </div>

      <input
        className={styles.search}
        placeholder="Кино, сериал, мультфильм"
        onChange={(e) => setText(e.target.value)}
      />
      <div className={styles.searchResult}>
        {/* {<p>Нет результатов</p> &&
          arrayResults.map((item) => <CardForLeaveReview movie={item} key={item.id} />)} */}
      </div>
    </div>
  );
};

export default LeaveReview;
