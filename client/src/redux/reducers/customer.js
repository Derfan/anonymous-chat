import * as types from '../actions/customer';

const initialState = {
    info: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SAVE_CUSTOMER_INFO:
            return {...state, info: action.info};
        default:
            return state;
    }
};

export const getCustomerInfo = state => state.customer.info;
