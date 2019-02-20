import {combineReducers} from 'redux';
import customer from './reducers/customer';
import message from './reducers/message';

const initialState = {
    ping: 'TRUE'
};

export default combineReducers({
    customer,
    message,
    test: (state = initialState) => state
});
