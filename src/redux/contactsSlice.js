import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = {
    contacts: [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    lastDeletedContact: null,
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contacts.push(action.payload);
            },
            prepare(name, number) {
                return { payload: { id: nanoid(8), name, number } };
            },
        },
        deleteContact(state, action) {
            const contact = state.contacts.find(c => c.id === action.payload);
            state.contacts = state.contacts.filter(c => c.id !== action.payload);
            state.lastDeletedContact = contact || null;
        },
        restoreContact(state) {
            if (state.lastDeletedContact) {
                state.contacts.push(state.lastDeletedContact);
                state.lastDeletedContact = null;
            }
        },
    },
});

export const { addContact, deleteContact, restoreContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;