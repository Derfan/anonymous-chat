export const SEND_MESSAGE = 'SEND_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SAVE_MESSAGE = 'SAVE_MESSAGE';

export const sendMessage = (payload) => ({
    type: SEND_MESSAGE,
    payload
});

export const addMessage = ({type = 'MESSAGE', ...rest}) => ({
    type: ADD_MESSAGE,
    payload: {type, ...rest}
});

export const saveMessage = message => ({
    type: SAVE_MESSAGE,
    message
});
