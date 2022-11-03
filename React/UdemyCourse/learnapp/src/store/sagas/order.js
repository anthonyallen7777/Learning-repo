import {put} from 'redux-saga/effects';
import axios from '../../axios-orders';

import * as actionCreators from '../actions/index';

export function* purchaseBurgerSaga(action) {
    yield put(actionCreators.purchaseBurgerStart());
    try {
        const res = yield axios.post('/orders.json?auth=' + action.token, action.orderData);
        yield put(actionCreators.purchaseBurgerSuccess(res.data.name, action.orderData));
    } catch(err) {
        yield put(actionCreators.purchaseBurgerFail(err));
    }
}

export function* fetchOrdersSaga(action) {
    yield put(actionCreators.fetchOrdersStart());
    const queryParams = yield '?auth=' + action.token + '&orderBy="userId"&equalTo="' + action.userId + '"';
    try {
        const res = yield axios.get( '/orders.json' + queryParams);
        const fetchedOrders = [];
        for ( let key in res.data ) {
            fetchedOrders.push( {
                ...res.data[key],
                id: key
            });
        }
        yield put(actionCreators.fetchOrdersSuccess(fetchedOrders));
    } catch(err) {
        yield put(actionCreators.fetchOrdersFail(err));
    }
}