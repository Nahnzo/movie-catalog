import React, { useEffect, useState } from "react";
import Modal from "shared/ui/Modal/Modal";
import Input from "shared/ui/Input/Input";
import { checkAuth, userActions, userLogin, userLogout, userRegistration } from "../../model/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { getErrorUser, getIsAuthUser, getIsLoadingUser } from "../../model/selectors/getUserSelector";
import { useModal } from "shared/lib/hooks/useModal";

export const onSignUp = async ({ email, password, callback }) => {
  try {
    // const dispatch = useDispatch();
    // const response = await dispatch(userRegistration({ email: email, password: password }));
    const response = await callback(userRegistration({ email: email, password: password }));
    if (!response.error) {
      handleModal();
    } else {
      throw new Error(response.payload);
    }
  } catch (error) {
    console.log(error);
    // setInformation("Пользователь с таким email уже зарегистрирован");
  }
};

export const onSignIn = async ({ email, password, callback }) => {
  try {
    console.log(email, password);
    // const response = await dispatch(userLogin({ email: email, password: password }));
    const response = await callback(userLogin({ email: email, password: password }));

    if (response.payload.user) {
      handleModal();
    } else {
      throw new Error(response.payload);
    }
  } catch (error) {
    // setInformation(error.message);
    console.log(error);
  }
};

export const onLogout = ({ callback }) => {
  callback(userLogout());
};
