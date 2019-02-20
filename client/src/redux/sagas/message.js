import {takeEvery, put, apply} from 'redux-saga/effects';
import uuid from 'uuid/v1';
import * as types from '../actions/message';
import {socket} from '../../socket';

function* newMessage({payload}) {
    const message = {id: uuid(), ...payload};

    yield put(types.saveMessage(message));
}

export function* messageFlow() {
    yield takeEvery(types.ADD_MESSAGE, newMessage);
}
