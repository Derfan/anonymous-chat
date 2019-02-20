import {call, put, take, takeEvery, apply, all} from 'redux-saga/effects';
import uuid from 'uuid/v1';
import {socket, connect, createSocketChannel} from '../../socket';
import {addMessage, saveMessage, ADD_MESSAGE, SEND_MESSAGE} from '../actions/message';
import {saveCustomerInfo} from "../actions/customer";

function* socketListener() {
    const socket = yield call(connect);
    const socketChannel = yield call(createSocketChannel, socket);

    while (true) {
        const payload = yield take(socketChannel);

        yield put(addMessage(payload));
    }
}

function* newMessage({payload}) {
    const message = {id: uuid(), ...payload};

    if (payload.type === 'CONNECT') {
        yield put(saveCustomerInfo(payload.customer));
    }

    yield put(saveMessage(message));
}

function* sendMessage({payload}) {
    yield apply(socket, socket.emit, ['message', payload]);
}

export function* socketFlow() {
    yield all([
        socketListener(),
        takeEvery(ADD_MESSAGE, newMessage),
        takeEvery(SEND_MESSAGE, sendMessage)
    ]);
}
