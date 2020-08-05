import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import authentication from './authentication';

const reducer = combineReducers({
  authentication,
});

const configureStore = initialState => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk, logger)),
  );
};

export default configureStore;
