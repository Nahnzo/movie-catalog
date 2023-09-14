import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import styles from "./leaveReview.module.css";
import CardForLeaveReview from "../../entities/CardForLeaveReview/CardForLeaveReview";

const LeaveReview = () => {
  const [searchText, setSearchText] = useState("");
  const [arrayResults, setArrayResults] = useState([]);
  const [showResultBlock, setShowResultBlock] = useState(false);

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
      setArrayResults(response.docs.filter((item) => item.poster));
      setShowResultBlock(true);
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

  const setText = (text) => {
    setSearchText(text);
  };

  return (
    <div className={showResultBlock ? styles.wrapper : styles.wrapperHidden}>
      <h3>Найдите, что бы оставить рецензию</h3>
      <input
        className={showResultBlock ? styles.searchHidden : styles.search}
        placeholder="Кино, сериал, мультфильм"
        onChange={(e) => setText(e.target.value)}
      />
      <HiMagnifyingGlass
        onClick={getMovie}
        className={showResultBlock ? styles.btnHidden : styles.btn}
      />

      <div className={showResultBlock ? styles.searchResult : styles.hiddenSearchResult}>
        {arrayResults.length > 0 ? (
          arrayResults.map((item) => (
            <CardForLeaveReview
              movie={item}
              key={item.id}
              setShowResultBlock={setShowResultBlock}
            />
          ))
        ) : (
          <h2 style={{ display: showResultBlock ? "block" : "none" }}>Нет результатов</h2>
        )}
      </div>
    </div>
  );
};

export default LeaveReview;
