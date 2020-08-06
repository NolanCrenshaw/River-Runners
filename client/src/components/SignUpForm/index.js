// --- SignUpForm

import React from 'react';
import './styles.css';
import { reduxForm } from 'redux-form';

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
    handleSubmit }) => (
        <form 
            onSubmit={handleSubmit(createUser)}
        >
            <div>
                <input
                    type="text"
                    placeholder="User Name"
                    required
                    {...userName}
                />
            </div>
            <div>
                <input
                    type="email"
                    placeholder="Email Address"
                    required
                    {...email}
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Password"
                    required
                    {...password}
                />
            </div>
            <div>
                <input 
                    type="text"
                    placeholder="First Name"
                    required
                    {...firstName}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Last Name"
                    {...lastName}
                />
            </div>
            <div>
                <input
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
);

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