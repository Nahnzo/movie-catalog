import { ROUTES } from "../../routes";
import { BsFolder2Open } from "react-icons/bs";
import { BiCameraMovie } from "react-icons/bi";
import { CiViewList } from "react-icons/ci";
import useDataLength from "../../hooks/useDataLength";
import styles from "./header.module.css";
import Navbar from "../../shared/Navbar/Navbar";

const Header = () => {
  const { wantToSee, myCollection, arrayReview } = useDataLength();

  return (
    <section className={styles.header}>
      <nav className={styles.navigation}>
        <Navbar path={ROUTES.wantToSee} icon={<BsFolder2Open />} dataLength={wantToSee.length}>
          Хочу посмотреть
        </Navbar>
        <Navbar
          path={ROUTES.myCollection}
          icon={<BiCameraMovie />}
          dataLength={myCollection.length}
        >
          Моя коллекция
        </Navbar>
        <Navbar path={ROUTES.myReviews} icon={<CiViewList />} dataLength={arrayReview.length}>
          Мои рецензии
        </Navbar>
        <Navbar path={ROUTES.whatToSee}>Что посмотреть?</Navbar>
      </nav>
    </section>
  );
};

export default Header;
