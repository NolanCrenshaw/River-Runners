// --- SignUpForm

import React from 'react';
import './styles.css';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';

const SignUpForm = ({ 
    createUser,
    token, 
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
        if (token) {
            return <Redirect to="/" />;
        }
        return (
            <div className="signUpScreen">
                <div className="container signUpScreen__mainContainer">
                    <div className="signUpScreen__mainContainer--logo"/>
                    <form 
                        onSubmit={handleSubmit(createUser)}
                        className="signUpScreen__mainContainer--form"
                    >
                        <div className="signUpScreen__mainContainer--form-div">
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
                        <p>What Is Your Skill Level?</p>
                        <div className="select is-primary is-rounded signUpScreen__mainContainer--form-select">
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
                        <p>Tell Us About Your Boating</p>
                        <div className="signUpScreen__mainContainer--form-textContainer">
                            <textarea
                                className="textarea has-fixed-size signUpScreen__mainContainer--form-textarea"
                                placeholder="..."
                                {...about}
                            />
                        </div>
                        <div className="signUpScreen__mainContainer--form-buttonContainer">
                            <button
                                type="submit"
                                className="button is-primary signUpScreen__mainContainer--form-button"
                            >Submit</button>
                        </div>
                    </form>
                </div>
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