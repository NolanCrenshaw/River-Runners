import { baseUrl } from '../config';
import { ADD_CRAFT, TOKEN_KEY } from '../constants';

const addCraft = (craft) => ({ type: ADD_CRAFT, craft });

export const createCraft = () => async (dispatch, getState) => {
    const form = getState().form;
    const craft = {
        userId: form.craft.values.userId,
        craftName: form.craft.values.craftName,
        type: form.craft.values.type,
        maxOccupancy: form.craft.values.maxOccupancy,
        spriteId: form.craft.values.spriteId,
    };
    console.log("craft Obj ", craft)
    const response = await fetch(`${baseUrl}/crafts`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(craft)
    });
    console.log("Createcraft ", response)
    dispatch(addCraft(craft));
    if (response.ok) {
        console.log("craft added");
    } else {
        console.error("Bad response", response.status);
    }
}

export default function reducer(state = {}, action) {
    switch (action.type) {
        case ADD_CRAFT: {
            const newState = { ...state };
            newState.craft = action.craft;
            return newState;
        }
        default: return state;
    }
}