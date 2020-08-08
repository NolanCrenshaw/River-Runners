import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {

    return (
        <>
            <nav 
                className="navbar navbar__main"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand navbar__main--logoContainer">
                    <NavLink to='/' exact>
                        <div className="navbar__logo" />
                    </NavLink>
                    <NavLink to='/' exact>
                        <p className="navbar__logo--text">River Runners</p>
                    </NavLink>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <div className="navbar-item has-dropdown is-hoverable">
                            {/* <Link className="navbar-link">
                                Actions
                            </Link>
                            <div className="navbar-dropdown">
                                <NavLink 
                                    to='/craft' 
                                    exact
                                    className="navbar-item"
                                >Add a Craft</NavLink>
                                <NavLink 
                                    to='/vehicle' 
                                    exact
                                    className="navbar-item"
                                >Add a Vehicle</NavLink>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar__endContainer">
                            <button 
                                className="button is-danger"
                                // onClick={}
                            >Log Out</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);