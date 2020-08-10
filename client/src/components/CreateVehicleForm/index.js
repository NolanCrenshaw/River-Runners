// --- Create Vehicle Form

import React from 'react';
import './styles.css';
import { Field, reduxForm } from 'redux-form';
import { USER_KEY } from '../../constants';

import car from '../../images/carSprite.png';
import truck from '../../images/pickupSprite.png';
import suv from '../../images/suvSprite.png';

const currentUserId = window.localStorage.getItem(USER_KEY)

const CreateVehicleForm = ({
    createVehicle,
    fields: {
        userId,
        vehicleName,
        type,
        maxOccupancy,
        spriteId,
    },
    handleSubmit }) => {
        return (
            <div className="createVehicleForm">
                <div className="container createVehicleForm__mainContainer">
                    <form 
                        onSubmit={handleSubmit(createVehicle)}
                        className="createVehicleForm__mainContainer--form"
                    >
                        <div>
                            <Field 
                                component="input"
                                name="userId"
                                type="hidden"
                                value={currentUserId}
                                {...userId}
                            />
                        </div>
                        <p>Name to identify your vehicle</p>
                        <div>
                            <Field 
                                component="input"
                                name="vehicleName"
                                type="text"
                                placeholder="example: Make and Model"
                                required
                                {...vehicleName}
                            />
                        </div>
                        <p>Select your vehicle type</p>
                        <div>
                            <Field
                                component="select"
                                name="type"
                                {...type}
                            >
                                 <option value="Car">Car</option>
                                 <option value="Truck">Truck</option>
                                 <option value="SUV">SUV</option>
                            </Field>
                        </div>
                        <p>How many seatbelts does your vehicle have?</p>
                        <div>
                            <Field
                                component="input"
                                type="number"
                                name="maxOccupancy"
                                {...maxOccupancy}
                            />
                        </div>
                        <p>Select a sprite for your vehicle</p>
                        <div className="vehicleSprite__container">
                            <img className="vehicleSprite__one" src={car} />
                            <img className="vehicleSprite__two" src={truck} />
                            <img className="vehicleSprite__three" src={suv} />
                        </div>
                        <div className="control vehicle__radiobuttons">
                            <Field
                                component="input"
                                type="radio"
                                name="spriteId"
                                className="radio"
                                {...spriteId}
                            >

                            </Field>
                            <Field
                                component="input"
                                type="radio"
                                name="spriteId"
                                className="radio"
                                {...spriteId}
                            >
                            </Field>
                            <Field
                                component="input"
                                type="radio"
                                name="spriteId"
                                className="radio"
                                {...spriteId}
                            >
                            </Field>
                        </div>
                        <div className="createVehicleForm__submitButton--container">
                            <button
                                type="submit"
                                className="button is-primary createVehicleForm__submitButton"
                            >Submit</button>
                        </div>
                    </form>
                </div>
            </div>    
        )
    }

export default reduxForm({
    form: 'vehicle',
    fields: [
        'userId',
        'vehicleName',
        'type',
        'maxOccupancy',
        'spriteId',
    ],
})(CreateVehicleForm);