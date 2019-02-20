import * as types from '../actions/message';

const initialState = {
    list: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SAVE_MESSAGE:
            return {...state, list: [...state.list, action.message]};
        default:
            return state;
    }
};

export const getMessagesList = state => state.message.list;
