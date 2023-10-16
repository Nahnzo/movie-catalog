import { ROUTES } from "../../routes";
import { BsFolder2Open } from "react-icons/bs";
import { BiCameraMovie } from "react-icons/bi";
import { CiViewList } from "react-icons/ci";
import { useDataLength } from "hooks/useDataLength";
import useLocalStorageData from "hooks/useLocalStorage";
import styles from "./header.module.css";
import Navbar from "../../shared/Navbar/Navbar";

const Header = () => {
  const data = useDataLength();
  // need to Fix!!!
  useLocalStorageData("myCollection");
  useLocalStorageData("myReviews");
  useLocalStorageData("wantToSee");

  return (
    <section className={styles.header}>
      <nav className={styles.navigation}>
        <Navbar path={ROUTES.wantToSee} icon={<BsFolder2Open />} dataLength={data.wantToSee.length}>
          Хочу посмотреть
        </Navbar>

        <Navbar
          path={ROUTES.myCollection}
          icon={<BiCameraMovie />}
          dataLength={data.myCollection.length}
        >
          Моя коллекция
        </Navbar>
        <Navbar path={ROUTES.myReviews} icon={<CiViewList />} dataLength={data.arrayReviews.length}>
          Мои рецензии
        </Navbar>
        <Navbar path={ROUTES.whatToSee}>Что посмотреть?</Navbar>
      </nav>
    </section>
  );
};

export default Header;
