import axios from "axios";
import {
  registrationRequest,
  registrationSuccess,
  registrationError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./auth-actions";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

// POST  ​/users​/signup
// Создать нового пользователя
const register = (credentials) => async (dispatch) => {
  dispatch(registrationRequest());

  try {
    const response = await axios.post("/users/signup", credentials);

    token.set(response.data.token);
    dispatch(registrationSuccess(response.data));
  } catch (error) {
    dispatch(registrationError(error.message));
  }
};

// POST  ​/users​/login
// Залогинить пользователя
const login = (credentials) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const response = await axios.post("/users/login", credentials);

    token.set(response.data.token);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

// POST ​/users​/logout
// Разлогинить пользователя
const logout = () => async (dispatch) => {
  dispatch(logoutRequest());

  try {
    await axios.post("/users/logout");

    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

// GET  ​/users​/current
// Получить информацию о текущем пользователе
const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  // проверяем, если токена нет, то выходим
  if (!persistedToken) {
    return;
  }
  // если токен есть, то добавляем его в header
  token.set(persistedToken);

  dispatch(getCurrentUserRequest());

  try {
    const response = await axios.get("/users/current");

    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};

export default { register, login, logout, getCurrentUser };
