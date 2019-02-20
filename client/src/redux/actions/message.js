export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SAVE_MESSAGE = 'SAVE_MESSAGE';

export const addMessage = text => ({
    type: ADD_MESSAGE,
    text
});

export const saveMessage = message => ({
    type: SAVE_MESSAGE,
    message
});
