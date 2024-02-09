import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setResultSearch } from "../model/services/setResultSearch";
import Input from "shared/ui/Input/Input";
import Button from "shared/ui/Button/Button";
import styles from "./getFilmBySearch.module.scss";

const GetFilmBySearch = ({ disabled, placeholder, collectionType, handleMovie }) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const onSearch = async () => {
    setResultSearch(search, collectionType, dispatch, handleMovie);
    setSearch("");
  };
  return (
    <>
      <Input
        styles={styles.searchInput}
        disabled={disabled}
        placeholder={placeholder}
        handler={onChangeSearch}
        value={search}
      />
      <Button styles={styles.searchBtn} handler={() => onSearch()}>
        Найти
      </Button>
    </>
  );
};

export default GetFilmBySearch;
