import {call, put, take, takeEvery, apply, all} from 'redux-saga/effects';
import {socket, connect, createSocketChannel} from '../../socket';
import * as types from '../actions/message';

function* auth() {
    const socket = yield call(connect);
    const socketChannel = yield call(createSocketChannel, socket);

    while (true) {
        const payload = yield take(socketChannel);

        yield put(types.addMessage(payload));
    }
}

function* sendMessage({payload}) {
    yield apply(socket, socket.emit, ['message', payload]);
}

export function* customerFlow() {
    yield all([
        auth(),
        takeEvery(types.SEND_MESSAGE, sendMessage)
    ]);
}
