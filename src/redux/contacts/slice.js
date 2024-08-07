import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations"
import { logOut } from "../auth/operations";


 const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: false,
    },
    extraReducers: builder => {
        builder.addCase(fetchContacts.pending, (state) => {
            state.isLoading = true;
            state.error = false;
        })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;

            })
            .addCase(fetchContacts.rejected, (state) => {
                state.error = true;
                state.isLoading = false;
            })
            .addCase(addContact.pending, (state) => {
            state.isLoading = true;
            state.error = false;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items.push(action.payload)
            })
            .addCase(addContact.rejected, (state) => {
                state.error = true;
                state.isLoading = false;
            })
            .addCase(deleteContact.pending, (state) => {
            state.isLoading = true;
            state.error = false;
            })
             .addCase(deleteContact.fulfilled, (state, action)=> {
                 state.isLoading = false;
                 state.items = state.items.filter(contact => contact.id !== action.payload.id)
             })
            .addCase(deleteContact.rejected, (state) => {
            state.error = true;
                state.isLoading = false;
            })
         .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.error = false;
        state.isLoading = false;
      })
    }
 })



export const contactsReducer = contactsSlice.reducer;




  