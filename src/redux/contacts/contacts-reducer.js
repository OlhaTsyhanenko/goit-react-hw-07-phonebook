import { combineReducers } from 'redux';
import { createReducer } from "@reduxjs/toolkit";
// import types from './contacts-types';
import actions from "./contacts-actions";

const items = createReducer([], {
    [actions.addContact]: (state, { payload }) => [...state, payload],
    [actions.deleteContact]: (state, {payload}) => state.filter(contact => contact.id !== payload),
})

const filter = createReducer('', {
    [actions.changeFilter]: (_, {payload}) => payload,
})


// const items = (state = [], { type, payload }) => {
//     switch (type) {
//         case types.ADD:
//                 if (state.find(contact => contact.name.toLowerCase() === payload.name.toLowerCase())) {
//       alert(`${payload.name} is already in contacts`);
//       return state;
//     }
//             return [...state, payload];
//         case types.DELETE:
//             console.log(state);
//             console.log(payload);
//             return state.filter(contact => contact.id !== payload);
//         default:
//            return state; 
//     }
// }

// const filter = (state = '', { type, payload }) => {
//     switch (type) {
//         case types.FILTER:
//             return payload;
//         default:
//            return state; 
//     }
// }

export default combineReducers({
    items,
    filter,
}) 