const redux = require("@reduxjs/toolkit");
const createStore = redux.configureStore;

const initialState = {
    counter: 0
};

//Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1 //state.counter is just read access so it is not mutating state
        };
    }
    if (action.type === 'ADDITION_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
};

//Store
const store = createStore({ reducer: rootReducer });
console.log(store.getState());

//Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

//Dispatching Action
store.dispatch({type: 'INCREMENT_COUNTER'});
store.dispatch({type: 'ADDITION_COUNTER', value: 10});

console.log(store.getState());