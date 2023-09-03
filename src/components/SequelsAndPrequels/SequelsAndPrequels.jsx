/* eslint-disable react/prop-types */
import CardForSimilarMovie from "../CardForSimilarMovie/CardForSimilarMovie";
import styles from "./sequelsAndPrequels.module.css";

const SequelsAndPrequels = ({ movies }) => {
  return (
    <div className={styles.wrapper}>
      {movies.map((item) => (
        <CardForSimilarMovie movie={item} key={item.id} />
      ))}
    </div>
  );
};

export default SequelsAndPrequels;
