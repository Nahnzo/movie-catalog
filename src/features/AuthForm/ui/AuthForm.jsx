import { memo, useState } from "react";
import Modal from "shared/ui/Modal/Modal";
import Input from "shared/ui/Input/Input";
import Button from "shared/ui/Button/Button";
import { userLogin, userRegistration } from "shared/lib/config/authService";
import { useDispatch, useSelector } from "react-redux";
import { getErrorUser } from "../model/selectors/getUserSelector";
import styles from "./authForm.module.scss";

const AuthForm = memo(({ isOpened, handleModal }) => {
  const error = useSelector(getErrorUser);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

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

  return (
    <>
      <Modal isOpen={isOpened} onClose={handleModal}>
        {isOpened && (
          <>
            <Input
              styles={styles.formInput}
              handler={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="working email"
            />
            <Input
              styles={styles.formInput}
              handler={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="password"
            />
            <div className={styles.buttons}>
              <Button styles={styles.btnSignIn} handler={() => onSignIn({ email: email, password: password })}>
                Войти
              </Button>
              <Button styles={styles.btnSignUp} handler={() => onSignUp({ email: email, password: password })}>
                Регистрация
              </Button>
            </div>
            <p className={styles.error}>{error}</p>
          </>
        )}
      </Modal>
    </>
  );
});

export default AuthForm;
