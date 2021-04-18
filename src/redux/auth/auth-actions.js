import { createAction } from "@reduxjs/toolkit";

// регистрация
export const registrationRequest = createAction("auth/registrationRequest");
export const registrationSuccess = createAction("auth/registrationSuccess");
export const registrationError = createAction("auth/registrationError");

// ввести логин
export const loginRequest = createAction("auth/loginRequest");
export const loginSuccess = createAction("auth/loginSuccess");
export const loginError = createAction("auth/loginError");

// выйти со своего пользователя
export const logoutRequest = createAction("auth/logoutRequest");
export const logoutSuccess = createAction("auth/logoutSuccess");
export const logoutError = createAction("auth/logoutError");

//получить данные текущего пользователя
export const getCurrentUserRequest = createAction("auth/getCurrentUserRequest");
export const getCurrentUserSuccess = createAction("auth/getCurrentUserSuccess");
export const getCurrentUserError = createAction("auth/getCurrentUserError");
