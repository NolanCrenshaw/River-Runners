import React, { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import './styles.css';
import { baseUrl } from  '../../config';
import defaultLogo from '../../images/default-profile-pic.jpg';

import { loadUser, setUser } from '../../store/authentication';
import Navbar from '../Navbar';

const profilePicSetter = () => {};
    
const spriteSetter = () => {};


const Home = props => {
    
    useEffect(() => {
        props.loadUser();
    }, [])

    return (
        <>
            <Navbar />
            <div className="home">
                <div className="home__userContainer">
                    <div className="home__userCard">
                        <div className="home__userCard--top">
                            <img 
                                className="image home__userCard--profilePicture" 
                                src={defaultLogo}
                            />
                            <div className="home__userCard--top-infoContainer">
                                <div className="home__userCard--userSprite-container">
                                    {/* <img 
                                        className="image home__userCard--userSprite"
                                        src={defaultSprite}
                                    /> */}
                                </div>
                                <div className="home__userCard--textbox">
                                    <p>{props.user.userName}</p>
                                    <p>{props.user.firstName} {props.user.lastName}</p>
                                    <p>{props.user.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        // userId: state.authentication.userId,
        // userName: state.authentication.userName,
        // firstName: state.authentication.firstName,
        // lastName: state.authentication.lastName,
        // email: state.authentication.email,
        // zipCode: state.authentication.zipCode,
        // skillLevel: state.authentication.skillLevel,
        // about: state.authentication.about,
        user: state.authentication.user,
        // token: state.authentication.token
    }
};
const mapDispatchToProps = dispatch => {
    return {
        loadUser: async () => dispatch(loadUser()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;