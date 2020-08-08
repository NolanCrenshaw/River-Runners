import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';


import App from './App';
import configureStore from './store/configureStore';
import { loadUser } from './store/authentication'
import { TOKEN_KEY } from './constants'

const token = window.localStorage.getItem(TOKEN_KEY)
// const user = async () => await loadUser();

const initialState = {
  authentication: { token },
  // user: { user }
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

