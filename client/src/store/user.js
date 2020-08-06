import { baseUrl } from '../config';

export const handleSignUp = async (data) => {
    
}

export const createUser = (data) => async (dispatch, getState) => {
    const response = await fetch(`${baseUrl}/user`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    if (response.ok) {
        console.log("Successfully Created User");
    } else {
        console.log("res failed!")
    }
}

