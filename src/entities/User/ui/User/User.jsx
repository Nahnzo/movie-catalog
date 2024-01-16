import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "shared/lib/hooks/useModal";
import { userActions } from "../../model/slices/userSlice";
import { AuthForm } from "features/AuthForm/";
import { checkAuth } from "shared/lib/config/authService";
import MyButton from "shared/ui/MyButton/MyButton";
import UserAvatar from "shared/assets/user-avatar-icon.svg";
import Svg from "shared/ui/Svg/Svg";
import styles from "./user.module.css";
import { userLogout } from "../../../../shared/lib/config/authService";

const User = memo(() => {
  // const isLoading = useSelector(getIsLoadingUser);
  // const isAuth = useSelector(getIsAuthUser);
  // const error = useSelector(getErrorUser);
  const { isOpened, handleModal } = useModal();

  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(userLogout());
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(checkAuth());
        const token = localStorage.getItem("token");
        if (!token) {
          dispatch(userActions.handleIsAuthUser(false));
        } else {
          dispatch(userActions.handleIsAuthUser(true));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch]);
  const state = useSelector((state) => state.user);
  return (
    <>
      {state?.email ? state?.email : ""}
      <div className={styles.userContent}>
        <MyButton styles={styles.btnAuth} handler={state.isAuth ? onLogout : handleModal}>
          {state.isAuth ? "Выйти" : "Войти"}
        </MyButton>
        <AuthForm isOpened={isOpened} handleModal={handleModal} />
        <div className={styles.userAvatar}>
          <Svg path={UserAvatar} styles={styles.svg} viewBox="7 7 58 58" />
        </div>
      </div>
    </>
  );
});

export default User;
