import { useDispatch } from "react-redux";
import { MovieActions } from "pages/MainPage/model/slices/MovieSlice";
import { useMemo, useState } from "react";
import { getFilmByName } from "../model/services/getFilmByName";
import Input from "shared/ui/Input/Input";
import Button from "shared/ui/Button/Button";
import styles from "./getFilmBySearch.module.scss";
import { setResultSearch } from "../model/services/setResultSearch";

const GetFilmBySearch = ({ disabled, placeholder, collectionType, handleMovie }) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  setResultSearch(search, collectionType, dispatch, handleMovie);
  // const actions = {
  //   movie: MovieActions.setFilmBySearch,
  // };
  console.log(1);

  // const setResultSearch = async () => {
  //   try {
  //     if (collectionType) {
  //       const result = await getFilmByName(`${search}`);
  //       const action = actions[collectionType];
  //       dispatch(action(result));
  //       setSearch("");
  //     } else {
  //       handleMovie(search);
  //     }
  //   } catch (error) {
  //     console.error("Error in setResultSearch:", error);
  //     setSearch("");
  //   }
  // };

  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <Input styles={styles.searchInput} disabled={disabled} placeholder={placeholder} handler={onChangeSearch} />
      {/* <Button styles={styles.searchBtn} handler={() => setResultSearch()}>
        Найти
      </Button> */}
    </>
  );
};

export default GetFilmBySearch;
