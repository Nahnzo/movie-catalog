import React, { useEffect, useState } from "react";
import Modal from "shared/ui/Modal/Modal";
import Input from "shared/ui/Input/Input";
import MyButton from "shared/ui/MyButton/MyButton";
import { checkAuth, userLogin, userLogout, userRegistration } from "../../model/services/authService";
import { useDispatch, useSelector } from "react-redux";
import { getErrorUser, getIsAuthUser, getIsLoadingUser } from "../../model/selectors/getUserSelector";
import { useModal } from "shared/lib/hooks/useModal";
import { userActions } from "../../model/slices/userSlice";
import styles from "./authForm.module.css";

const AuthForm = () => {
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
      } else {
        throw new Error(response.payload);
      }
    } catch (error) {
      console.log(error);
      setInformation("Пользователь с таким email уже зарегистрирован");
    }
  };

  const onSignIn = async () => {
    try {
      const response = await dispatch(userLogin({ email: email, password: password }));
      if (response.payload.user) {
        handleModal();
      } else {
        throw new Error(response.payload);
      }
    } catch (error) {
      setInformation(error.message);
    }
  };

  const onLogout = () => {
    dispatch(userLogout());
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await checkAuth();
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
      <button onClick={isAuth ? onLogout : handleModal}>{isAuth ? "Выйти" : "Войти"}</button>
    </>
  );
};

export default AuthForm;
