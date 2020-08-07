import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const token = window.localStorage.getItem('riverRunners/authentication/token')

const initialState = {
  authentication: { token }
}; 

const store = configureStore(initialState);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  //{ </React.StrictMode>, }
  document.getElementById('root')
);

