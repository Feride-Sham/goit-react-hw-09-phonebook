import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  registrationSuccess,
  registrationError,
  loginSuccess,
  loginError,
  logoutSuccess,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./auth-actions";

const initialUserState = {
  name: null,
  email: null,
};

// из response (операция register) приходит объект со свойствами
// user(объект:email,name) и token(строка)
const user = createReducer(initialUserState, {
  [registrationSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [registrationSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});


const isAuthenticated = createReducer(false, {
  [registrationSuccess]: () => true,
  [loginSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [registrationError]: () => false,
  [loginError]: () => false,
  [getCurrentUserError]: () => false,
  [logoutSuccess]: () => false,
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
});
