import { ROUTES } from "../../../routes";
import { useDataLength } from "shared/lib/hooks/useDataLength";
import useLocalStorageData from "shared/lib/hooks/useLocalStorage";
import FilmIcon from "shared/assets/film-icon.svg";
import ListReviewIcon from "shared/assets/list-review-icon.svg";
import HeartIcon from "shared/assets/heart-icon.svg";
import Svg from "shared/ui/Svg/Svg";
import styles from "./header.module.css";
import Navbar from "shared/ui/Navbar/Navbar";

const Header = () => {
  useLocalStorageData(["wantToSee", "myReviews", "myCollection"]);
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
      </nav>
    </section>
  );
};

export default Header;
