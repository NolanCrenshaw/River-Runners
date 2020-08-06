// --- SignUpForm

import React from 'react';
import classes from './styles.css';
import { Field, reduxForm } from 'redux-form';

const SignUpForm = ({ 
    createUser, 
    fields: {
        userName,
        email,
        password,
        firstName,
        lastName,
        zipCode,
        skillLevel,
        about,
    },
    handleSubmit }) => {
        console.log(handleSubmit);
        return (
            <div className="signupScreen">
                <form 
                    onSubmit={handleSubmit(createUser)}
                >
                    <div>
                        <Field
                            component="input"
                            name="userName"
                            type="text"
                            placeholder="User Name"
                            required
                            {...userName}
                        />
                    </div>
                    <div>
                        <Field
                            component="input"
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            required
                            {...email}
                        />
                    </div>
                    <div>
                        <Field
                            component="input"
                            name="password"
                            type="password"
                            placeholder="Password"
                            required
                            {...password}
                        />
                    </div>
                    <div>
                        <Field
                            component="input"
                            name="firstName" 
                            type="text"
                            placeholder="First Name"
                            required
                            {...firstName}
                        />
                    </div>
                    <div>
                        <Field
                            component="input"
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            {...lastName}
                        />
                    </div>
                    <div>
                        <Field
                            component="input"
                            name="zipCode"
                            type="integer"
                            placeholder="Zip Code"
                            required
                            {...zipCode}
                        />
                    </div>
                    <div>
                        <select 
                            name="skillSelect" 
                            {...skillLevel}
                        >
                            <option value={2}>Class 1-2</option>
                            <option value={3}>Class 3</option>
                            <option value={4}>Class 4</option>
                            <option value={5}>Class 5</option>
                        </select>
                    </div>
                    <div>
                        <textarea
                            placeholder="Write About Yourself"
                            {...about}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                        >Submit</button>
                    </div>
                </form>
            </div>
)};

export default reduxForm({
    form: 'user',
    fields: [
        'userName',
        'email',
        'password',
        'firstName',
        'lastName',
        'zipCode',
        'skillLevel',
        'about',
    ],
})(SignUpForm);