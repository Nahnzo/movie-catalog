import styles from "./myCollection.module.css";
import Skeleton from "shared/ui/Skeleton/Skeleton";

const MyCollectionSkeleton = () => {
  return (
    <section className={styles.main}>
      <div className={styles.skeletonsHeader}>
        <div className={styles.skeletonsNav}>
          <Skeleton width={99} height={30} border={10} />
          <Skeleton width={184} height={30} border={10} />
          <Skeleton width={450} height={30} border={10} />
          <Skeleton width={105} height={30} border={10} />
          <Skeleton width={280} height={30} border={10} />
          <Skeleton width={90} height={30} border={10} />
          <Skeleton width={70} height={50} border="50px" />
        </div>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.posterSkeleton}>
          <Skeleton width="100%" height="100%" />
          <div className={styles.btnSkeleton}>
            <Skeleton width="100%" height="100%" border={10} margin="5px 0 0 0" />
          </div>
        </div>
        <div className={styles.infoSkeleton}>
          <Skeleton width={190} height={40} border={5} margin="5px 0 0 0" />
        </div>
      </div>
    </section>
  );
};

export default MyCollectionSkeleton;
