// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;

let initialState = {
    counter: 0,
    futureValues: [],
    previousValues: []
}
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const UNDO = 'UNDO';
const REDO = 'REDO';

export function increment(amt){
    return {
        type: INCREMENT,
        payload: amt
    }
}

export function decrement(amt){
    return {
        type: DECREMENT,
        payload: amt
    }
}
export function undo(){
    return {
        type: UNDO
    };
}

export function redo(){
    return {
        type: REDO
    };
}

function reducer(state = initialState , action){
    switch(action.type){
        case INCREMENT:
            return Object.assign({}, state, {counter: state.counter + action.payload, futureValues:[], previousValues: [state.counter, ...state.previousValues]});
        case DECREMENT:
            return Object.assign({}, state, {counter: state.counter - action.payload , futureValues:[], previousValues: [state.counter,...state.previousValues]});
         case UNDO:
            return Object.assign({}, state, {counter: state.previousValues[0], futureValues: [state.counter, ...state.futureValues], previousValues: state.previousValues.slice(1, state.previousValues.length)});
        case REDO:
            return Object.assign({}, state, {counter: state.futureValues[0], futureValues: state.futureValues.slice(1, state.futureValues.length), previousValues: [state.counter, ...state.previousValues]});  
        default:
            return state
    }
    // return state;
}

export default reducer;

