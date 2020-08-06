import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createUser } from './store/user';

// FIX THE HANDLE SUBMIT

const SignUp = props => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [skillLevel, setSkillLevel] = useState('');
    const [about, setAbout] = useState('');
    // const [profilePicture, setProfilePicture] = useState({});
    // const [spriteId, setSpriteId] = useState(null);

    const updateUserName = e => setUserName(e.target.value);
    const updateEmail = e => setEmail(e.target.value);
    const updatePassword = e => setPassword(e.target.value);
    const updateFirstName = e => setFirstName(e.target.value);
    const updateLastName = e => setLastName(e.target.value);
    const updateZipCode = e => setZipCode(e.target.value);
    const updateSkillLevel = e => setSkillLevel(e.target.value);
    const updateAbout = e => setAbout(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            userName,
            email,
            password,
            firstName,
            lastName,
            zipCode,
            skillLevel,
            about,
        }
        return createUser(payload)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
        </div>
    )
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        createUser: data => dispatch(createUser(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);