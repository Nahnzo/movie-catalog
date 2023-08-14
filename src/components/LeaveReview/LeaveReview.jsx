import { useEffect, useState } from "react";
import styles from "./leaveReview.module.css";
import CardForLeaveReview from "../CardForLeaveReview/CardForLeaveReview";

const LeaveReview = () => {
  const [searchText, setSearchText] = useState("");
  const [arrayResults, setArrayResults] = useState([]);

  const getMovie = async () => {
    try {
      if (searchText.trim() === "") {
        console.log("Search text is empty");
        return;
      }

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
      setArrayResults(response.docs);
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

  // useEffect(() => {
  //   console.log("arrayResults in useEffect:", arrayResults);
  // }, [arrayResults]);

  const setText = (text) => {
    setSearchText(text);
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <button onClick={getMovie} className={styles.btn}>
          найти
        </button>
      </div>

      <input
        className={styles.search}
        placeholder="Кино, сериал, мультфильм"
        onChange={(e) => setText(e.target.value)}
      />
      <div className={styles.searchResult}>
        {arrayResults.length > 0 ? (
          arrayResults.map((item) => <CardForLeaveReview movie={item} key={item.id} />)
        ) : (
          <h2>Нет результатов</h2>
        )}
      </div>
    </div>
  );
};

export default LeaveReview;
