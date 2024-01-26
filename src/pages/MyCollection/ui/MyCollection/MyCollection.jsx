import { ROUTES } from "shared/lib/config/routes";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "shared/ui/Sidebar/Sidebar";
import { getMovieForCollection } from "../../model/selectors/getMovieForCollection/getMovieForCollection";
import { MyCollectionActions } from "../../model/slices/MyCollectionSlice";
import { useDataLength } from "shared/lib/hooks/useDataLength";
import Footer from "shared/ui/Footer/Footer";
import Navbar from "shared/ui/Navbar/Navbar";
import MyButton from "shared/ui/MyButton/MyButton";
import useLocalStorageData from "shared/lib/hooks/useLocalStorage";
import Svg from "shared/ui/Svg/Svg";
import FilmIcon from "shared/assets/film-icon.svg";
import ListReviewIcon from "shared/assets/list-review-icon.svg";
import styles from "./myCollection.module.css";
import Slider from "widgets/Slider/Slider";
import {
  LOCAL_STORAGE_MY_COLLECTION,
  LOCAL_STORAGE_MY_REVIEWS,
  LOCAL_STORAGE_WANT_TO_SEE,
} from "shared/lib/const/const";
import Header from "shared/ui/Header/Header";
import { getIsAuthUser } from "../../../MainPage";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MyCollectionCard from "../MyCollectionCard/MyCollectionCard";

const MyCollection = () => {
  const dispatch = useDispatch();
  const movies = useSelector(getMovieForCollection);
  const isAuth = useSelector(getIsAuthUser);
  const navigate = useNavigate();

  const { wantToSeeLength, myCollectionLength, myReviewsLength } = useDataLength();
  useLocalStorageData([LOCAL_STORAGE_MY_COLLECTION, LOCAL_STORAGE_MY_REVIEWS, LOCAL_STORAGE_WANT_TO_SEE]);

  useEffect(() => {
    if (!localStorage.getItem("userEmail")) {
      navigate(ROUTES.home);
    }
  }, [navigate]);

  return (
    <section className={styles.main}>
      <Header />
      <div className={styles.mainWrapper}>
        <Sidebar />
        <Slider width="80%" height="80%" sizeCard={1500} itemsPerPage={1}>
          {movies.map((item) => (
            <MyCollectionCard movie={item} key={item.id} />
          ))}
        </Slider>
      </div>
      <Footer />
    </section>
  );
};

export default MyCollection;

// <div className={styles.myCollection}>
//           {!myCollectionLength ? (
//             <h1 className={styles.listEmpty}>Список пуст</h1>
//           ) : (
//             movies.map((item) => <MyCollectionCard movie={item} key={item.id} />)
//           )}
//         </div>
{
  /*      
          <MyButton styles={styles.deleteAll} handler={() => dispatch(MyCollectionActions.clearAll())}>
            Очистить список ({myCollectionLength})
          </MyButton> */
}
