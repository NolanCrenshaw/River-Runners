import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import LoginFormContainer from './containers/LoginFormContainer';
import SignUpFormContainer from './containers/SignUpFormContainer';
import Home from './components/Home';
import Footer from './components/Footer';
import { loadToken, loadUser } from './store/authentication';
import { userInfo } from 'os';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      rest.needLogin === true ? <Redirect to='/login' /> : <Component {...props} />)}
  />
);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            user: ''
        };
    }
    
    async componentDidMount() {
        this.setState({ loaded: true });
        this.props.loadToken();
    }
    
    render() {
        if (!this.state.loaded) {
            return null;
        }

        return (
            <>
                <div className="deux">
                    <Switch>
                        <Route path='/login' component={LoginFormContainer} />
                        <Route path='/signup' component={SignUpFormContainer} />
                        <PrivateRoute 
                            path='/' 
                            exact={true}
                            needLogin={this.props.needLogin} 
                            component={Home} 
                            />
                    </Switch>
                    <Footer />
                </div>
            </>
        )
    }
};

const mapStateToProps = state => {
    return {
        needLogin: !state.authentication.token,
        user: state.authentication.user
    };
}

const mapDispatchToProps = dispatch => {
    return {
        loadToken: () => dispatch(loadToken()),
        loadUser: () => dispatch(loadUser()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
