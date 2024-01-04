import { ROUTES } from "../../lib/config/routes";
import { User } from "entities/User";
import { useDataLength } from "../../lib/hooks/useDataLength";
import useLocalStorageData from "../../lib/hooks/useLocalStorage";
import FilmIcon from "../../assets/film-icon.svg";
import ListReviewIcon from "../../assets/list-review-icon.svg";
import HeartIcon from "../../assets/heart-icon.svg";
import Svg from "../Svg/Svg";
import styles from "./header.module.css";
import Navbar from "../Navbar/Navbar";
import {
  LOCAL_STORAGE_MY_COLLECTION,
  LOCAL_STORAGE_WANT_TO_SEE,
  LOCAL_STORAGE_MY_REVIEWS,
} from "../../lib/const/const";

const Header = () => {
  useLocalStorageData([LOCAL_STORAGE_WANT_TO_SEE, LOCAL_STORAGE_MY_REVIEWS, LOCAL_STORAGE_MY_COLLECTION]);
  const { wantToSeeLength, myCollectionLength, myReviewsLength } = useDataLength();
  return (
    <section className={styles.header}>
      <nav className={styles.navigation}>
        <Navbar path={ROUTES.wantToSee} dataLength={wantToSeeLength}>
          Хочу посмотреть
          <Svg path={FilmIcon} styles={styles.svg} viewBox="0 0 60 60" />
        </Navbar>
        <Navbar path={ROUTES.myCollection} dataLength={myCollectionLength}>
          Моя коллекция
          <Svg path={HeartIcon} styles={styles.svg} viewBox="-30 -15 180 130" />
        </Navbar>
        <Navbar path={ROUTES.myReviews} dataLength={myReviewsLength}>
          Мои рецензии
          <Svg path={ListReviewIcon} styles={styles.svg} viewBox="-200 -10 890 500" />
        </Navbar>
        <Navbar path={ROUTES.whatToSee}>Что посмотреть?</Navbar>
        <Navbar>
          <User />
        </Navbar>
      </nav>
    </section>
  );
};

export default Header;
