import { baseUrl } from '../config';
import { ADD_CRAFT, TOKEN_KEY, USER_KEY } from '../constants';

const addCraft = (craft) => ({ type: ADD_CRAFT, craft });

export const createCraft = () => async (dispatch, getState) => {
    const token = window.localStorage.getItem(TOKEN_KEY);
    const currentUserId = window.localStorage.getItem(USER_KEY);
    const form = getState().form;
    const craft = {
        userId: currentUserId,
        craftName: form.craft.values.craftName,
        type: form.craft.values.type,
        maxOccupancy: form.craft.values.maxOccupancy,
        spriteId: form.craft.values.spriteId,
    };
    const response = await fetch(`${baseUrl}/crafts`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ craft, token })
    });
    dispatch(addCraft(craft));
    if (!response.ok) {
        console.error("Bad response", response.status);
    }
}

export default function reducer(state = {}, action) {
    switch (action.type) {
        case ADD_CRAFT: {
            const newState = { ...state };
            newState.crafts = [
                ...newState.crafts,
                action.craft
            ]
            return newState;
        }
        default: return state;
    }
}