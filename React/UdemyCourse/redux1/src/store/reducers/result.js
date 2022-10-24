import * as actionTypes from '../actions/actions';

const initialState = {
    results: [],
}

const reducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case actionTypes.STORE_RESULT: return {
            ...state,
            results: state.results.concat({
                id: new Date(),
                value: action.result}) //immutable way to change array
        }
        case actionTypes.DELETE_RESULT:
            // //this is a reference since results is an object
            // //but since we are deleting the object and not changing
            // //any values inside the object storing as a reference type is okay
            // const id = 2;
            // const newArray = [...state.results];
            // updatedState.results.splice(id, 1);
            
            const updatedArray = state.results.filter(result => { //returns new array
                return result.id !== action.resultElementId
            });

            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
};

export default reducer;