import { baseUrl } from '../config';
import { setToken } from '../store/authentication';
import {
    START_USER_ADD,
    ADD_USER,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,
    TOKEN_KEY,
} from '../constants';

const addUser = (user) => ({ type: ADD_USER, user });

export const createUser = () => async (dispatch, getState) => {
    dispatch({ type: START_USER_ADD });
    const form = getState().form;
    const user = {
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
        body: JSON.stringify(user)
    });
    dispatch(addUser(user));
    if (response.ok) {
        const res = await response.json();
        const { token } = res;
        window.localStorage.setItem(TOKEN_KEY, token);
        dispatch(setToken(token));
        console.log("Successfully Created User");
        dispatch({ type: ADD_USER_SUCCESS });
    } else {
        console.log("res failed!", response)
        dispatch({ type: ADD_USER_FAILURE })
    }
} 

export default function userReducer(state = { 
    users: {}, 
    addingUser: false
}, action) {
    switch (action.type) {
        case START_USER_ADD: {
            return {
                ...state,
                addingUser: true,
            }
        }
        case ADD_USER: {
            return {
                addingUser: false,
                users: [
                    state.users,
                    action.user,
                ]
            }
        }
        // case ADD_USER_SUCCESS:
        //     return Object.assign({}, state, {
        //         users: 
        //     })
        default:
            return state;
    }
}
