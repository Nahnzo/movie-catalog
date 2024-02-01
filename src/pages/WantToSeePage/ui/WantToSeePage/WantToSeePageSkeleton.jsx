import styles from "./wantToSeePage.module.css";
import Skeleton from "shared/ui/Skeleton/Skeleton";

const WantToSeeSkeleton = () => {
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
      <div className={styles.containerSkeleton}>
        <div className={styles.wrapperCard}>
          <div className={styles.skeletonCard}>
            <Skeleton width="100%" height="100%" margin="0" />
          </div>
          <div className={styles.wrapperContent}>
            <Skeleton width="80%" height="20%" margin="0 0 0 0" border="0 10px 10px 0" />
            <Skeleton width="80%" height="45%" margin="20px 0 0 0" border="0 10px 10px 0" />
            <div className={styles.btnsWrapper}>
              <Skeleton width="49%" height={40} margin="0 0 0 0" border="10px" />
              <Skeleton width="32%" height={40} margin="0 0 0 0" border="10px" />
            </div>
            <Skeleton width="45%" height={30} margin="0 0 0 0" border="0 10px 10px 0" />
          </div>
        </div>
        <div className={styles.collectionWrapper}>
          <Skeleton height="100%" width={162} margin="0 5px 0 0 " />
          <Skeleton height="100%" width={162} margin="0 5px 0 0 " />
          <Skeleton height="100%" width={162} margin="0 5px 0 0 " />
          <Skeleton height="100%" width={162} margin="0 5px 0 0 " />
          <Skeleton height="100%" width={162} margin="0 5px 0 0 " />
        </div>
      </div>
    </section>
  );
};

export default WantToSeeSkeleton;
