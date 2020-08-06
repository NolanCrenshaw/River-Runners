import {
    ADD_USER,
} from './constants';

export function addUser() {
    return (dispatch, getState) => {
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
        dispatch({ type: ADD_USER, user })
    }
}