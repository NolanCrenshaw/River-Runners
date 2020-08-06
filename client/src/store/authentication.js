import { baseUrl } from '../config';

const UPDATE_EMAIL_VALUE = 'riverRunners/authentication/UPDATE_EMAIL_VALUE';
const UPDATE_PASSWORD_VALUE = 'riverRunners/authenication/UPDATE_PASSWORD_VALUE';
const TOKEN_KEY = 'riverRunners/authentication/token';
const SET_TOKEN = 'riverRunners/authentication/SET_TOKEN';
const REMOVE_TOKEN = 'riverRunners/authentication/REMOVE_TOKEN';

const updateEmailValue = value => ({ type: UPDATE_EMAIL_VALUE, value });
const updatePasswordValue = value => ({ type: UPDATE_PASSWORD_VALUE, value });
const setToken = token => ({ type: SET_TOKEN, token });
const removeToken = () => ({ type: REMOVE_TOKEN });

export const loadToken = () => async dispatch => {
    const token = window.localStorage.getItem(TOKEN_KEY);
    if (token) {
        dispatch(setToken(token));
    }
};

export const tryLogin = (email, password) => async dispatch => {
    const response = await fetch(`${baseUrl}/session`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    if (response.status >= 200 && response.status < 400) {
        // needing to find way to set user to state
        const { token, user } = await response.json();
        window.localStorage.setItem(TOKEN_KEY, token);
        dispatch(setToken(token));
    } else if (response.status === 401) {
        console.log("Invalid Credientials")
    } else {
        console.error('Bad Response', response.status);
    }
};

export const logout = () => async (dispatch, getState) => {
    const { authentication: { token } } = getState();
    const response = await fetch(`${baseUrl}/session`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
    });
    if (response.ok) {
        window.localStorage.removeItem(TOKEN_KEY);
        dispatch(removeToken());
    } else {
        console.error("Bad Response");
    }
};

export const actions = {
    updateEmailValue,
    updatePasswordValue,
    setToken,
    removeToken,
}

export const thunks = {
    loadToken,
}

export default function reducer(state = {}, action) {
    switch (action.type) {
        case UPDATE_EMAIL_VALUE: {
            return {
                ...state,
                email: action.value,
            }
        }
        case UPDATE_PASSWORD_VALUE: {
            return {
                ...state,
                password: action.value,
            }
        }
        case SET_TOKEN: {
            return {
                ...state,
                token: action.token,
            };
        }
        case REMOVE_TOKEN: {
            const newState = { ...state };
            delete newState.token;
            return newState;
        }
        default: return state;
    }
}