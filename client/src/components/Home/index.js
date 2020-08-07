import React from 'react';
import { connect } from 'react-redux';
import './styles.css';

import Navbar from '../Navbar';

const Home = () => {

    return (
        <>
            <Navbar />
            <div className="homeScreen">
                <div className="tile is-ancestor">
                    <div className="tile is-vertical is-4">
                        <div className="tile">
                            <div className="tile is-parent is-vertical">
                                <div className="tile is-child is-primary">
                                    <p class="title">Hello World</p>
                                    <p class="subtitle">Tile Check</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);