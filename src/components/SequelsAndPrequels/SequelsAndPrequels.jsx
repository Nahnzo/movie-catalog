/* eslint-disable react/prop-types */
import CardForSimilarMovie from "../../entities/CardForSimilarMovie/CardForSimilarMovie";
import styles from "./sequelsAndPrequels.module.css";

const SequelsAndPrequels = ({ movies }) => {
  return (
    <>
      <h3>Сиквели и приквелы</h3>
      <div className={styles.wrapper}>
        {movies.map((item) => (
          <CardForSimilarMovie movie={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default SequelsAndPrequels;
