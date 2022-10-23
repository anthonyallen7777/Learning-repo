import * as actionTypes from './actions';

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case actionTypes.ADD_PERSON:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                color: action.payload.color,
                mood: action.payload.mood
            }
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }
        case actionTypes.DELETE_PERSON:
            const updatedArray = state.persons.filter(person => { //returns new array
                return person.id !== action.personId
            });

            return {
                ...state,
                persons: updatedArray
            }
    }
    return state;
}

export default reducer;