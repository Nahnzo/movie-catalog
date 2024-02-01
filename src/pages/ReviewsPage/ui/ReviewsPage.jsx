import Sidebar from "shared/ui/Sidebar/Sidebar";
import Header from "shared/ui/Header/Header";
import styles from "./reviewsPage.module.css";

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
