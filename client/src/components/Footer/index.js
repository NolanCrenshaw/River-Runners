import React from 'react';
import { connect } from 'react-redux';
import './styles.css';

const Footer = () => {

    return (
        <>
            <footer className="footer footer__mainContainer">
                <div className="content has-text-centered">
                    <p>Footer Text</p>
                    
                </div>
            </footer>
        </>
    )
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);