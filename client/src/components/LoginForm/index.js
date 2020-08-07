import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './styles.css';
// import logo from '../../../public/images/josh-wedgewood-river-etive-unsplash';

export default class LoginForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
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
            return <Redirect to="/auth" />;
        }
        return (
            <div className="loginScreen">
                <div className="container loginScreen__mainContainer">
                    <div className="loginScreen__mainContainer--logo" />
                    <main>
                        <form 
                            className="loginScreen__mainContainer--form"
                            onSubmit={this.handleSubmit}>
                            <input type="text"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.updateEmail} />
                            <input type="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.updatePassword} />
                            <button 
                              type="submit"
                              className="button is-primary"
                            >Login</button>
                        </form>
                        <div className="loginScreen__mainContainer--signUp">
                          <div className="loginScreen__mainContainer--signUp-text">
                            <p>Don't Have an Account Yet?</p>
                          </div>
                          <div className="container  loginScreen_mainContainer--signUp-link">
                            <Link to="/signup">
                                <button 
                                  type="button"
                                  className="button is-danger is-fullwidth"
                                  >Sign Up
                                </button>
                            </Link>
                          </div>
                        </div>
                    </main>

                </div>
            </div>
            
      );
    }
}