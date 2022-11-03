import { put } from "redux-saga/effects";
import axios from "../../axios-orders";
import * as actionCreators from '../actions/index';

export function* initIngredientsSaga (action) {
    try {
        const res = yield axios.get('https://react-learn1-default-rtdb.firebaseio.com/ingredients.json');
        yield put(actionCreators.setIngredients(res.data));
    } catch(err) {
        yield put(actionCreators.fetchIngredientsFailed());
    }
}