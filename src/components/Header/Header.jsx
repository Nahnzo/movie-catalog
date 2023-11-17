import { ROUTES } from "../../routes";
import { useDataLength } from "shared/lib/hooks/useDataLength";
import useLocalStorageData from "shared/lib/hooks/useLocalStorage";
import FilmIcon from "shared/assets/film-icon.svg";
import ListReviewIcon from "shared/assets/list-review-icon.svg";
import HeartIcon from "shared/assets/heart-icon.svg";
import styles from "./header.module.css";
import Navbar from "shared/ui/Navbar/Navbar";

const Header = () => {
  const data = useDataLength(["arrayReviews", "wantToSee", "myCollection"]);
  useLocalStorageData(["wantToSee", "myReviews", "myCollection"]);
  return (
    <section className={styles.header}>
      <nav className={styles.navigation}>
        <Navbar path={ROUTES.wantToSee} icon={FilmIcon} dataLength={data["wantToSee"]}>
          Хочу посмотреть
        </Navbar>
        <Navbar path={ROUTES.myCollection} icon={HeartIcon} dataLength={data["myCollection"]}>
          Моя коллекция
        </Navbar>
        <Navbar path={ROUTES.myReviews} icon={ListReviewIcon} dataLength={data["arrayReviews"]}>
          Мои рецензии
        </Navbar>
        <Navbar path={ROUTES.whatToSee}>Что посмотреть?</Navbar>
      </nav>
    </section>
  );
};

export default Header;
