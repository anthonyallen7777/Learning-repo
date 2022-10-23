const initialState = {
    counter: 0,
    results: [],
}

const reducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'INCREMENT': return {counter: state.counter + 1}
        case 'DECREMENT': return {counter: state.counter - 1}
        case 'ADD': return {counter: state.counter + action.payload.addVal}
        case 'SUBTRACT': return {counter: state.counter - action.subVal}
    }
    return state;
};

export default reducer;