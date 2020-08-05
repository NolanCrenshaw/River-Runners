import React from 'react';
import { connect } from 'react-redux';
import { actions, thunks } from './store/authentication';

const Login = props => 
    <form onSubmit={props.tryLogin}>
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
                value={props.password}
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
        updatePasswordValue: event => dispatch(actions.updatePasswordValue(event.target.value)),
        tryLogin: () => dispatch(thunks.tryLogin()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);