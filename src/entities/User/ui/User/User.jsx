import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import { useSelector } from "react-redux";
import { getErrorUser, getIsAuthUser, getIsLoadingUser } from "../../model/selectors/getUserSelector";

const User = () => {
  const isLoading = useSelector(getIsLoadingUser);
  const isAuth = useSelector(getIsAuthUser);
  const error = useSelector(getErrorUser);
  const state = useSelector((state) => state.user);
  console.log(state);

  return (
    <>
      {state?.email ? state?.email : ""}
      <AuthForm />
    </>
  );
};

export default User;
