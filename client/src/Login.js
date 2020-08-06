import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { tryLogin } from './store/authentication';

class LoginForm extends Component {
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
            </div>
      );
    }
}
  


const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})
  
// const mapStateToProps = state => {
//     return {
//         token: state.authentication.token,
//     };
// };


// const mapDispatchToProps = dispatch => {
//     return {
//         tryLogin: (email, password) => dispatch(tryLogin(email, password))
//     };
// };
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    LoginForm  
);