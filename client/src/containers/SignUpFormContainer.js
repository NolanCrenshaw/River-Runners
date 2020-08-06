import React from 'react';
import { connect } from 'react-redux';
import SignUpForm from '../components/SignUpForm';
import { createUser } from '../store/user';

class SignUpFormContainer extends React.Component {
    render() {
        return (
            <SignUpForm {...this.props}/>
        )
    }
}

const mapStateToProps = state => {}

const mapDispatchToProps = dispatch => ({
    createUser: () =>  dispatch(createUser()) 
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpFormContainer);