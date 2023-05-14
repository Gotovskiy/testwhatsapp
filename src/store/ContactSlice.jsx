import { createSlice } from "@reduxjs/toolkit";

export const ContactSlice = createSlice({
    name: "contacts",
    initialState:{
        SavedContacts: [],
        ActiveIndex: null,
    },
    reducers:{
     ChoseContact: (state , action) =>{
        const newIndex = state.SavedContacts.findIndex(item => item.id == action.payload)
        state.ActiveIndex = newIndex;
     },
     UploadContacts: (state,action) => {
        state.SavedContacts = action.payload;
     },
     UptadeUserInfo: (state, action) => {
        const index = state.SavedContacts.findIndex(item => item.id === action.payload.chatId);
        state.SavedContacts[index].fullinfo = action.payload;
     }   

    }
})

export const {ChoseContact , UploadContacts , UptadeUserInfo } = ContactSlice.actions;
export default ContactSlice.reducer;