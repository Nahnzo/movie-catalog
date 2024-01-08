import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getErrorUser, getIsAuthUser, getIsLoadingUser } from "../../model/selectors/getUserSelector";
import AuthForm from "../AuthForm/AuthForm";
import UserAvatar from "shared/assets/user-avatar-icon.svg";
import Svg from "shared/ui/Svg/Svg";
import styles from "./user.module.css";
// import { addToUserCollection } from "../../model/services/authService";
// import { userAdd } from "../../model/services/authService";

const User = memo(() => {
  const isLoading = useSelector(getIsLoadingUser);
  const isAuth = useSelector(getIsAuthUser);
  const error = useSelector(getErrorUser);
  const state = useSelector((state) => state.user);
  console.log(state);
  const dispatch = useDispatch();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await addToUserCollection("659aa78c5fe4e112f51a21f1", "77777", "myReviews");
  //     alert("Фильм успешно добавлен в вашу коллекцию");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      {state?.email ? state?.email : ""}
      <div className={styles.userContent}>
        <AuthForm />
        {/* <button onClick={handleSubmit}>sdasdasdasd</button> */}
        <div className={styles.userAvatar}>
          <Svg path={UserAvatar} styles={styles.svg} viewBox="7 7 58 58" />
        </div>
      </div>
    </>
  );
});

export default User;
