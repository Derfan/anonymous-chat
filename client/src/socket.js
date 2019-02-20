import io from 'socket.io-client';
import {eventChannel} from 'redux-saga';

const SOCKET_URL = 'http://10.10.11.171:5001';

export const socket = io(SOCKET_URL);

export const connect = () => new Promise((resolve) => {
    socket.on('connect', () => {
        resolve(socket);
    });
});

export const disconnect = () => new Promise((resolve) => {
    socket.on('disconnect', () => {
        resolve(socket);
    });
});

export const createSocketChannel = (socket) => eventChannel((emit) => {
    const handler = (data) => {
        emit(data);
    };

    socket.on('message', handler);

    return () => {
        socket.off('message', handler);
    };
});
