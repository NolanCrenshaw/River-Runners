import { baseUrl } from '../config';
import { setToken, setUser } from '../store/authentication';
import {
    ADD_USER,
    // ADD_USER_SUCCESS,
    // ADD_USER_FAILURE,
    TOKEN_KEY,
    USER_KEY,
} from '../constants';

const addUser = (user) => ({ type: ADD_USER, user });

export const createUser = () => async (dispatch, getState) => {
    const form = getState().form;
    const newUser = {
        userName: form.user.values.userName,
        email: form.user.values.email,
        password: form.user.values.password,
        firstName: form.user.values.firstName,
        lastName: form.user.values.lastName,
        zipCode: form.user.values.zipCode,
        skillLevel: form.user.values.skillLevel,
        about: form.user.values.about,
    };
    const response = await fetch(`${baseUrl}/users`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
    });
    if (response.ok) {
        const res = await response.json();
        const { token, user } = res;
        window.localStorage.setItem(TOKEN_KEY, token);
        window.localStorage.setItem(USER_KEY, user.id)
        dispatch(addUser(user));
        dispatch(setToken(token));
        dispatch(setUser(user));
    } else {
        console.error('Bad Response ', response.status);
    }
}


export default function userReducer(state = {}, action) {
    switch (action.type) {
        case ADD_USER: {
            const newState = { ...state };
            newState.user = action.user;
            return newState;
        }
        default:  return state;
    }
}
