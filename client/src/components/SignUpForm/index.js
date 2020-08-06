import React from 'react';
import './styles.css';
import { reduxForm } from 'redux-form';

const SignUpForm = ({ 
    addUser, 
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
            onSubmit={handleSubmit(addUser)}
        >
            <div>
                <input
                    type="text"
                    placeholder="User Name"
                    value={props.userName}
                    onChange={updateUserName}
                    required
                />
            </div>
            <div>
                <input
                    type="email"
                    placeholder="Email Address"
                    value={props.email}
                    onChange={updateEmail}
                    required
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Password"
                    value={props.password}
                    onChange={updatePassword}
                    required
                />
            </div>
            <div>
                <input 
                    type="text"
                    placeholder="First Name"
                    value={props.firstName}
                    onChange={updateFirstName}
                    required
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Last Name"
                    value={props.lastName}
                    onChange={updateLastName}
                />
            </div>
            <div>
                <input
                    type="integer"
                    placeholder="Zip Code"
                    value={props.zipCode}
                    onChange={updateZipCode}
                    required
                />
            </div>
            <div>
                <select name="skillSelect" onChange={updateSkillLevel}>
                    <option value={2}>Class 1-2</option>
                    <option value={3}>Class 3</option>
                    <option value={4}>Class 4</option>
                    <option value={5}>Class 5</option>
                </select>
            </div>
            <div>
                <textarea
                    placeholder="Write About Yourself"
                    value={props.about}
                    onChange={updateAbout}
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