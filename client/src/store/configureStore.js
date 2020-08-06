import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import authentication from './authentication';
import user from './user';

const reducer = combineReducers({
  authentication,
  user,
});

const configureStore = initialState => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunkMiddleware, logger),
    ),
  );
};

export default configureStore;
