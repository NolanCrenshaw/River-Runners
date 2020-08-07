import React from 'react';
import { connect } from 'react-redux';
import './styles.css';

const Home = () => {

    return (
        <div className="homeScreen">
            <div className="homeScreen__mainContainer">

            </div>
        </div>
    )
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);