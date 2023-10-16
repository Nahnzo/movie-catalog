import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { getFilmByName } from "../../tools/getFilmByName";
import CardForLeaveReview from "../../entities/CardForLeaveReview/CardForLeaveReview";
import styles from "./leaveReview.module.css";

const LeaveReview = () => {
  const [name, setSearchName] = useState("");
  const [arrayResults, setArrayResults] = useState([]);
  const [showResultBlock, setShowResultBlock] = useState(false);

  const getMovie = async () => {
    const response = await getFilmByName(name);
    setArrayResults(response.docs.filter((item) => item.poster));
    setShowResultBlock(true);
  };

  const setText = (text) => {
    setSearchName(text);
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
