import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";

import App from "./App";
import configureStore from "./store/configureStore";
import { loadUser, initialUserObj } from "./store/authentication";
import { initialVehicleObj } from "./store/vehicle";
import { TOKEN_KEY } from "./constants";

const token = window.localStorage.getItem(TOKEN_KEY);
// const user = async () => await loadUser();

const initialState = {
  authentication: { token },
  vehicle: { initialVehicleObj },
  user: { initialUserObj },
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
  document.getElementById("root")
);
