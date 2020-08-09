import { baseUrl } from '../config';
import { 
    ADD_VEHICLE, 
    SET_VEHICLES,
    TOKEN_KEY, 
    USER_KEY 
} from '../constants';

const addVehicle = (vehicle) => ({ type: ADD_VEHICLE, vehicle });
const setVehicles = (vehicles) => ({ type: SET_VEHICLES, vehicles });

export const getVehicles = () => async (dispatch, getState) => {
    const currentUserId = window.localStorage.getItem(USER_KEY);
    const response = await fetch(`${baseUrl}/vehicles/user${currentUserId}`);
    if (!response.ok) { 
        console.error("Bad response", response.status);
    }
    const userVehicles = await response.json();
    const { vehicles } = userVehicles;
    dispatch(setVehicles(vehicles));
}

export const createVehicle = () => async (dispatch, getState) => {
    const token = window.localStorage.getItem(TOKEN_KEY);
    const currentUserId = window.localStorage.getItem(USER_KEY);
    const form = getState().form;
    const vehicle = {
        userId: currentUserId,
        vehicleName: form.vehicle.values.vehicleName,
        type: form.vehicle.values.type,
        maxOccupancy: form.vehicle.values.maxOccupancy,
        spriteId: form.vehicle.values.spriteId,
    };
    const response = await fetch(`${baseUrl}/vehicles`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ vehicle, token })
    });
    dispatch(addVehicle(vehicle));
    if (!response.ok) {
        console.error("Bad response", response.status);
    }
}

const initialVehicleObj = {
    userId: '',
    vehicleName: '',
    type: '',
    maxOccupancy: '',
    spriteId: '',
}

export default function reducer(state = {}, action) {
    switch (action.type) {
        case ADD_VEHICLE: {
            const newState = { ...state };
            newState.userVehicles = action.vehicle;
            return newState;
        }
        case SET_VEHICLES: {
            const newState = { ...state };
            newState.userVehicles = action.vehicles;
            
            return newState;
        }
        default: return state;
    }
}