import { baseUrl } from '../config';
import { TOKEN_KEY, SET_TOKEN, REMOVE_TOKEN } from '../constants'

export const setToken = token => ({ type: SET_TOKEN, token });
export const removeToken = () => ({ type: REMOVE_TOKEN });

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
        const { token, jti, user } = await response.json();
        window.localStorage.setItem(TOKEN_KEY, token);
        dispatch(setToken(token));
    } else if (response.status === 401) {
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

export default function reducer(state = {}, action) {
    switch (action.type) {
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