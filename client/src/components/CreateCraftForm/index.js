// --- Create craft Form

import React from 'react';
import './styles.css';
import { Field, reduxForm } from 'redux-form';
import { USER_KEY } from '../../constants';

import kayak from '../../images/playBoatSprite.png';
import canoe from '../../images/canoeSprite.png';
import raft from '../../images/raftSprite.png';

const currentUserId = window.localStorage.getItem(USER_KEY)

const CreateCraftForm = ({
    createCraft,
    fields: {
        userId,
        CraftName,
        type,
        maxOccupancy,
        spriteId,
    },
    handleSubmit }) => {
        return (
            <div className="createCraftForm">
                <div className="container createCraftForm__mainContainer">
                    <form 
                        onSubmit={handleSubmit(createCraft)}
                        className="createCraftForm__mainContainer--form"
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
                        <p>Name to identify your craft</p>
                        <div>
                            <Field 
                                component="input"
                                name="CraftName"
                                type="text"
                                placeholder="example: Make and Model"
                                required
                                {...CraftName}
                            />
                        </div>
                        <p>Select your boat type</p>
                        <div>
                            <Field
                                component="select"
                                name="type"
                                {...type}
                            >
                                 <option value="Car">Kayak</option>
                                 <option value="Truck">Canoe</option>
                                 <option value="SUV">Raft</option>
                                 <option value="SUV">Shredder</option>
                            </Field>
                        </div>
                        <p>How many people does your boat carry?</p>
                        <div>
                            <Field
                                component="input"
                                type="number"
                                name="maxOccupancy"
                                {...maxOccupancy}
                            />
                        </div>
                        <p>Select a sprite for your boat</p>
                        <div className="craftSprite__container">
                            <img className="craftSprite__one" src={kayak} />
                            <img className="craftSprite__two" src={canoe} />
                            <img className="craftSprite__three" src={raft} />
                        </div>
                        <div className="control craft__radiobuttons">
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
                        <div className="createCraftForm__submitButton--container">
                            <button
                                type="submit"
                                className="button is-primary createCraftForm__submitButton"
                            >Submit</button>
                        </div>
                    </form>
                </div>
            </div>    
        )
    }

export default reduxForm({
    form: 'craft',
    fields: [
        'userId',
        'CraftName',
        'type',
        'maxOccupancy',
        'spriteId',
    ],
})(CreateCraftForm);