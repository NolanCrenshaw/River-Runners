import React from 'react';
import { connect } from 'react-redux';
import './styles.css';

const Navbar = () => {

    return (
        <>
            <div className="navbar">
                <div className="container navbar__mainContainer">

                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);