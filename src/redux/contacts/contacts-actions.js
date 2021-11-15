import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";
// import types from './contacts-types';

const addContact = createAction('contacts/add', (name, number) => {
    return {
        payload: {
        name,
        number,
        id: shortid.generate(),
    }
    }
});
const deleteContact =  createAction('contacts/delete');
const changeFilter = createAction('contacts/filter');

// const addContact = (name, number) => ({
//     type: types.ADD,
//     payload: {
//         name,
//         number,
//         id: shortid.generate(),
//     }
// });

// const deleteContact = (contactId) => ({
//     type: types.DELETE,
//     payload: contactId,
// });

// const changeFilter = value => ({
//     type: types.FILTER,
//     payload: value,
// })


 export default { addContact, deleteContact, changeFilter };