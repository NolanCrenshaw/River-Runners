import { baseUrl } from '../config';
import { ADD_VEHICLE, TOKEN_KEY } from '../constants';

const addVehicle = (vehicle) => ({ type: ADD_VEHICLE, vehicle });

export const createVehicle = () => async (dispatch, getState) => {
    const token = window.localStorage.getItem(TOKEN_KEY);
    console.log("GOT TO CREATE VEHICLE")
    const form = getState().form;
    const vehicle = {
        userId: form.vehicle.values.userId,
        vehicleName: form.vehicle.values.vehicleName,
        type: form.vehicle.values.type,
        maxOccupancy: form.vehicle.values.maxOccupancy,
        spriteId: form.vehicle.values.spriteId,
    };
    console.log("Vehicle Obj ", vehicle)
    const response = await fetch(`${baseUrl}/vehicles`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(vehicle)
    });
    console.log("CreateVehicle ", response)
    dispatch(addVehicle(vehicle));
    if (response.ok) {
        console.log("Vehicle added");
    } else {
        console.error("Bad response", response.status);
    }
}

export default function reducer(state = {}, action) {
    switch (action.type) {
        case ADD_VEHICLE: {
            const newState = { ...state };
            newState.vehicle = action.vehicle;
            return newState;
        }
        default: return state;
    }
}