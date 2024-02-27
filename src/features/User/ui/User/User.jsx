import { memo, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "shared/lib/hooks/useModal";
import { userActions } from "../../model/slices/userSlice";
import { AuthForm } from "features/AuthForm/";
import { checkAuth } from "shared/lib/config/authService";
import { userLogout } from "shared/lib/config/authService";
import Button from "shared/ui/Button/Button";
import UserAvatar from "shared/assets/user-avatar-icon.svg";
import Svg from "shared/ui/Svg/Svg";
import styles from "./user.module.scss";

const User = memo(() => {
  const { isOpened, handleModal } = useModal();
  const dispatch = useDispatch();

  const onHandleModal = useCallback(() => {
    handleModal();
  }, [handleModal]);

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
      <p className={styles.email}>{state?.email ? state?.email : ""}</p>
      <div className={styles.userContent}>
        <Button styles={styles.btnAuth} handler={state.isAuth ? onLogout : onHandleModal}>
          {state.isAuth ? "Выйти" : "Войти"}
        </Button>
        <AuthForm isOpened={isOpened} handleModal={onHandleModal} />
        <div className={styles.userAvatar}>
          <Svg path={UserAvatar} styles={styles.svg} viewBox="7 7 58 58" />
        </div>
      </div>
    </>
  );
});

export default User;
