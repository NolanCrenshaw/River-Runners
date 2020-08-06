import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import { ADD_USER } from './constants';

function mainReducer(state = {
    users: {},
    addingUser: false
}, action) {
    switch (action.type) {
        case START_USER_ADD:
            return Object.assign({}, state, {
                addingUser: true,
            })
        case ADD_USER:
            return Object.assign({}, state, {
                addingUser: false,
                users: {
                    ...state.users,
                    user: action.user,
                }
            })
        default:
            return state;
    }
}

const reducer = combineReducers({
    main: mainReducer,
    form: formReducer,
});

export default reducer;
