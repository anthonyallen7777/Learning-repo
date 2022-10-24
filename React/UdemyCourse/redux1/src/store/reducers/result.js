import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    results: [],
}

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => { // returns new array
        return result.id !== action.resultElementId
    });
    return updateObject(state, {result: updatedArray});
}

const reducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case actionTypes.STORE_RESULT:
        return updateObject(state,{
            results: state.results.concat({
                id: Math.floor(Math.random() * 1000),
                value: action.result * 2})
            }) //immutable way to change array})
        case actionTypes.DELETE_RESULT: return deleteResult(state, action);
            // //this is a reference since results is an object
            // //but since we are deleting the object and not changing
            // //any values inside the object storing as a reference type is okay
            // const id = 2;
            // const newArray = [...state.results];
            // updatedState.results.splice(id, 1);
    }
    return state;
};

export default reducer;