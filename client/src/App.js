import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Login from './Login';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      rest.needLongin === true ? <Redirect to='/login' /> : <Component {...props} />)}
  />
);

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = 
//   }
// }


function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <div>
        <Login />
      </div>
    </div>
  );
}

export default App;
