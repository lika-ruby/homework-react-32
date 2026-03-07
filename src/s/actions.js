import { createAction, nanoid } from "@reduxjs/toolkit";

export const addContact = createAction(
    "contacts/addContact",
    (name, number) => ({
        payload: {
            id: nanoid(8),
            name,
            number,
        },
    })
);

export const deleteContact = createAction("contacts/deleteContact");

export const restoreContact = createAction("contacts/restoreContact");
export const setFilter = createAction("filters/setFilter");