import {combineReducers} from 'redux';
import message from './reducers/message';

const initialState = {
    ping: 'TRUE'
};

export default combineReducers({
    message,
    test: (state = initialState) => state
});
