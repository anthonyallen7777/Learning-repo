import * as actionTypes from '../actions/actions';

const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.DECREMENT: return {...state, counter: state.counter - 1}
        case actionTypes.ADD: return {...state, counter: state.counter + action.payload.val}
        case actionTypes.SUBTRACT: return {...state, counter: state.counter - action.val}
    }
    return state;
};

export default reducer;