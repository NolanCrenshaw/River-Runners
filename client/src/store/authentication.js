import { baseUrl } from "../config";
import {
  TOKEN_KEY,
  SET_TOKEN,
  REMOVE_TOKEN,
  USER_KEY,
  SET_USER,
  REMOVE_USER,
} from "../constants";

export const setToken = (token) => ({ type: SET_TOKEN, token });
export const removeToken = () => ({ type: REMOVE_TOKEN });
export const setUser = (user) => ({ type: SET_USER, user });
export const removeUser = () => ({ type: REMOVE_USER });

export const loadToken = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN_KEY);
  if (token) {
    dispatch(setToken(token));
  }
};

export const loadUser = () => async (dispatch) => {
  const userId = window.localStorage.getItem(USER_KEY);
  if (userId) {
    const res = await fetch(`${baseUrl}/users/${userId}`);
    if (!res.ok) {
      console.error("Bad Response", res.status);
    } else {
      const { user } = await res.json();
      dispatch(setUser(user));
    }
  }
};

export const tryLogin = (email, password) => async (dispatch) => {
  const response = await fetch(`${baseUrl}/session`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (response.status >= 200 && response.status < 400) {
    const { token, user } = await response.json();
    window.localStorage.setItem(TOKEN_KEY, token);
    window.localStorage.setItem(USER_KEY, user.id);
    dispatch(setUser(user));
    dispatch(setToken(token));
  } else if (response.status === 401) {
  } else {
    console.error("Bad Response", response.status);
  }
};

export const logout = () => async (dispatch, getState) => {
  console.log("LOGOUT REACHED");
  const {
    authentication: { token },
  } = getState();
  window.localStorage.removeItem(TOKEN_KEY);
  window.localStorage.removeItem(USER_KEY);
  dispatch(removeToken());
  dispatch(removeUser());
};

export const initialUserObj = {
  userId: "",
  userName: "",
  firstName: "",
  lastName: "",
  email: "",
  zipCode: "",
  skillLevel: "",
  about: "",
};

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_TOKEN: {
      const newState = { ...state };
      newState.token = action.token;
      return newState;
    }
    case REMOVE_TOKEN: {
      const newState = { ...state };
      delete newState.token;
      return newState;
    }
    case SET_USER: {
      const newState = { ...state };
      newState.user = action.user;
      return newState;
    }
    case REMOVE_USER: {
      const newState = { ...state };
      delete newState.user;
      return newState;
    }
    default:
      return state;
  }
}
