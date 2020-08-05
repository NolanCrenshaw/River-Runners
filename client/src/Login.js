import React from 'react';
import { connect } from 'react-redux';
import { actions } from './store/authentication';

const Login = props => 
    <form>
        <div>
            <input
                onChange={props.updateEmailValue}
                value={props.email}
                type="email" 
                placeholder="Email" 
                required 
            />
        </div>
        <div>
            <input
                onChange={props.updatePasswordValue}
                type="password" 
                placeholder="Password" 
                required 
            />
        </div>
        <div>
            <button>Log In</button>
        </div>
    </form>
;

const mapStateToProps = state => {
    return {
        email: state.authentication.email,
        password: state.authentication.password
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateEmailValue: event => dispatch(actions.updateEmailValue(event.target.value)),
    };
};

export default connect(null)(Login);