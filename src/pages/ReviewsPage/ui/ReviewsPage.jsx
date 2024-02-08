import Sidebar from "shared/ui/Sidebar/Sidebar";
import Header from "features/Header/ui/Header";
import styles from "./reviewsPage.module.scss";

const ReviewsPage = () => {
  return (
    <section className={styles.main}>
      <Header />
      <div className={styles.mainWrapper}>
        <Sidebar />
      </div>
    </section>
  );
};

export default ReviewsPage;
