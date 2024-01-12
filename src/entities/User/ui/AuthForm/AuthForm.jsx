import React, { memo, useEffect, useState } from "react";
import Modal from "shared/ui/Modal/Modal";
import Input from "shared/ui/Input/Input";
import MyButton from "shared/ui/MyButton/MyButton";
import { checkAuth, userLogin, userLogout, userRegistration } from "shared/lib/config/authService";
import { useDispatch, useSelector } from "react-redux";
import { getErrorUser, getIsAuthUser, getIsLoadingUser } from "../../model/selectors/getUserSelector";
import { useModal } from "shared/lib/hooks/useModal";
import { userActions } from "../../model/slices/userSlice";
import styles from "./authForm.module.css";

const AuthForm = memo(() => {
  const isLoading = useSelector(getIsLoadingUser);
  const error = useSelector(getErrorUser);
  const isAuth = useSelector(getIsAuthUser);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { isOpened, handleModal } = useModal();

  const dispatch = useDispatch();

  const onSignUp = async () => {
    try {
      const response = await dispatch(userRegistration({ email: email, password: password }));
      if (!response.error) {
        handleModal();
        setEmail("");
        setPassword("");
      } else {
        throw new Error(response.payload);
      }
    } catch (error) {
      setEmail("");
      setPassword("");
      console.log(error);
    }
  };

  const onSignIn = async () => {
    try {
      const response = await dispatch(userLogin({ email: email, password: password }));
      if (response.payload.user) {
        handleModal();
        setEmail("");
        setPassword("");
      } else {
        throw new Error(response.payload);
      }
    } catch (error) {
      console.log(error);
      setEmail("");
      setPassword("");
    }
  };

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
  return (
    <>
      <Modal isOpen={isOpened} onClose={handleModal}>
        {isOpened && (
          <>
            <Input
              styles={styles.formInput}
              handler={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="email"
            />
            <Input
              styles={styles.formInput}
              handler={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="password"
            />
            <div className={styles.buttons}>
              <MyButton styles={styles.btnSignIn} handler={() => onSignIn({ email: email, password: password })}>
                Войти
              </MyButton>
              <MyButton styles={styles.btnSignUp} handler={() => onSignUp({ email: email, password: password })}>
                Регистрация
              </MyButton>
            </div>
            <p className={styles.error}>{error}</p>
          </>
        )}
      </Modal>
      <MyButton styles={styles.btnAuth} handler={isAuth ? onLogout : handleModal}>
        {isAuth ? "Выйти" : "Войти"}
      </MyButton>
    </>
  );
});

export default AuthForm;
