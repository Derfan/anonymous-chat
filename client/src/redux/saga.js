import {fork} from 'redux-saga/effects';
import {messageFlow} from './sagas/message'

export default function* () {
    yield fork(messageFlow);
};
