import React, { useState, useEffect, Children } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Switch, Route, NavLink } from 'react-router-dom';
import './styles.css';
import { baseUrl } from  '../../config';
import defaultLogo from '../../images/default-profile-pic.jpg';

import { loadUser, setUser } from '../../store/authentication';
import Navbar from '../Navbar';

import CreateTripFormContainer from '../../containers/CreateTripFormContainer';
import CreateVehicleFormContainer from '../../containers/CreateVehicleFormContainer';
import CreateCraftFormContainer from '../../containers/CreateCraftFormContainer';

const TripModal = ({ handleClose, show }) => {
    const showHideClassName = show ? "modal is-active" : "modal";

    return (
        <>
            <div className={showHideClassName}>
                <div className="modal-background">
                    <div class="modal__closeButton--container">
                        <button 
                            onClick={handleClose}
                            className="modal__closeButton"
                        >X Close</button>
                    </div>
                </div>
                <div className="modal-content">
                    <div className="modal-content__subContainer">
                        <CreateTripFormContainer />
                    </div>
                </div>
            </div>       
        </>
    )
}

const VehicleModal = ({ handleClose, show }) => {
    const showHideClassName = show ? "modal is-active" : "modal";

    return (
        <>
            <div className={showHideClassName}>
                <div className="modal-background">
                    <div class="modal__closeButton--container">
                        <button 
                            onClick={handleClose}
                            className="modal__closeButton"
                        >X Close</button>
                    </div>
                </div>
                <div className="modal-content">
                    <div className="modal-content__subContainer">
                        <CreateVehicleFormContainer />
                    </div>
                </div>
            </div>
        </>
    )
}

const CraftModal = ({ handleClose, show }) => {
    const showHideClassName = show ? "modal is-active" : "modal";

    return (
        <>
            <div className={showHideClassName}>
                <div className="modal-background">
                    <div class="modal__closeButton--container">
                        <button 
                            onClick={handleClose}
                            className="modal__closeButton"
                        >X Close</button>
                    </div>
                </div>
                <div className="modal-content">
                    <div className="modal-content__subContainer">
                        <CreateCraftFormContainer />
                    </div>
                </div>
            </div>
        </>
    )
}

const Home = props => {
    const [tripShow, setTripShow] = useState(false);
    const [vehicleShow, setVehicleShow] = useState(false);
    const [craftShow, setCraftShow] = useState(false);
    
    const showTripModal = () => {
        setTripShow(true);
    }
    const hideTripModal = () => {
        setTripShow(false);
    }

    const showVehicleModal = () => {
        setVehicleShow(true);
    }
    const hideVehicleModal = () => {
        setVehicleShow(false);
    }

    const showCraftModal = () => {
        setCraftShow(true);
    }
    const hideCraftModal = () => {
        setCraftShow(false);
    }
    

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
                                    {/* TODO -- User Sprite Here */}
                                </div>
                                <div className="home__userCard--textbox">
                                    <p>{props.user.userName}</p>
                                    <p>{props.user.firstName} {props.user.lastName}</p>
                                    <p>{props.user.email}</p>
                                </div>
                                <div className="home__modalButton--container">
                                    <TripModal show={tripShow} handleClose={hideTripModal} />
                                    <VehicleModal show={vehicleShow} handleClose={hideVehicleModal} />
                                    <CraftModal show={craftShow} handleClose={hideCraftModal} />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home__userContainer--subContainer">
                        <button
                            className="button is-danger home__userContainer--addButton"
                            onClick={showTripModal}
                        >Create a New Trip</button>
                        <button
                            className="button is-primary home__userContainer--addButton"
                            onClick={showVehicleModal}
                        >Add a Vehicle</button>
                        <button
                            className="button is-primary home__userContainer--addButton"
                            onClick={showCraftModal}
                        >Add a Boat</button>
                    </div>

                <div className="home__mainContainer">

                </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.authentication.user,
        token: state.authentication.token
    }
};
const mapDispatchToProps = dispatch => {
    return {
        loadUser: async () => dispatch(loadUser()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;