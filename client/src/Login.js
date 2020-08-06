import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actions, thunks, tryLogin } from './store/authentication';
import SignUp from './SignUp';

class LoginPanel extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: 'test@test.com',
        password: 'admin',
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    async handleSubmit(e) {
      e.preventDefault();
      this.props.tryLogin(this.state.email, this.state.password);
    }
  
    updateEmail = e => {
      this.setState({ email: e.target.value });
    }
  
    updatePassword = e => {
      this.setState({ password: e.target.value });
    }
  
    render() {
        if (this.props.token) {
            return <Redirect to="/" />;
        }
        return (
            <div className="loginScreen">
                <main className="centered middled">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.updateEmail} />
                        <input type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.updatePassword} />
                        <button type="submit">Login</button>
                    </form>
                </main>
                <SignUp />
            </div>
      );
    }
}
  
  
const mapStateToProps = state => {
    return {
        token: state.authentication.token,
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        tryLogin: (email, password) => dispatch(tryLogin(email, password))
    };
};
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    LoginPanel  
);

// const Login = props => 
//     <form onSubmit={props.tryLogin}>
//         <div>
//             <input
//                 onChange={props.updateEmailValue}
//                 value={props.email}
//                 type="email" 
//                 placeholder="Email" 
//                 required 
//             />
//         </div>
//         <div>
//             <input
//                 onChange={props.updatePasswordValue}
//                 value={props.password}
//                 type="password" 
//                 placeholder="Password" 
//                 required 
//             />
//         </div>
//         <div>
//             <button>Log In</button>
//         </div>
//     </form>
// ;

// const mapStateToProps = state => {
//     return {
//         email: state.authentication.email,
//         password: state.authentication.password
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         updateEmailValue: event => dispatch(actions.updateEmailValue(event.target.value)),
//         updatePasswordValue: event => dispatch(actions.updatePasswordValue(event.target.value)),
//         tryLogin: () => dispatch(tryLogin()),
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Login);