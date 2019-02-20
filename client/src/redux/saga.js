import {fork} from 'redux-saga/effects';
import {socketFlow} from './sagas/message';

export default function* () {
    yield fork(socketFlow);
};
