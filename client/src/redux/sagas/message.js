import {takeEvery, put} from 'redux-saga/effects';
import uuid from 'uuid/v1';
import * as types from '../actions/message';

function* newMessage({text}) {
    const message = {id: uuid(), text};

    yield put(types.saveMessage(message));
}

export function* messageFlow() {
    yield takeEvery(types.ADD_MESSAGE, newMessage);
}
