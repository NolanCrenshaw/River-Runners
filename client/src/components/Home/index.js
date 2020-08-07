import React from 'react';
import { connect } from 'react-redux';
import './styles.css';

import Navbar from '../Navbar';

const Home = () => {

    return (
        <>
            <Navbar />
            <div className="homeScreen">
                <div className="homeScreen__mainContainer">
                    <div className="tile is-ancestor">
                        <div className=""></div>

                    </div>

                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);