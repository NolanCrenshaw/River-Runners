import { baseUrl } from '../config';
import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import {
    START_USER_ADD,
    ADD_USER,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,
} from '../constants';

const addUser = (user) => ({ type: ADD_USER, user });

export const createUser = () => async (dispatch, getState) => {
    dispatch({ type: START_USER_ADD });
    const form = getState().form;
    const user = {
        userName: form.user.userName.value,
        email: form.user.email.value,
        password: form.user.password.value,
        firstName: form.user.firstName.value,
        lastName: form.user.lastName.value,
        zipCode: form.user.zipCode.value,
        skillLevel: form.user.skillLevel.value,
        about: form.user.about.value,
    };
    const response = await fetch(`${baseUrl}/user`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    });
    dispatch(addUser(user));
    if (response.ok) {
        console.log("Successfully Created User");
        dispatch({ type: ADD_USER_SUCCESS });
    } else {
        console.log("res failed!")
        dispatch({ type: ADD_USER_FAILURE })
    }
} 

function mainReducer(state = {
    users: {},
    addingUser: false
}, action) {
    switch (action.type) {
        case START_USER_ADD:
            return Object.assign({}, state, {
                addingUser: true,
            })
        case ADD_USER:
            return Object.assign({}, state, {
                addingUser: false,
                users: {
                    ...state.users,
                    user: action.user,
                }
            })
        // case ADD_USER_SUCCESS:
        //     return Object.assign({}, state, {
        //         users: 
        //     })
        default:
            return state;
    }
}

const reducer = combineReducers({
    main: mainReducer,
    form: formReducer,
});

export default reducer;