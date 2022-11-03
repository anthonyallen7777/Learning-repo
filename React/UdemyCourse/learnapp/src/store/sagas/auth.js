import { delay } from 'redux-saga/effects';
import {put, call} from 'redux-saga/effects';
import axios from 'axios';

import * as actionCreators from '../actions/index';

const apiKey = 'key=AIzaSyB9uMUKyAyXTQ4wFQwA79qLSpNSl8kgOOU';

export function* logoutSaga() {
    yield call([localStorage,  'removeItem'], "token");
    yield call([localStorage,  'removeItem'], "expirationDate");
    yield call([localStorage,  'removeItem'], "userId");
    yield put(actionCreators.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationTime * 1000);
    yield put(actionCreators.logout()); //logs out after 1 hour
}

export function* authUserSaga(action) {
    yield put(actionCreators.authStart());
    const authData = {
        email: action.email,
        password: action.password,
        returnSecureToken: true,
    };
    let defaultUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?'+ apiKey;
    if (!action.isSignup) {
        defaultUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?' + apiKey;
    }
    try {
    const res = yield axios.post(defaultUrl, authData);
    const expirationDate = yield new Date(new Date().getTime() + res.data.expiresIn * 1000);
    yield localStorage.setItem('token', res.data.idToken);
    yield localStorage.setItem('expirationDate', expirationDate);
    yield localStorage.setItem('userId', res.data.localId);
    yield put(actionCreators.authSuccess(res.data.idToken, res.data.localId));
    yield put(actionCreators.checkAuthTimeout(res.data.expiresIn));
    } catch(err) {
        yield put(actionCreators.authFailed(err.response.data.error));
    }
}

export function* authCheckStateSaga(action) {
    const token = yield localStorage.getItem('token');
    if (!token) {
        yield put(actionCreators.logout());
    } else {
        const expirationDate = yield new Date(localStorage.getItem('expirationDate'));
        if (expirationDate <= new Date()) {
            yield put(actionCreators.logout());
        } else {
            const userId = yield localStorage.getItem('userId');
            yield put(actionCreators.authSuccess(token, userId));
            yield put(actionCreators.checkAuthTimeout((expirationDate.getTime() - new Date().getTime())/ 1000));
        }
    }
}