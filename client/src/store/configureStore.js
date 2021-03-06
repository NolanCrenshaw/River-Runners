import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import authentication from './authentication';
import user from './user';
import vehicle from './vehicle';
import craft from './craft';

const reducer = combineReducers({
  authentication,
  user,
  vehicle,
  craft,
  form: formReducer
});

const configureStore = (initialState) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunkMiddleware, logger),
    ),
  );
};

export default configureStore;
