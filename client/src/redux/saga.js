import {fork} from 'redux-saga/effects';
import {customerFlow} from './sagas/customer';
import {messageFlow} from './sagas/message';

export default function* () {
    yield fork(customerFlow);
    yield fork(messageFlow);
};
